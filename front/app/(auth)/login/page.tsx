import Badge from "@/shared/ui/badge/Badge"
import LoginFormHeader from "@/features/auth/components/login/form/LoginFormHeader"
import LoginForm from "@/features/auth/components/login/form/LoginForm"
import Divider from "@/features/auth/components/login/Divider"
import SocialLoginButton from "@/features/auth/components/login/form/SocialLoginButton"
import SignupPrompt from "@/features/auth/components/login/SignupPrompt"


export default function LoginPage() {
    return (
        <div className="mx-auto w-full max-w-[440px] min-h-[817px] h-auto bg-white rounded-3xl p-12 flex flex-col justify-between">
            <Badge 
                className="w-full max-w-[140px] min-h-[24px] h-auto bg-[#86F898] text-[10px] font-semibold text-[#00722F] rounded-full flex items-center gap-[6px] py-1 px-3" 
                imageSrc="../../../images/auth/secure-badge-icon.svg"
                text="Encrypted Access"
            />

            <LoginFormHeader />
            <LoginForm />
            <Divider />
            <SocialLoginButton />
            <SignupPrompt />
            
        </div>
    )
}