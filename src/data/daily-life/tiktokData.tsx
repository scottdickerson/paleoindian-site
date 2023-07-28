import { TikTokPlayerProps } from '@/components/tiktok-video-player'
import catherineBatyThumbnail from './tiktok/3.4.1_Catherine Baty@300px.webp'
import jackieBullardThumbnail from './tiktok/3.4.2_Jackie Bullard@300px.webp'
import kennedyCortezThumbnail from './tiktok/3.4.3_Kennedy Cortez@300px.webp'
import kimberlyCushingThumbnail from './tiktok/3.4.4_Kimberly Cushing@300px.webp'

export const DAILY_LIFE_TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    abbyReinhardt: {
        thumbnail: catherineBatyThumbnail,
        video: 'https://youtube.com/shorts/f5nGaya3g-0?feature=share',
    },
    abigayleFriehauf: {
        thumbnail: jackieBullardThumbnail,
        video: 'https://youtube.com/shorts/68jEo-oTiBY?feature=share',
    },
    angusDunn: {
        thumbnail: kennedyCortezThumbnail,
        video: 'https://youtu.be/jVJ9y1J4i_Q',
    },
    nicholasBentley: {
        thumbnail: kimberlyCushingThumbnail,
        video: 'https://youtube.com/shorts/9tZw7LNB-Ek?feature=share',
    },
}
