<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import Button from "../components/Button.vue"
import TextInput from "../components/TextInput.vue"
import { AuthService } from "../services/auth.service"
import type { LoginPayload } from "../types/auth.type"

const username = ref("alfian")
const password = ref("budika123")

const { query } = useRoute()

const handleSubmit = () => {
  const payload = {
    ...query,
    username: username.value,
    password: password.value,
  } as LoginPayload

  AuthService.login(payload)
    .then(res => {
      if (res.status == 200) {
        window.location.href = res.data.redirect_uri + "?code=" + res.data.code
      }

      console.warn(res.status)
    })
    .catch(console.error)
    .finally(() => console.info("success"))
}
</script>

<template>
  <div class="login-page">
    <form @submit.prevent="handleSubmit">
      <TextInput
        v-model="username"
        id="username"
        label="Username"
        autocomplete="username"
      />
      <TextInput
        v-model="password"
        id="password"
        label="Password"
        type="password"
      />
      <Button type="submit">Log In</Button>
    </form>
  </div>
</template>
