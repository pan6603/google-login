import NextStepCard from "@/features/auth/components/register/success/main/NextStepCard";



export default function NextStepCards() {
    return (
        <div className="w-full max-w-[702px] min-h-[150px] h-auto flex items-center justify-between">
            <NextStepCard 
                className="w-full max-w-[218px] min-h-[150px] h-auto bg-[#F1F4FA] p-5 rounded-2xl flex flex-col justify-between"
                num="1"
                spanName="Secure your first asset"
                description={"Deposit your primary vault\nkeys into the vault."}
            />
            <NextStepCard 
                className="w-full max-w-[218px] min-h-[150px] h-auto bg-[#F1F4FA] p-5 rounded-2xl flex flex-col justify-between" 
                num="2"
                spanName="Review security settings"
                description={"Enable biometric auth and\nmulti-sig recovery."}
            />
            <NextStepCard 
                className="w-full max-w-[218px] min-h-[150px] h-auto bg-[#F1F4FA] p-5 rounded-2xl flex flex-col justify-between" 
                num="3"
                spanName="Invite trusted contacts"
                description={"Designate your legacy\nguardians for backup."}
            />
        </div>
    )
}