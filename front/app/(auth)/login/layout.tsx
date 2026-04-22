import LoginPageHeader from "@/features/auth/components/login/header/LoginPageHeader"


export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full max-w-[1440px] min-h-[985px] h-auto flex flex-col justify-end">
            <LoginPageHeader />
            <main className="w-full max-w-[1440px] min-h-[913px] h-auto bg-[#F7F9FE]">
                {children}
            </main>
        </div>
    )
}