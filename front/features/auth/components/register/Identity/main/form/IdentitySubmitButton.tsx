import Link from "next/link"



export default function IdentitySubmitButton() {
    return (
        <Link href="/register/security" className="w-full max-w-[490px] min-h-[60px] h-auto bg-gradient-to-r from-[#0058BD] to-[#2771DF] rounded-full text-[18px] font-bold text-white flex items-center justify-center">
            Continue to Security
        </Link>
    )
}