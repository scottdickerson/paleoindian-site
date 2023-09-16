import {
    Encode_Sans,
    Rubik_Dirt,
    Encode_Sans_Condensed,
    Glass_Antiqua,
} from '@next/font/google'

export const encodeSans = Encode_Sans({ subsets: ['latin'], display: 'swap' })
export const glassAntiqua = Glass_Antiqua({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--glass-antiqua',
})
export const rubikDirt = Rubik_Dirt({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--rubik-dirt',
})

export const encodeSansBold = Encode_Sans({
    subsets: ['latin'],
    weight: '600',
    display: 'swap',
    variable: '--encode-sans-bold',
})

export const encodeSansExtraBold = Encode_Sans({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--encode-sans-extra-bold',
})

export const encodeSansCondensedBold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '600',
    display: 'swap',
    variable: '--encode-sans-condensed-bold',
})

export const encodeSansCondensedSemibold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '500',
    display: 'swap',
    variable: '--encode-sans-condensed-semi-bold',
})

export const encodeSansCondensedExtrabold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--encode-sans-condensed-extra-bold',
})

export const encodeSansCondensedBlack = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '900',
    display: 'swap',
    variable: '--encode-sans-condensed-black',
})

export const encodeSansCondensed = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--encode-sans-condensed',
})
