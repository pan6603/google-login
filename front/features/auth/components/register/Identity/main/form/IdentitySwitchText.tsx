import Link from "next/link"



export default function IdentitySwitchText() {
    return (
        <div className="w-full max-w-[490px] min-h-[28px] h-auto flex items-center justify-center gap-1">
            <span className="text-sm font-normal text-[#424753]">Already have an account?</span>
            <Link href="" className="text-sm font-bold text-[#0058BD]">
                Sign in instead
            </Link>
        </div>
    )
}