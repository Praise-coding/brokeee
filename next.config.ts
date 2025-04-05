import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qjwmnqxjncnbdtxcvsdd.supabase.co',
                port: '',
                search: '',
            },
        ]
    }


};

export default nextConfig;
