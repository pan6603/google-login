import Image from "next/image"

export default function EmailIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] flex items-center justify-center">
            <Image src="../../images/icons/email.svg" alt="email-icon" width={19} height={15} />
        </div>
    )
}