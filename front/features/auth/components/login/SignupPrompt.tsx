import Link from "next/link"



export default function SignupPrompt() {
    return (
        <div className="w-full max-w-[342px] min-h-[27px] h-auto flex items-center justify-center mx-auto">
            <span className="text-[#424753] text-sm">Don&apos;t have an account? </span>
            <Link href="/register/identity" className="text-sm font-bold text-[#0058BD]">Create account</Link>
        </div>
    )
}