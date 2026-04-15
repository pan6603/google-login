import TrustBadge from "@/features/auth/components/register/Identity/footer/TrustBadge";


export default function TrustBadges() {
    return (
        <div className="w-full max-w-[245px] min-h-[36px] h-auto flex items-center justify-between">
            <TrustBadge 
                className="w-full max-w-[129px] min-h-[36px] h-auto flex items-center gap-[8px]"
                imageSrc="../../../../../../images/icons/icon-iso-27001.svg"
                altText="trust-badge"
                text="ISO 27001"
            />

            <TrustBadge 
                className="w-full max-w-[92px] min-h-[36px] h-auto flex items-center gap-[8px]"
                imageSrc="../../../../../../images/icons/icon-gdpr.svg"
                altText="gdpr-badge"
                text="GDPR"
            />
        </div>
    )
}