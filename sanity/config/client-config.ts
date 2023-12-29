const config = {
    projectId:  process.env.NEXT_SANITY_PROJECTID,
    dataset: "production",
    apiVersion: "2023-12-28",
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
}

export default config;