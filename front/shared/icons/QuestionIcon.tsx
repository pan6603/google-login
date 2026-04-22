import Image from "next/image"

type QuestionIconProps = {
    className?: string
    imageSrc?: string
}



export default function QuestionIcon({ className, imageSrc }: QuestionIconProps) {
    return (
        <div className={className}>
            <Image 
                src={imageSrc || "../../images/icons/question-default.svg"} 
                alt="question-icon" 
                width={19} 
                height={19} 
            />
        </div>
    )
}