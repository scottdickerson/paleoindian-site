import { TikTokPlayerProps } from '../../components/tiktok-video-player'
import ashleyLemke from './tiktok/1.6.3_AshleyLemke@300px.webp'
import angusDunnThumbnail from './tiktok/1.6.2_Angus Dunn@300px.webp'
import nicholasBentleyThumbnail from './tiktok/1.6.1_Nick Bentley@300px.webp'
import greerTesta from './tiktok/1.6.4_Greer Testa@300px.webp'

export const TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    greerTesta: {
        thumbnail: greerTesta,
        video: 'https://youtube.com/shorts/hLv4GdYv0H8',
    },
    ashleyLemke: {
        thumbnail: ashleyLemke,
        video: 'https://youtube.com/shorts/ZZKpE7xa3e8',
    },
    angusDunn: {
        thumbnail: angusDunnThumbnail,
        video: 'https://youtube.com/shorts/14GE_yT8xcQ',
    },
    nicholasBentley: {
        thumbnail: nicholasBentleyThumbnail,
        video: 'https://youtube.com/shorts/uQerj9VW680',
    },
}
