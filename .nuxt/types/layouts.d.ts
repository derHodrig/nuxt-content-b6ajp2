import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article"
declare module "/home/projects/nuxt-content-b6ajp2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}