import Head from 'next/head'
import { DailyLifeCarousel } from '@/components/carousel'
import { carouselData } from '@/data/daily-life/carouselData'

// next js page showing simple text
const DailyLife = () => {
    return (
        // nextjs title section
        <>
            <Head>
                <title>Texas Paleoindian - Daily Life</title>
            </Head>
            <div>
                <h1>Daily Life</h1>
                <p>
                    This is the daily life Texas page. It is a simple page with
                    some text.
                </p>
            </div>Carousel
            <DailyLifeCarousel 
                images={carouselData}
            />
        </>
    )
}

export default DailyLife
