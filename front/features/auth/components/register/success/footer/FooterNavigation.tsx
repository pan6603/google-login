import Link from "next/link"


export default function FooterNavigation() {
    return (
        <div className="w-full max-w-[282px] min-h-[18px] h-auto flex items-center justify-between">
            <Link href="" className="text-[12px] font-normal text-[#424753]">Privacy Policy</Link>
            <Link href="" className="text-[12px] font-normal text-[#424753]">Security Standards</Link>
            <Link href="" className="text-[12px] font-normal text-[#424753]">Support</Link>
        </div>
    )
}