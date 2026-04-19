




export default function EmailInputWithButton() {
    return (
        <div className="w-full max-w-[510px] min-h-[65px] h-auto flex items-center justify-between">
            <input 
                type="text"
                placeholder="backup@example.com"
                className="w-full max-w-[418px] min-h-[65px] h-auto bg-[#F1F4FA] p-6 rounded-xl text-[#000000]"
            />

            <button 
                className="w-full max-w-[80px] min-h-[64px] h-auto bg-[#181C20] flex items-center justify-center rounded-xl text-[#FFFFFF]">
                    Add
                </button>
        </div>
    )
}