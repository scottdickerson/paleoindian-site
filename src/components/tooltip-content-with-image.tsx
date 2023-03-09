import Image, { StaticImageData } from 'next/image'

interface TooltipContentWithImageProps {
    src: StaticImageData
    alt: string
    title: string
    description: string
}

export const TooltipContentWithImage = ({
    src,
    alt,
    title,
    description,
}: TooltipContentWithImageProps) => {
    return (
        <figure
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Image src={src} alt={alt}></Image>
            <figcaption>
                <p style={{ fontSize: '18px' }}>{title}</p>
                <p style={{ fontSize: '15px' }}>{description}</p>
            </figcaption>
        </figure>
    )
}
