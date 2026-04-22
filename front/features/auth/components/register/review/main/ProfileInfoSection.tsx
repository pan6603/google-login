import InfoItem from "@/features/auth/components/register/review/main/InfoItem";



export default function ProfileInfoSection() {
    return (
        <div className="w-full max-w-[250px] min-h-[232px] h-auto flex flex-col justify-between">
            <InfoItem 
                className="w-full max-w-[250px] min-h-[48px] h-auto"
                label="Full Name"
                value="Julian Thorne"
                imageSrc="../../../../../../images/icons/profile.svg"
            />

            <InfoItem 
                className="w-full max-w-[250px] min-h-[48px] h-auto"
                label="Recovery Mobile"
                value="(555) 000-0000"
                imageSrc="../../../../../../images/icons/phone.svg"
            />

            <InfoItem 
                className="w-full max-w-[250px] min-h-[48px] h-auto"
                label="Security Level"
                value="Enhanced - AES-256"
                imageSrc="../../../../../../images/icons/security.svg"
            />
        </div>
    )
}