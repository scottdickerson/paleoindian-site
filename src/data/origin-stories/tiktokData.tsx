import { TikTokPlayerProps } from '../../components/tiktok-video-player'
import abigayleFriehaufThumbnail from './tiktok/1.6.3_Abigail Friehauf@300px.webp'
import angusDunnThumbnail from './tiktok/1.6.2_Angus Dunn@300px.webp'
import nicholasBentleyThumbnail from './tiktok/1.6.1_Nick Bentley@300px.webp'
import greerTesta from './tiktok/1.6.4_Greer Testa@300px.webp'

export const TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    abbyReinhardt: {
        thumbnail: greerTesta,
        video: 'https://youtube.com/shorts/l3LHjQXGpr0?feature=share',
    },
    abigayleFriehauf: {
        thumbnail: abigayleFriehaufThumbnail,
        video: 'https://youtube.com/shorts/QeWu1tRwkck?feature=share',
    },
    angusDunn: {
        thumbnail: angusDunnThumbnail,
        video: 'https://youtube.com/shorts/I32vdCgsqK8?feature=share',
    },
    nicholasBentley: {
        thumbnail: nicholasBentleyThumbnail,
        video: 'https://youtube.com/shorts/HWjQed7lFVQ?feature=share',
    },
}
