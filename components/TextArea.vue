<script setup lang="ts">
  const model = defineModel<string>();
  const props = defineProps<{ name: string; label: string }>();
</script>

<template>
  <label
    :for="props.name"
    class="text-md relative p-3 my-2 block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <textarea
      :id="props.name"
      v-model="model"
      class="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
      rows="4"
      :placeholder="props.label"
    ></textarea>

    <span
      class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-900 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      {{ props.label }}
    </span>
  </label>
</template>
