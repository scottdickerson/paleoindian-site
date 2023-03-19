import { TikTokPlayerProps } from '../../components/tiktok-video-player'
import { YouTubeVideosType } from '../../components/types'
import sacredStoriesThumbnail from './videos/1.2 Sacred Stories - Title Card.png'
import howDidPeopleGetHereThumbnail from './videos/1.4 How Did People Get Here - Title Card.png'
import texasSizedDiscoveryThumbnail from './videos/1.5 Texas Sized Discovery - Title Card.png'

import abbyReinhardtThumbnail from './tiktok/Abby Reinhardt.png'
import abigayleFriehaufThumbnail from './tiktok/Abigayle Friehauf.png'
import angusDunnThumbnail from './tiktok/Angus Dunn.png'
import nicholasBentleyThumbnail from './tiktok/Nicholas Bentley.png'

export const TOOLTIP_CONTENT = {
    ancestors: 'A person related to you that lived a long time ago.',
}

export const YOUTUBE_VIDEOS: YouTubeVideosType = {
    'sacred-stories': {
        src: 'https://youtu.be/G65hcqn3ghM',
        thumbnail: { src: sacredStoriesThumbnail, alt: 'A long time ago' },
    },
    'how-did-people-get-here': {
        src: 'https://youtu.be/mZ8CcuEzMas',
        thumbnail: {
            src: howDidPeopleGetHereThumbnail,
            alt: 'All the questions',
        },
    },
    'texas-sized-discovery': {
        src: 'https://youtu.be/0Gb77xpxWvY',
        thumbnail: {
            src: texasSizedDiscoveryThumbnail,
            alt: 'Science, Logic!',
        },
    },
}

export const TIKTOK_VIDEOS: TikTokPlayerProps['videos'] = {
    abbyReinhardt: {
        thumbnail: abbyReinhardtThumbnail,
        video: '/videos/origin-stories/Abby Reinhardt.mp4',
    },
    abigayleFriehauf: {
        thumbnail: abigayleFriehaufThumbnail,
        video: '/videos/origin-stories/Abigayle Friehauf.mp4',
    },
    angusDunn: {
        thumbnail: angusDunnThumbnail,
        video: '/videos/origin-stories/Angus Dunn.mp4',
    },
    nicholasBentley: {
        thumbnail: nicholasBentleyThumbnail,
        video: '/videos/origin-stories/Nicholas Bentley.mp4',
    },
}