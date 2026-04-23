import Link from "next/link"





export default function CTASection() {
    return (
        <div className="w-full max-w-[453px] min-h-[76px] h-auto flex items-center justify-between">
            <Link href="/register/success" className="w-full max-w-[266px] min-h-[60px] h-auto bg-[#2771DF] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold">Create My Sanctuary</Link>
            <Link href="/register/recovery/verify" 
                className="w-full max-w-[151px] min-h-[56px] h-auto text-base font-semibold text-[#424753] flex items-center justify-center">
                    Back
                </Link>
        </div>
    )
}