import flipper1 from '@/data/ice-age-texas/flipper/Side 1-1@0.5x.webp'
import flipper2 from '@/data/ice-age-texas/flipper/Side 2-1@0.5x.webp'
import flipper3 from '@/data/ice-age-texas/flipper/Side 1-2@0.5x.webp'
import flipper4 from '@/data/ice-age-texas/flipper/Side 2-2@0.5x.webp'
import flipper5 from '@/data/ice-age-texas/flipper/Side 1-3@0.5x.webp'
import flipper6 from '@/data/ice-age-texas/flipper/Side 2-3@0.5x.webp'
import flipper7 from '@/data/ice-age-texas/flipper/Side 1-4@0.5x.webp'
import flipper8 from '@/data/ice-age-texas/flipper/Side 2-4@0.5x.webp'

export const FlipperImages = [
    {
        id: 'flipperOne',
        closed: flipper1,
        opened: flipper2,
        closedText: 'Carefully Documenting',
        openedText:
            'Archeologists and divers use grids to map everything they see on the ocean floor.',
        alt: 'Scuba diver mapping the ocean floor',
    },
    {
        id: 'flipperTwo',
        closed: flipper3,
        opened: flipper4,
        closedText: 'Sediment Removal',
        openedText:
            'A dredge vacuums up sediment and deposits it through a mesh screen to collect artifacts.',

        alt: 'Scuba diver uses vacuum hose connected to boat on the ocean floor.',
    },
    {
        id: 'flipperThree',
        closed: flipper5,
        opened: flipper6,
        closedText: 'Seabed Coring',
        openedText:
            'A machine drills into the seabed to collect long, tube-shaped samples, showing layers of ancient landscapes.',
        alt: 'A drill is being lowered to the ocean floor from the boat',
    },
    {
        id: 'flipperFour',
        closed: flipper7,
        opened: flipper8,
        closedText: 'Geospatial seafloor mapping',
        openedText:
            'Sonar devices scan the seafloor to map ancient landscapes or track the location of scattered artifacts.',
        alt: 'A boat using a scanner on the ocean floor and a satelite scanning from the air with a city behind it.',
    },
]
