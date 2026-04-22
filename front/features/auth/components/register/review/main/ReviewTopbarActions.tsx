import StatusIcon from "@/shared/icons/StatusIcon"
import LockIcon from "@/shared/icons/LockIcon"
import QuestionIcon from "@/shared/icons/QuestionIcon"

export default function ReviewTopbarActions() {
    return (
        <div className="w-full max-w-[120px] min-h-[24px] h-auto flex items-center justify-between">
            <StatusIcon />

            <LockIcon 
                className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center"
                imageSrc="../../../../../../images/icons/lock-default.svg"
            />

            <QuestionIcon 
                className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center"
                imageSrc="../../../../../../images/icons/question-default.svg"
            />
        </div>
    )
}