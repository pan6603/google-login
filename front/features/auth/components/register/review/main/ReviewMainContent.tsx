import ReviewPageTop from "@/features/auth/components/register/review/main/ReviewPageTop";
import ReviewContent from "@/features/auth/components/register/review/main/ReviewContent";


export default function ReviewMainContent() {
    return (
        <div className="w-full max-w-[1152px] min-h-[1006px] h-auto flex flex-col items-center justify-between">
            <ReviewPageTop />
            <ReviewContent />
        </div>
    )
}