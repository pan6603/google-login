import StepItem from "@/features/auth/components/register/review/sidebar/StepItem";



export default function ReviewSidebarNav() {
    return (
        <div className="w-full max-w-[224px] min-h-[659px] h-auto flex flex-col gap-6 p-6">
            <StepItem 
                className="w-full max-w-[224px] min-h-[24px] h-auto flex items-center gap-2"
                imageSrc="../../../../../../images/icons/step.svg"
                title="Identity"
            />

            <StepItem 
                className="w-full max-w-[224px] min-h-[24px] h-auto flex items-center gap-2"
                imageSrc="../../../../../../images/icons/step.svg"
                title="Security"
            />

            <StepItem 
                className="w-full max-w-[224px] min-h-[24px] h-auto flex items-center gap-2"
                imageSrc="../../../../../../images/icons/step.svg"
                title="Recovery"
            />

            <StepItem 
                className="w-full max-w-[224px] min-h-[24px] h-auto flex items-center gap-2"
                imageSrc="../../../../../../images/icons/check-list.svg"
                title="Review"
            />
        </div>
    )
}