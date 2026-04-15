import Image from "next/image"

type IdentityIconProps = {
    imageSrc?: string;
}


export default function IdentityIcon({ imageSrc }: IdentityIconProps) {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            {imageSrc ? (
                <Image src={imageSrc} alt="identity-icon" width={15} height={15} />
            ) : (
                <div className="w-full h-full bg-gray-400" />
            )}
        </div>
    )
}