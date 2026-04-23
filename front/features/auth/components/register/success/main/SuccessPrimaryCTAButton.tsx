import Link from "next/link"




export default function SuccessPrimaryCTAButton() {
    return (
        <div className="w-full max-w-[290px] min-h-[108px] h-auto flex flex-col items-center justify-end">
            <Link 
                href="/login" 
                className="inline-flex w-full min-h-[68px] items-center justify-center rounded-full bg-gradient-to-r from-[#0058BD] to-[#2771DF] text-white font-semibold">
                    Enter My Sanctuary
                </Link>
        </div>
    )
}