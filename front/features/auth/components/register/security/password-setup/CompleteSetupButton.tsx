import Link from "next/link"



export default function CompleteSetupButton() {
    return (
        <Link 
            href="/register/recovery"
            className="w-full max-w-[446px] min-h-[60px] h-auto bg-[#0058BD] flex justify-center items-center text-white font-bold text-[18px] rounded-xl">
            Complete Setup
        </Link>
    )
}