export interface PhotoCreditsProps {
    title?: string
    description?: string
    credits?: string
    courtesy?: string
}

export const PhotoCredits = ({
    title,
    description,
    credits,
    courtesy,
}: PhotoCreditsProps) => (
    <p>
        {title && title}
        {description && (
            <>
                <br /> {description}
            </>
        )}
        {credits && (
            <>
                <br /> {credits}
            </>
        )}
        {courtesy && (
            <>
                <br /> {courtesy}
            </>
        )}
        <br />
    </p>
)
