/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/home",
				destination: "/",
			},
			{
				source: "/:any*",
				destination: "/",
			},
		];
	},
};

module.exports = nextConfig;
