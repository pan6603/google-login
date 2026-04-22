import ReviewSidebar from "@/features/auth/components/register/review/sidebar/ReviewSidebar";
import ReviewMainContent from "@/features/auth/components/register/review/main/ReviewMainContent";

export default function ReviewPage() {
    return (
        <div className="w-full max-w-[1440px] min-h-[1006px] h-auto bg-[#F7F9FF] flex items-start justify-between">
            <ReviewSidebar />
            <ReviewMainContent />
        </div>
    );
}
