import FooterCopyright from "@/features/auth/components/register/security/footer/FooterCopyright";
import FooterLinks from "@/features/auth/components/register/security/footer/FooterLinks";


export default function PasswordSetupFooter() {
    return (
        <footer className="w-full max-w-[1440px] min-h-[83px] h-auto p-8 flex justify-between items-center">
            <FooterCopyright />
            <FooterLinks />
        </footer>
    )
}