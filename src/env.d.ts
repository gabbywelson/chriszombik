/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly TINA_CLIENT_ID: string
    readonly TINA_CLIENT_TOKEN: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }