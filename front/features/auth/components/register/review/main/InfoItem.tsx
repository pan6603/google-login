import ProfileIcon from "@/shared/icons/ProfileIcon"


type InfoItemProps = {
    className?: string
    label?: string
    value?: string
    imageSrc?: string
}


export default function InfoItem({ className, label, value, imageSrc }: InfoItemProps) {
    return (
        <div className={className}>
            {label && <span className="text-[12px] font-medium text-[#424753]">{label}</span>}

            <div className="w-full max-w-[250px] min-h-[25px] h-auto flex items-center gap-2">
                <ProfileIcon imageSrc={imageSrc} />
                <span className="text-[16px] font-semibold text-[#181C20]">{value}</span>
            </div>
        </div>
    )
}