import { TikTokPlayerProps } from '../../components/tiktok-video-player'
import ashleyLemke from './tiktok/1.6.3_AshleyLemke@300px.webp'
import angusDunnThumbnail from './tiktok/1.6.2_Angus Dunn@300px.webp'
import nicholasBentleyThumbnail from './tiktok/1.6.1_Nick Bentley@300px.webp'
import greerTesta from './tiktok/1.6.4_Greer Testa@300px.webp'

export const TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    greerTesta: {
        thumbnail: greerTesta,
        video: 'https://youtube.com/shorts/pwS21DepjqQ?feature=share',
    },
    ashleyLemke: {
        thumbnail: ashleyLemke,
        video: 'https://youtube.com/shorts/6WZw9evK6Ho?feature=share',
    },
    angusDunn: {
        thumbnail: angusDunnThumbnail,
        video: 'https://youtube.com/shorts/Hf_kmpjdBCw?feature=share',
    },
    nicholasBentley: {
        thumbnail: nicholasBentleyThumbnail,
        video: 'https://youtube.com/shorts/IGTT1tZ6_q8?feature=share',
    },
}
