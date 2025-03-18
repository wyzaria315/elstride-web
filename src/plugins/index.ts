import pinia from '@/plugins/pinia.ts'
import type { App } from 'vue'
import router from '@/router'

export const registerPlugins = (app: App<Element>) => {
  app.use(pinia).use(router)
}
