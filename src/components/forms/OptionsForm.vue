<template>
  <Toast />
  <Panel header="options" toggleable class="options-panel">
    <form @submit.prevent="onSubmit" id="options-form">
      <div class="form-item">
        <label for="challenges">How many to solve per day?</label>
        <InputNumber
          v-model="value"
          inputId="challenges"
          showButtons
          class="number-input"
          :class="{ 'p-invalid': errorMessage }"
          aria-describedby="number-error"
        />
        <small class="p-error" id="number-error">{{
          errorMessage || (errors.length > 0 ? errors : '&nbsp;')
        }}</small>
      </div>
      <div class="form-item">
        <label for="include_recent">Include language(s) most recently used? </label>
        <Checkbox v-model="include_recent" :binary="true" inputId="include_recent" />
      </div>
      <Button label="submit" type="submit" />
    </form>
  </Panel>
</template>

<script setup>
import InputNumber from 'primevue/inputnumber'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import { ref } from 'vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'
import { useLeetcodeStore } from '@/stores/programmingLanguages'
const leetcodeStore = useLeetcodeStore()
const toast = useToast()
const { handleSubmit, resetForm } = useForm()
const { value, errorMessage, errors } = useField('value', validateField)

function validateField(value) {
  if (value < 1) {
    return 'must be greater than zero'
  }

  return true
}
const include_recent = ref(false)
const onSubmit = handleSubmit((values, action) => {
  if (values.value && values.value > 0 && values.value <= leetcodeStore.collection.length) {
    leetcodeStore.updateOptions({ challenges: values.value, include_recent: include_recent.value })
    toast.add({
      severity: 'success',
      summary: 'Options Updated!',
      life: 3000
    })
    resetForm()
  } else {
    action.setErrors({ value: 'Enter a valid number' })
  }
})
</script>

<style lang="scss" scoped>
#options-form {
  display: flex;
  flex-direction: column;

  .form-item {
    margin-bottom: 1rem;
  }
  .number-input {
    display: flex;
  }
}
</style>
