import BadgeIcon from "@/shared/icons/BadgeIcon"

type BadgeProps = {
    className?: string
    imageSrc?: string
    text: string
}


export default function Badge({
    className,
    imageSrc,
    text
}: BadgeProps) {
    return (
        <div className={className}>
            <span>{text}</span>
            {imageSrc && <BadgeIcon className="w-full max-w-[14px] min-h-[16px] h-auto flex items-center justify-center" imageSrc={imageSrc} />}
        </div>
    )
}