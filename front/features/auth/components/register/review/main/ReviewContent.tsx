import ReviewContentTitle from "@/features/auth/components/register/review/main/ReviewContentTitle";
import ReviewContentSection from "@/features/auth/components/register/review/main/ReviewContentSection";


export default function ReviewContent() {
    return (
        <div className="w-full max-w-[896px] min-h-[848px] h-auto flex flex-col items-center justify-between">
            <ReviewContentTitle />
            <ReviewContentSection />
        </div>
    )
}