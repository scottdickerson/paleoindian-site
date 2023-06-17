const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    productionBrowserSourceMaps: true,
    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "variables.scss";`,
    },
}

module.exports = nextConfig
