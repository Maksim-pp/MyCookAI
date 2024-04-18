interface ImportMeta {
    readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
    readonly VITE_FIERBASE_API_KEY: string;
    readonly VITE_FIERBASE_APUTH_DOMAIN: string;
    readonly VITE_FIERBASE_PROJECR_ID: string;
    readonly VITE_FIERBASE_STOREGE_BUCKET: string;
    readonly VITE_FIERBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIERBASE_APP_ID: string;
}

