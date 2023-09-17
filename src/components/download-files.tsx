import Image from 'next/image'
import workbookIcon from '@/components/images/download-files/WorkbookIcon.svg'
import pageLinkStyles from '@/styles/PageLink.module.scss'
import storySectionStyles from '@/styles/StorySection.module.scss'
import styles from '@/styles/DownloadFiles.module.scss'
import classNames from 'classnames'

interface DownloadFilesProps {
    files: { title: string; href: string }[]
}

export const DownloadFiles = ({ files }: DownloadFilesProps) => (
    <div className={styles.downloadFiles}>
        <Image src={workbookIcon} alt="Workbook icon" />
        <ul>
            {files.map(({ title, href }) => (
                <li key={href}>
                    <a
                        className={classNames(
                            pageLinkStyles.pageLink,
                            storySectionStyles.activityLink,
                            styles.link
                        )}
                        href={href}
                        download
                    >
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)
