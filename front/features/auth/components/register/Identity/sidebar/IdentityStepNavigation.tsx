import StepNavigationItem from "@/features/auth/components/register/Identity/sidebar/StepNavigationItem";



export default function IdentityStepNavigation() {
    return (
        <nav className="w-full max-w-[240px] min-h-[700px] h-auto flex flex-col gap-[8px]">
            <StepNavigationItem 
                itemName="Identity"
                imageSrc="../../../../../../images/icons/identity.svg"
                href="/register/identity"
            />
            <StepNavigationItem 
                itemName="Security"
                imageSrc="../../../../../../images/icons/security.svg"
                href=""
            />
            <StepNavigationItem 
                itemName="Preferences"
                imageSrc="../../../../../../images/icons/preferences.svg"
                href=""
            />
            <StepNavigationItem 
                itemName="Review"
                imageSrc="../../../../../../images/icons/review.svg"
                href=""
            />
        </nav>
    )
}