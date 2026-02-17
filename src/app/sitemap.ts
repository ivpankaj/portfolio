import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ivpankaj.online'

    const routes = [
        '',
        '/about',
        '/contact',
        '/projects',
        '/services',
        '/cookmypapers',
        '/learning-management-system',
        '/taxi-booking-app',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
