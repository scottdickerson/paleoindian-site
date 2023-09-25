import { TikTokPlayerProps } from '@/components/tiktok-video-player'
import catherineBatyThumbnail from './tiktok/3.4.1_Catherine Baty@300px.webp'
import jackieBullardThumbnail from './tiktok/3.4.2_Jackie Bullard@300px.webp'
import kennedyCortezThumbnail from './tiktok/3.4.3_Kennedy Cortez@300px.webp'
import kimberlyCushingThumbnail from './tiktok/3.4.4_Kimberly Cushing@300px.webp'

export const DAILY_LIFE_TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    catherineBaty: {
        thumbnail: catherineBatyThumbnail,
        video: 'https://youtube.com/shorts/70Xp_wywfgQ',
    },
    jackieBullard: {
        thumbnail: jackieBullardThumbnail,
        video: 'https://youtu.be/DdwIaXrvwv0',
    },
    kennedyCortez: {
        thumbnail: kennedyCortezThumbnail,
        video: 'https://youtu.be/FWPBSpiKr8k',
    },
    kimberlyCushing: {
        thumbnail: kimberlyCushingThumbnail,
        video: 'https://youtube.com/shorts/vuft2NcU0hA',
    },
}
