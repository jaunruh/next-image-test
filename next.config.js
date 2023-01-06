const withYaml = require('next-plugin-yaml');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
		scrollRestoration: true,
  },
	async redirects() {
		return [
			{
				source: '/projects',
				destination: '/',
				permanent: true,
			},
		]
	},
}

// module.exports = nextConfig
module.exports = withYaml(nextConfig)
