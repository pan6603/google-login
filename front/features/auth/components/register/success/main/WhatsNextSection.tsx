import WhatsNextSectionHeader from "@/features/auth/components/register/success/main/WhatsNextSectionHeader";
import NextStepCards from "@/features/auth/components/register/success/main/NextStepCards";



export default function WhatsNextSection() {
    return (
        <div className="w-full max-w-[768px] min-h-[356px] h-auto flex flex-col items-center justify-end">
            <div className="w-full max-w-[768px] min-h-[268px] h-auto bg-[#FFFFFF] flex flex-col items-center justify-between rounded-[12px] px-[32px] py-[24px]">
                <WhatsNextSectionHeader />
                <NextStepCards />
            </div>
        </div>

        
    )
}