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
        {title && (
            <>
                {title}
                <br />
            </>
        )}
        {description && (
            <>
                {description}
                <br />
            </>
        )}
        {credits && (
            <>
                {credits}
                <br />
            </>
        )}
        {courtesy && <>{courtesy}</>}
    </p>
)
