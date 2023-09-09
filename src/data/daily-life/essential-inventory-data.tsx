import { v4 as uuidv4 } from 'uuid'
import diggingStick from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.1 Digging Stick.webp'
import adze from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.2 Adze.webp'
import modifiedFlake from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.3 Modified Flake.webp'
import blade from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.4 Blade.webp'
import spear from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.5 Spear.webp'
import net from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.6 Net.webp'
import snare from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.7 Snare.webp'
import atlatl from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.8 Atlatl.webp'
import hidePouch from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.9 Hide Pouch.webp'
import basket from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.10 Basket.webp'
import travois from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.11 Travois.webp'
import sandals from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.12 Sandals.webp'
import clothes from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1.13 Clothes.webp'

export const EssentialInvetoryData = [
    {
        id: uuidv4(),
        image: diggingStick,
        alt: 'Sharp Stick called a digging stick',
        caption: `A lot of good food is underground, but some plants with yummy roots go dormant in the winter
            and don’t look like much above the surface. Paleoindians needed knowledge of the land to know
            where to dig.`,
    },
    {
        id: uuidv4(),
        image: adze,
        alt: 'Adze',
        caption: `A handheld chopping tool was found at a Paleoindian site in Texas. Analysis showed it had starchy grains on it and had probably been used to chop away at a root vegetable.`,
    },
    {
        id: uuidv4(),
        image: modifiedFlake,
        alt: 'Modified Flake',
        caption:
            'Flakes from chert and other silica-rich stones can be very, very sharp. Flake edges can be quickly modified – which makes them useful tools for harvesting plants, slicing meat, scraping hide, and doing many other tasks.',
    },
    {
        id: uuidv4(),
        image: blade,
        alt: 'Curved Stone blade',
        caption:
            'Blades are like the utility knives of the stone age. They are single flakes from one really long sharp edge – useful for cutting all kinds of things.  ',
    },
    {
        id: uuidv4(),
        image: spear,
        alt: 'Spear with sharp stone point',
        caption:
            'Clovis points may have been attached to a foreshaft so that they could be attached to a longer spear or detached and used as a knife – handy! ',
    },
    {
        id: uuidv4(),
        image: net,
        alt: 'Woven fishing net',
        caption:
            'Paleoindians could have made nets from rawhide or twisted grass rope. Archeologists have never found one, but they have found “sinker stones” that would have kept nets weighted in the water. ',
    },
    {
        id: uuidv4(),
        image: snare,
        alt: 'Rope trap connected to a tree branch called a snare.',
        caption:
            'It’s a trap! Even a kid could set up a snare to catch rabbits and other small game.  ',
    },
    {
        id: uuidv4(),
        image: atlatl,
        alt: 'Atlatl',
        caption:
            'Atlatls allow hunters to throw spears harder and farther. With an atlatl, you could throw a spear hard enough to puncture a car door (or the tough hide of a mammoth.) ',
    },
    {
        id: uuidv4(),
        alt: 'Hide pouch',
        image: hidePouch,
        caption:
            'Every on-the-go person needs a purse! A bag is essential for stashing your stuff or toting home your “groceries.”',
    },
    {
        id: uuidv4(),
        image: basket,
        alt: 'Basket',
        caption:
            'Baskets are among mankind’s earliest crafts and predate pottery by at least 10,000 years.  ',
    },
    {
        id: uuidv4(),
        alt: 'Travois which looks like a sled',
        image: travois,
        caption:
            'Dogs were domesticated BEFORE people came to the Americas. Paleoindian’s dogs could help in the hunt, pull heavy sleds, and, of course, give lots of snuggles.  ',
    },
    {
        id: uuidv4(),
        image: sandals,
        alt: 'Sandal footwear',
        caption:
            'Paleoindians made sandals from woven grass. In addition to being super stylish, shoes would help a person walk further and faster by providing cushioning, comfort, and protection.',
    },
    {
        id: uuidv4(),
        image: clothes,
        alt: 'Clothes',
        caption:
            'In most hunter-gatherer societies, people wear clothes for both protection and expression. A hunter out on a snowy day needs a warm cloak! Some Texas Paleoindians adorned their clothing with shell beads. Lookin’ good!  ',
    },
]
