import GoogleIcon from "@/shared/icons/GoogleIcon"


export default function SocialLoginButton() {
    return (
        <button className="w-full max-w-[342px] min-h-[62px] h-auto bg-[#FFFFFF] border border-[#C2C6D5]/40 rounded-full flex items-center justify-center gap-2">
            <GoogleIcon />
            <span className="text-sm font-semibold text-[#181C20]">Sign in with Google</span>
        </button>
    )
}