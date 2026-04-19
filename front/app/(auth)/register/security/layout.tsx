



export default function SecurityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full max-w-[1440px] min-h-[961px] h-auto bg-[#F7F9FF] flex flex-col justify-between items-center">
            {children}
        </div>
    )
}