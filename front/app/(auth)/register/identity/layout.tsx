



export default function identityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-[1400px] min-h-[900px] h-auto">
            {children}
        </div>
    )
}