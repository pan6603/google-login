import Image from "next/image"

type StepItemProps = {
    className?: string;
    imageSrc: string;
    title: string;
}



export default function StepItem({ className, imageSrc, title }: StepItemProps) {
    return (
        <div className={className}>
            <Image src={imageSrc} alt={title} width={19} height={19} />
            <h3 className="text-base font-medium text-[#000000]">{title}</h3>
        </div>
    )
}