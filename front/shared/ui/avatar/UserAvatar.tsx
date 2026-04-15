import Image from "next/image"

type UserAvatarProps = {
    className?: string
    imageSrc?: string
}


export default function UserAvatar({ className, imageSrc }: UserAvatarProps) {
    return (
        <div className={className}>
            {imageSrc && 
                <Image 
                    src={imageSrc} 
                    alt="user-avatar" 
                    width={28}
                    height={28}
                    className="object-cover rounded-full" 
                />}
        </div>
    )
}