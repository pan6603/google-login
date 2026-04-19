import Image from "next/image"


export default function UserMenuIcon() {
    return (
        <div className="w-full max-w-[24px] min-h-[24px] h-auto flex items-center justify-center">
            <Image 
                src="../../images/icons/user-menu.svg" 
                alt="user-menu-icon" 
                width={19} 
                height={19} 
            />
        </div>
    )
}