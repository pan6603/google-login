import Link from "next/link"




export default function BackButton() {
    return (
        <Link 
            href="/register/identity"
            className="w-full max-w-[446px] min-h-[48px] h-auto bg-[#FFFFFF] text-[#424753] font-semibold text-base rounded-xl flex items-center justify-center">
            Back
        </Link>
    )
}