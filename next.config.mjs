/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
