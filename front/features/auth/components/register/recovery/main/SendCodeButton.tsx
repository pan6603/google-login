import Link from "next/link"



export default function SendCodeButton() {
    return (
        <Link 
            href="/register/recovery/verify" 
            className="w-full max-w-[510px] min-h-[60px] h-auto bg-[#0058BD] px-[32px] rounded-xl text-white font-bold flex items-center justify-center">
            Send Verification Code
        </Link>
    )
}