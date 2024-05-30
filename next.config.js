/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false
  },
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   devIndicators: {
//     buildActivity: false
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Extend the default Webpack config
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//       })
//     );

//     return config;
//   },
// }

// module.exports = nextConfig;