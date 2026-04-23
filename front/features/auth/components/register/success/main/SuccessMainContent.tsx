import HeroIcon from "@/shared/icons/HeroIcon";
import HeroContent from "@/features/auth/components/register/success/main/HeroContent";
import SuccessPrimaryCTAButton from "@/features/auth/components/register/success/main/SuccessPrimaryCTAButton";
import WhatsNextSection from "@/features/auth/components/register/success/main/WhatsNextSection";


export default function SuccessMainContent() {
    return (
        <div className="w-full max-w-[1184px] min-h-[1078px] h-auto flex items-center justify-center">
            <div className="w-full max-w-[896px] min-h-[950px] h-auto flex flex-col items-center justify-between">
                <HeroIcon />
                <HeroContent />
                <SuccessPrimaryCTAButton />
                <WhatsNextSection />
            </div>  
        </div>
    )
}