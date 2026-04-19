import Link from "next/link"



export default function FooterMenu() {
    return (
        <div className="w-full max-w-[258px] min-h-[18px] h-auto flex items-center justify-between">
            <Link href="" className="text-[12px] font-normal text-[#424753]">Privacy</Link>
            <Link href="" className="text-[12px] font-normal text-[#424753]">Help Center</Link> 
            <Link href="" className="text-[12px] font-normal text-[#424753]">Security Guide</Link>
        </div>
    )
}