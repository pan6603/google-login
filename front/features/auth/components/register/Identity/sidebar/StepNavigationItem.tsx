"use client";

import IdentityIcon from "@/shared/icons/IdentityIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";


type StepNavigationItemProps = {
    itemName: string;
    imageSrc: string;
    href: string;
}


export default function StepNavigationItem({ itemName, imageSrc, href }: StepNavigationItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <div className="w-full max-w-[240px] min-h-[48px] h-auto px-4 py-3 flex items-center gap-[16px]">
            <IdentityIcon imageSrc={imageSrc} />
            <Link 
                href={href}   
                className={`text-sm font-bold ${
                    isActive ? "text-blue-600" : "text-[#424753]"
                }`}>
                    {itemName}
                </Link>
        </div>
    )
}