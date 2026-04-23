import WhatsNextSectionTitle from "@/features/auth/components/register/success/main/WhatsNextSectionTitle";
import EncryptedBadge from "@/shared/ui/badge/EncryptedBadge";


export default function WhatsNextSectionHeader() {
    return (
        <div className="w-full max-w-[702px] min-h-[28px] h-auto flex items-center justify-between">
            <WhatsNextSectionTitle />
            <EncryptedBadge 
                className="w-full max-w-[103px] min-h-[24px] h-auto flex items-center justify-center rounded-full bg-[#86F898]"
                spanClassName="text-[12px] font-bold text-[#00722F]"
                text="Encrypted"
            />
        </div>
    )
}