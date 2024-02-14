import { v4 as uuidv4 } from 'uuid'
import mammoth from './Paleo - 2.2.1 Mammoth.webp'
import camel from './Paleo - 2.2.2 Camel.webp'
import direWolf from './Paleo - 2.2.3 Dire WOlf.webp'
import sabertoothCat from './Paleo - 2.2.4 Sabertooth Cat.webp'
import ancientHorse from './Paleo - 2.2.5 Ancient Horse.webp'
import giantSloth from './Paleo - 2.2.6 Giant Sloth.webp'
import armadillo from './Paleo - 2.2.7 Armadillo.webp'
import shortFacedBear from './Paleo - 2.2.8 Short-faced Bear.webp'
import giantBison from './Paleo - 2.2.9 Giant Bison.webp'

export const cardData = [
    {
        id: uuidv4(),
        image: mammoth,
        alt: 'Woolly Mammoth',
        caption:
            'An adult, male mammoth would feed a group of 30 people for two weeks! But it was probably an uncommon meal. It’s possible that bringing home this big boi was all about the bragging rights!',
    },
    {
        id: uuidv4(),
        image: camel,
        alt: 'Camel',
        caption:
            'Even though we think of them as animals from the Middle East, all modern camels evolved from ancestors which originated in North America approximately 44 million years ago.',
    },
    {
        id: uuidv4(),
        image: direWolf,
        alt: 'large wolf',
        caption:
            'Dire wolves show up in fantasy fiction, but they were real animals that were larger and stronger than modern wolves.',
    },
    {
        id: uuidv4(),
        image: sabertoothCat,
        alt: 'sabertoothed cat',
        caption:
            'Sabertoothed cats were heavy and muscular, unlike modern big cats. They did not chase down prey, but instead would pounce and ambush their dinner.',
    },
    {
        id: uuidv4(),
        image: ancientHorse,
        alt: 'ancient horse',
        caption:
            'Horses first evolved in North America. They spread to the rest of the world and continued to evolve and live there even after the ancient horse went extinct. Much later, Spaniards brought the descendants of ancient horses back to North America.',
    },
    {
        id: uuidv4(),
        image: giantSloth,
        alt: 'giant sloth',
        caption:
            'Unlike the slow-moving modern sloths, giant sloths were no slackers. Their giant claws and enormous size would have made them dangerous animals.',
    },
    {
        id: uuidv4(),
        image: armadillo,
        alt: 'armadillo',
        caption:
            'Some species of giant armadillo grew to the size of a Volkswagen Beetle! If a person could get through that tough “shell,” they (and all their friends) could feast on armadillo for a month.',
    },
    {
        id: uuidv4(),
        image: shortFacedBear,
        alt: 'bear',
        caption:
            'A full-grown, male giant short-faced bear was about the biggest meat-eating mammal to ever munch their way across North America.',
    },
    {
        id: uuidv4(),
        image: giantBison,
        alt: 'bison',
        caption:
            'This big bison is the direct ancestor of bison living in North America today. So, they didn’t exactly go extinct – instead they “shrunk.”',
    },
]
