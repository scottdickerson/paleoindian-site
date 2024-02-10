import Image, { StaticImageData } from 'next/image'
import imageModal from '@/styles/ImageModal.module.scss'

import { ResponsiveImage } from './responsive-image'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { Modal, ModalProps } from './modal'
import { stoneImages } from '@/pages/activities/incised-stones'
import captionedImageStyles from '@/styles/CaptionedImage.module.scss'

export interface ImageDetailsProps {
    src: StaticImageData
    title: string
    photoCredit: string
}

interface ImageSelectorProps extends HTMLAttributes<HTMLDivElement> {
    images: ImageDetailsProps[]
    onSelectImage: Dispatch<SetStateAction<string | undefined>>
}

export const ImageSelector = ({
    images,
    onSelectImage,
}: ImageSelectorProps) => {
    return (
        <div className={imageModal.imageSelector}>
            {images.map((image) => (
                <button onClick={() => onSelectImage(image.title)}>
                    <Image
                        key={image.title}
                        height={94}
                        width={94}
                        className={imageModal.imageSelectorImage}
                        src={image.src}
                        alt={image.title}
                    />
                </button>
            ))}
        </div>
    )
}

export const ImageDetails = ({
    src,
    title,
    photoCredit,
}: ImageDetailsProps) => {
    return (
        <div className={imageModal.content}>
            <ResponsiveImage src={src} alt={title} />
            <div className={imageModal.details}>
                <span className={captionedImageStyles.caption}>{title}</span>
                <span className={captionedImageStyles.photoCredit}>
                    {photoCredit}
                </span>
            </div>
        </div>
    )
}

interface ImageModalProps extends ModalProps {
    selectedImage?: string
    onSelectImage: Dispatch<SetStateAction<string | undefined>>
}

export const ImageModal = ({
    selectedImage,
    onSelectImage,
    ...props
}: ImageModalProps) => {
    return (
        <Modal {...props}>
            <ImageDetails
                {...(stoneImages.find(
                    (image) => image.title === selectedImage
                ) ?? stoneImages[0])}
            />
            <footer className={imageModal.footer}>
                <ImageSelector
                    images={stoneImages.filter(
                        (image) => image.title !== selectedImage
                    )}
                    onSelectImage={onSelectImage}
                ></ImageSelector>
            </footer>
        </Modal>
    )
}
