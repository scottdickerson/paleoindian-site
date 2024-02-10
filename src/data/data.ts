import { YouTubeVideosType } from '../components/types'
import sacredStoriesThumbnail from './origin-stories/videos/1-2_TitleCard@2x.webp'
import howDidPeopleGetHereThumbnail from './origin-stories/videos/1-4_TitleCard@2x.webp'
import texasSizedDiscoveryThumbnail from './origin-stories/videos/1-5_TitleCard@2x.webp'
import moreThanStoneThumbnail from './daily-life/videos/3-2_TitleCard@2x.webp'
import fromTheTopThumbnail from './home/videos/00_TitleCard@2x.webp'
import monstersAndMayhemThumbnail from './ice-age-texas/videos/2-3_TitleCard@2x.webp'

export const TOOLTIP_CONTENT = {
    ancestors: 'A person related to you that lived a long time ago.',
    hunterGatherer:
        'People who hunt wild animals and gather wild plants for food and do not practice farming.',
    domesticated:
        'An animal or plant whose characteristics have been changed through human interventions, like breeding.',
    descended:
        'A person or animal’s children, grand-children, great-grandchildren and all their relatives who live after them.',
    ecosystems:
        'A geographic area where plants, animals, and other organisms, as well as weather and landscape, work together to form a web of life.',
    iceAges:
        'Long periods lasting millions of years when the Earth has cold temperatures that lead to ice sheets and glaciers covering large areas.',
    ended: 'Or did it? Some scientists think we are still technically in an Ice Age, but in a warmer inter-glacial phase.',
    adaptation:
        'Certain physical or behavioral characteristics that help an organism survive in an environment.',
    evolved:
        'Emerged as a distinct species or type of animal from earlier ancestor animal populations.',
    extinct: 'Died off and did not pass on their genes to new generations.',
    origin: 'The point or place where something begins.',
    interpreting: 'Decide and explain what something means.',
    beringLandBridge:
        'An area of land that connected Asia to North America long ago.  It connected what is now Russia to Alaska.',
    migrations:
        'Long journeys taken by animals or humans moving from one home to another.',
    gaultAndFriedkinSites:
        'These two archeological sites in Bell County, Texas are very close together and probably represent one large area where people lived as long as 16,000 years ago.',
    absoluteDating:
        'Methods to determine specific age of an object (within a time range).',
    relativeDating:
        'Methods to figure out if one artifact is older or younger than another artifact.',
    eurasia:
        'Eurasia is the largest continental area on Earth, comprising all of Europe and Asia.',
}

export const YOUTUBE_VIDEOS: YouTubeVideosType = {
    'not-just-stone-age': {
        src: 'https://youtu.be/tHQVMWJruY8',
        thumbnail: {
            src: moreThanStoneThumbnail,
            alt: 'Two people holding a stone spear',
        },
    },
    'sacred-stories': {
        src: 'https://youtu.be/EuxlVMBQ5bc',
        thumbnail: { src: sacredStoriesThumbnail, alt: 'A long time ago' },
    },
    'how-did-people-get-here': {
        src: 'https://youtu.be/8BjpLqBJQaM',
        thumbnail: {
            src: howDidPeopleGetHereThumbnail,
            alt: 'Archaeologist holding a sign that says "All the questions"',
        },
    },
    'texas-sized-discovery': {
        src: 'https://youtu.be/H9FAW_gWvgo',
        thumbnail: {
            src: texasSizedDiscoveryThumbnail,
            alt: 'Science, Logic!',
        },
    },
    'from-the-top': {
        src: 'https://youtu.be/b26xz9imjRc',
        thumbnail: {
            src: fromTheTopThumbnail,
            alt: 'Stone Letters that spell From the Top',
        },
    },
    'monsters-and-mayhem': {
        src: 'https://youtu.be/ylgZ598Chp4',
        thumbnail: {
            src: monstersAndMayhemThumbnail,
            alt: 'Monsters screaming!',
        },
    },
}
