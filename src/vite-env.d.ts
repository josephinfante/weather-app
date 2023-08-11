/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEATHER_API: string
    readonly VITE_LOCATION_API: string
    readonly VITE_ENV: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }