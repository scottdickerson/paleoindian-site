import ReactModal from 'react-modal'
import modalStyles from '@/styles/Modal.module.scss'
import closeButton from '@/components/images/close.svg'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
}

export const Modal = ({
    children,
    isOpen,
    onClose,
}: PropsWithChildren<ModalProps>) => {
    return (
        <ReactModal
            appElement={
                typeof window !== 'undefined' ? document.body : undefined
            }
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={modalStyles.overlay}
            className={modalStyles.modal}
            bodyOpenClassName={modalStyles.overlayOpen}
        >
            <div className={modalStyles.content}>
                {children}
                <button onClick={onClose} className={modalStyles.close}>
                    <Image src={closeButton} alt="Close" />
                </button>
            </div>
        </ReactModal>
    )
}
