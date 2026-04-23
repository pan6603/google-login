

type EncryptedBadgeProps = {
    className?: string;
    spanClassName?: string;
    text?: string;
}


export default function EncryptedBadge({ className, spanClassName, text }: EncryptedBadgeProps) {
    return (
        <div className={className}>
            <span className={spanClassName}>
                {text}
            </span>
        </div>
    )
}