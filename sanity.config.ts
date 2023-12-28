import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "gstbclx0",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-12-28",
    basePath: "/admin",
    plugins: [deskTool()]
});

export default config;