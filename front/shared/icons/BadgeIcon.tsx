import Image from "next/image"


type BadgeIconProps = {
    className?: string
    imageSrc?: string
}


export default function BadgeIcon({ className, imageSrc }: BadgeIconProps) {
    return (
        <div className={className}>
            <Image src={imageSrc || "/assets/icons/google-icon.svg"} alt="badge-icon" width={8} height={11} />
        </div>
    )
}