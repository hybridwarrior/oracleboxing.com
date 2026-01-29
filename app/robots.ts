import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/success/', '/admin/', '/api/', '/checkout/order-bumps'],
      },
    ],
    sitemap: 'https://oracleboxing.com/sitemap.xml',
  }
}
