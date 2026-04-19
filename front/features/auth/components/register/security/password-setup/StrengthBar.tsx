
type StrengthBarProps = {
    activeSegments: number;
    segmentClassName: string;
};


export default function StrengthBar({ activeSegments, segmentClassName }: StrengthBarProps) {
    return (
        <div className="w-full max-w-[446px] min-h-[8px] h-auto flex items-center gap-[6px]">
            {[0, 1, 2].map((segment) => (
                <div
                    key={segment}
                    className={`h-2 flex-1 rounded-full ${segment < activeSegments ? segmentClassName : "bg-[#D7DEE8]"}`}
                />
            ))}
        </div>
    )
}
