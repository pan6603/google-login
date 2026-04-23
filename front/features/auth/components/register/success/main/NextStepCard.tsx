

type NextStepCardProps = {
    num?: string;
    className?: string;
    spanName?: string;
    description?: string;
}


export default function NextStepCard({ className, num, spanName, description }: NextStepCardProps) {
    return (
        <div className={className}>

            <div className="w-full max-w-[40px] min-h-[40px] h-auto bg-[#FFFFFF] rounded-2xl flex items-center justify-center text-[#181C20]">{num}</div>

            <span className="text-sm font-bold text-[#181C20]">{spanName}</span>
            <p className="text-[12px] font-normal text-[#424753] whitespace-pre-line">
                {description}
            </p>
        </div>
    )
}