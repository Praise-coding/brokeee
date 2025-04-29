// middleware.ts
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
    const {pathname} = req.nextUrl;

    if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) {
        const token = req.headers.get('x-cron-secret');
        const expected = process.env.CRON_SECRET;

        // In dev or Node runtime, process.env works fine
        if (!expected || token !== expected) {
            console.log("okay i guess" + pathname)
            return new NextResponse(
                JSON.stringify({message: 'Unauthorized'}),
                {
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'],
};
