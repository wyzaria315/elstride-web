import pinia from '@/plugins/pinia.ts'
import type { App } from 'vue'
import router from '@/router'
import elementPlus from '@/plugins/element-plus.ts'

export const registerPlugins = (app: App<Element>) => {
  app.use(pinia).use(router).use(elementPlus)
}
