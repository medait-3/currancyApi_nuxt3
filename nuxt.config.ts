// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
      }
})
