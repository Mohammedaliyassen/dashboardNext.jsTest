import { Inter, Cairo, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const cairo =
    Cairo({
        weight: '400',
        subsets: ['arabic', 'latin']
    });
export const lusitana =
    Lusitana({
        subsets: ['latin'],
        weight: ['400', '700']
    });