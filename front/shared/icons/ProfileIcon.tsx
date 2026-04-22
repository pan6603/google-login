import Image from "next/image"


type ProfileIconProps = {
    imageSrc?: string
}

export default function ProfileIcon({ imageSrc }: ProfileIconProps) {
    return (
        <div className="w-full max-w-[20px] min-h-[24px] h-auto rounded-full flex items-center justify-center">
            <Image 
                src={imageSrc || "../../images/icons/profile.svg"}
                alt="profile-icon" 
                width={13} 
                height={13} 
            />
        </div>
    )
} 