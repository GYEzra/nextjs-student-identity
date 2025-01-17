/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        staleTimes: {
            dynamic: 0,
            static: 180
        }
    },
    images: {
        remotePatterns: [
            {
                hostname: 'nestjs-student-identity.onrender.com',
                protocol: 'https',
                port: '',
                pathname: '/images/**'
            },
            {
                hostname: 'gateway.pinata.cloud',
                protocol: 'https',
                port: '',
                pathname: '/ipfs/**'
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
