import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Mayuresh Mohanty — Product Engineer | Business Software & AI',
        template: '%s | Mayuresh Mohanty',
    },
    description: 'Mayuresh Mohanty is a product-focused software developer building business software, full-stack applications, management systems and AI-powered products.',
    keywords: ['Mayuresh Mohanty', 'Product Engineer', 'Full Stack Developer', 'Business Software Developer', 'ERP Developer', 'React Developer', 'Node.js Developer', 'AI Integration', 'Software Developer India', 'Freelance Software Developer'],
    authors: [{ name: 'Mayuresh Mohanty' }],
    creator: 'Mayuresh Mohanty',
    metadataBase: new URL('https://mayureshmohanty.com'),
    alternates: {
        canonical: 'https://mayureshmohanty.com',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mayureshmohanty.com',
        title: 'Mayuresh Mohanty — Product Engineer | Business Software & AI',
        description: 'Mayuresh Mohanty is a product-focused software developer building business software, full-stack applications, management systems and AI-powered products.',
        siteName: 'Mayuresh Mohanty',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mayuresh Mohanty — Product Engineer | Business Software & AI',
        description: 'Mayuresh Mohanty is a product-focused software developer building business software, full-stack applications, management systems and AI-powered products.',
        creator: '@mayureshmohanty',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: 'any' },
        ],
        shortcut: '/favicon.svg',
        apple: '/apple-touch-icon.png',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
