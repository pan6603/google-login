import IdentityIcon from "@/shared/icons/IdentityIcon";


type StepNavigationItemProps = {
    itemName: string;
    imageSrc: string;
}


export default function StepNavigationItem({ itemName, imageSrc }: StepNavigationItemProps) {
    return (
        <div className="w-full max-w-[240px] min-h-[48px] h-auto px-4 py-3 flex items-center gap-[16px]">
            <IdentityIcon imageSrc={imageSrc} />
            <span className="text-sm font-bold text-[#424753]">{itemName}</span>
        </div>
    )
}