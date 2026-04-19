import TopNavigation from "@/features/auth/components/register/security/top/TopNavigation";
import PasswordSetupForm from "@/features/auth/components/register/security/password-setup/PasswordSetupForm";
import PasswordSetupFooter from "@/features/auth/components/register/security/footer/PasswordSetupFooter";


export default function SecurityPage() {
    return (
        <>
            <TopNavigation />
            <PasswordSetupForm />
            <PasswordSetupFooter />
        </>
    )   
}