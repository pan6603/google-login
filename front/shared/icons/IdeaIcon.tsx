import Image from "next/image"


export default function IdeaIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[28px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/idea.svg"
                alt="idea-icon"
                width={21}
                height={21}
            />
        </div>
    )
}