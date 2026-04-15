import Link from "next/link"


export default function HeaderNav() {
    return (
        <div className="w-full max-w-[205px] min-h-[20px] h-auto flex items-center justify-between">
            <Link href="" className="text-sm font-medium text-[#424753]">
                Help Center
            </Link>

            <Link href="" className="text-sm font-medium text-[#424753]">
                Privacy Policy
            </Link>
        </div>
    )
}