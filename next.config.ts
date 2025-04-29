import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    env: {
        CRON_SECRET: process.env.CRON_SECRET,
    },
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qjwmnqxjncnbdtxcvsdd.supabase.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'blog.millionero.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '"academy.education.investing.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
                port: '',
                search: '',
            }, {
                protocol: 'https',
                hostname: 'qjwmnqxjncnbdtxcvsdd.supabase.co',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'blog.millionero.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                search: '',
            },


        ]
    }


};

export default nextConfig;
