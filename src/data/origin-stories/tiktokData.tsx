import { TikTokPlayerProps } from '../../components/tiktok-video-player'
import abigayleFriehaufThumbnail from './tiktok/1.6.3_Abigail Friehauf@300px.webp'
import angusDunnThumbnail from './tiktok/1.6.2_Angus Dunn@300px.webp'
import nicholasBentleyThumbnail from './tiktok/1.6.1_Nick Bentley@300px.webp'
import greerTesta from './tiktok/1.6.4_Greer Testa@300px.webp'

export const TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    abbyReinhardt: {
        thumbnail: greerTesta,
        video: 'https://youtube.com/shorts/f5nGaya3g-0?feature=share',
    },
    abigayleFriehauf: {
        thumbnail: abigayleFriehaufThumbnail,
        video: 'https://youtube.com/shorts/68jEo-oTiBY?feature=share',
    },
    angusDunn: {
        thumbnail: angusDunnThumbnail,
        video: 'https://youtu.be/jVJ9y1J4i_Q',
    },
    nicholasBentley: {
        thumbnail: nicholasBentleyThumbnail,
        video: 'https://youtube.com/shorts/9tZw7LNB-Ek?feature=share',
    },
}
