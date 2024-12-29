/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                protocol: 'http',
                port: '3000',
                pathname: ''
            },
            {
                hostname: 'gateway.pinata.cloud',
                protocol: 'https',
                port: '',
                pathname: '/ipfs'
            },
            {
                hostname: 'img.daisyui.com',
                protocol: 'https',
                port: '',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
