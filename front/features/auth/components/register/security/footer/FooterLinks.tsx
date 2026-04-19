import Link from "next/link"



export default function FooterLinks() {
    return (
        <div className="w-full max-w-[242px] min-h-[18px] h-auto flex justify-between items-center">
            <Link href="#" className="text-[#424753] text-xs">Privacy</Link>
            <Link href="#" className="text-[#424753] text-xs">Help Center</Link>
            <Link href="#" className="text-[#424753] text-xs">Security Guide</Link>
        </div>
    )
}