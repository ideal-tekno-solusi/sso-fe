<script setup lang="ts">
import { toRefs } from "vue"

const props = defineProps({
  modelValue: { type: String, required: true }, // from v-model
  label: String,
})
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>()

const { modelValue: value, label } = toRefs(props)

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit("update:modelValue", value)
}
</script>

<template>
  <div class="text-input">
    <label v-if="label" :for="$attrs.id as string">
      {{ label }}
    </label>
    <input v-bind="$attrs" :value="value" @input="onInput" />
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>
