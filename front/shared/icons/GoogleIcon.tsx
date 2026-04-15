import Image from "next/image"


export default function GoogleIcon() {
    return (
        <div className="w-full max-w-[28px] min-h-[28px] h-auto">
            <Image src="../../images/auth/google-logo.svg" alt="google-icon" width={28} height={28} />
        </div>
    )
}