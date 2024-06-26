import { StaticImageData } from 'next/image'
import imageModal from '@/styles/ImageModal.module.scss'

import { ResponsiveImage } from './responsive-image'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { Modal, ModalProps } from './modal'
import { stoneImages } from '@/pages/activities/incised-stones'
import captionedImageStyles from '@/styles/CaptionedImage.module.scss'
import classNames from 'classnames'

export interface ImageDetailsProps {
    src: StaticImageData
    largeSrc?: StaticImageData
    id: string
    title: string
    photoCredit: string
}

interface ImageSelectorProps extends HTMLAttributes<HTMLDivElement> {
    images: ImageDetailsProps[]
    selectedImage?: string
    onSelectImage: Dispatch<SetStateAction<string | undefined>>
}

export const ImageSelector = ({
    images,
    selectedImage,
    onSelectImage,
    className,
    ...rest
}: ImageSelectorProps) => {
    return (
        <div
            {...rest}
            className={classNames(imageModal.imageSelector, className)}
        >
            {images.map((image) => (
                <button
                    className={classNames(
                        imageModal.button,
                        selectedImage === image.id && imageModal.selected
                    )}
                    onClick={() => onSelectImage(image.id)}
                >
                    <ResponsiveImage
                        key={image.id}
                        src={image.src}
                        alt={image.title}
                    />
                </button>
            ))}
        </div>
    )
}

export const ImageDetails = ({ title, photoCredit }: ImageDetailsProps) => {
    return (
        <div className={imageModal.details}>
            <span className={captionedImageStyles.caption}>{title}</span>
            <span className={captionedImageStyles.photoCredit}>
                {photoCredit}
            </span>
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
    const image =
        stoneImages.find((image) => image.id === selectedImage) ??
        stoneImages[0]
    return (
        <Modal {...props}>
            <ResponsiveImage
                src={image.largeSrc ?? image.src}
                alt={image.title}
                className={imageModal.image}
            />
            <ImageDetails {...image} />
            <footer className={imageModal.footer}>
                <ImageSelector
                    images={stoneImages}
                    selectedImage={selectedImage}
                    onSelectImage={onSelectImage}
                ></ImageSelector>
            </footer>
        </Modal>
    )
}
