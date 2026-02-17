import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pankaj Verma Portfolio',
        short_name: 'ivpankaj',
        description: 'Official portfolio of Pankaj Verma (ivpankaj) — Computer Science Engineer & MERN Stack Developer.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/ivpankaj.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
