import Head from 'next/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import styles from '@/styles/TXDotAndTribes.module.scss'
import Image from 'next/image'
import groupImage from '@/data/txdot-and-tribes/group.png'
import groupImageTwo from '@/data/txdot-and-tribes/group2.png'
import archeologists from '@/data/txdot-and-tribes/archeologists.png'
import presentation from '@/data/txdot-and-tribes/presentation.png'
import endingImage from '@/data/txdot-and-tribes/finalImage.png'

const TXDotAndTribes = () => {
    return (
        <>
            <Head>
                <title>Texas Paleoindian - TXDot and Tribes</title>
            </Head>
            <Header />
            <div className={styles.contentWrapper}>
                    <p className={`${styles.textBlock} ${styles.openingParagraph}`}>
                        From time immemorial, the land we think of as Texas was the homeland of diverse groups of Native Peoples, including the ancestors of the many named Tribes that are still active communities today. Through conquest, deceit, and theft, this land was colonized by Europeans and ultimately became the State of Texas. 
                    </p>
                    <div className={`${styles.imageBlock} ${styles.imageBlock1}`}>
                        <Image 
                            src={groupImage}
                            alt='group'
                            className={styles.image}
                        />
                        <p>
                            The Alabama Coushatta are one of the many federally recognized sovereign Tribes with formal relationships with the State of Texas.
                        </p>
                        <p>
                            Courtesy: Vanesa Brashier, The Courier of Montgomery County
                        </p>
                    </div>
                    <div className={`${styles.imageBlock} ${styles.imageBlock2}`}>
                        <Image
                            src={groupImageTwo}
                            alt='group'
                            className={styles.image}
                        />
                        <p>
                            TxDOT works with 25 federally recognized Native American nations with an interest in preserving Texas history.
                        </p>
                        <p>
                            Courtesy of Texas Department of Transportation
                        </p>
                    </div>
                    <div className={`${styles.textBlock} ${styles.textBlock1}`}>
                        <p>
                            Today the descendants of Texas’ Native Peoples live modern lives and are a part of the fabric of our shared community. Tribal leaders, teachers, and individual people still live and pass on their unique cultures. This wisdom is an important way for all Texans to learn about the heritage of Texas’ Native Peoples.
                        </p>
                        <p>
                            Another way we can learn about the lives of Native Peoples is through the science of archeology. Archeologists study objects and evidence left behind from earlier cultures.
                        </p>
                        <p>
                            A lot of archeologists work in universities or at museums, but there are also archeologists working at the Texas Department of Transportation.
                        </p>
                    </div>
                    <div className={`${styles.imageBlock} ${styles.imageBlock3}`}>
                        <Image
                            src={archeologists}
                            alt='archeologists'
                            className={styles.image}
                        />
                        <p>
                            TxDOT and partner archeologists work to carefully document sites like this ancient campsite in Denton County.
                        </p>
                        <p>
                            Courtesy of Texas Department of Transportation
                        </p>
                    </div>
                    <div className={`${styles.textBlock} ${styles.textBlock2}`}>
                        <p>
                            The Texas Department of Transportation is an official department within the State of Texas. TxDOT creates roads, bridges, and other important transportation infrastructure. Sometimes, before construction, TxDOT archeologists find  things made a long time ago by the ancestors of modern-day Tribal peoples. When that happens, TxDOT archeologists carefully excavate these items before any construction goes forward.
                        </p>
                        <p>
                            TxDOT also consults with many named, diverse Tribes whose ancestors have a relationship to Texas. They work together to ensure that archeological sites and artifacts are studied, respected, and protected.  This collaboration adds to our understanding of the rich heritage of Texas’ Native Peoples.
                        </p>
                    </div>
                    <div className={`${styles.imageBlock} ${styles.imageBlock4}`}>
                        <Image 
                            src={presentation}
                            alt='presentation'
                            className={styles.image}
                        />
                        <p>
                            The TxDOT Tribal Consultation process allows TxDOT to work with tribes to identify and determine any potential effect the project will have on places of cultural significance to the tribes, including prehistoric archeological sites and cemeteries.
                        </p>
                        <p>
                            Courtesy of Texas Department of Transportation
                        </p>
                    </div>
                    <div className={`${styles.textBlock} ${styles.textBlock3}`}>
                        <p>
                            TxDOT and Tribal representatives work together to share what they’ve learned with people from all across the state. They do this through workshops, publications, teacher conferences, and special projects. This exhibit, A Time Before Texas, is one such project.
                        </p>
                        <p>
                            A Time Before Texas explores a specific time in the past – from the earliest evidence of human habitation in Texas (at least 16,000 years ago) to the end of the last ice age (about 10,000 years ago). Archeologists refer to peoples who lived during this time as Paleoindians. 
                        </p>
                        <p>
                            Paleoindians are the ancestors of today’s Native Peoples. This exhibit incorporates both archeological perspectives and traditional stories from Texas Tribes to explore this very early history. 
                        </p>
                    </div>
                    <p className={styles.sendOff}>
                    We hope you enjoy learning about A Time Before Texas.
                    </p>
                    <div className={`${styles.imageBlock} ${styles.endingImageBlock}`}>
                        <Image 
                            src={endingImage}
                            alt='endingImage'
                            className={styles.image}
                        />
                        <p>
                            Working together TxDOT and Tribal representatives created this educational booklet. You can download a copy here or in the Educator’s Guide. 
                        </p>
                        <p>
                            Courtesy of Texas Department of Transportation
                        </p>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default TXDotAndTribes
