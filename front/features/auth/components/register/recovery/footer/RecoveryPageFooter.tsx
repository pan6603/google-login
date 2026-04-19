import RecoveryCopyright from "@/features/auth/components/register/recovery/footer/RecoveryCopyright";
import FooterMenu from "@/features/auth/components/register/recovery/footer/FooterMenu";



export default function RecoveryPageFooter() {
    return (
        <footer className="w-full max-w-[1440px] min-h-[67px] h-auto bg-[#F7F9FF] border-t border-[#EBEEF4] px-[48px] flex items-center justify-between">
            <RecoveryCopyright />
            <FooterMenu />
        </footer>
    )
}