



export default function Header() {
    return (
        <header className="w-full max-w-[1440px] min-h-[72px] bg-[#F7F9FF] py-4 px-6 flex items-center justify-between">
            <div className="text-[20px] font-bold text-[#181C20]">Digital Sanctuary</div>

            <div className="w-full max-w-[97px] min-h-[40px] h-auto flex items-center justify-between">
                <button className="w-full max-w-[38px] min-h-[38px] h-auto text-[#424753]">help</button>
                <button className="w-full max-w-[38px] min-h-[38px] h-auto text-[#424753]">info</button>
            </div>
        </header>
    )
}