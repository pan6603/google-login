import Image from "next/image"

type TrustBadgeProps = {
    className?: string;
    imageSrc: string;
    altText: string;
    text: string;
}


export default function TrustBadge({ className, imageSrc, altText, text }: TrustBadgeProps) {
    return (
        <div className={className}>
            <Image src={imageSrc} alt={altText} width={20} height={26} />
            <span className="text-[18px] font-extrabold text-[#181C20]">{text}</span>
        </div>
    )
}