import TopNavbar from "@/features/auth/components/register/review/main/TopNavbar";
import ReviewTopbarActions from "@/features/auth/components/register/review/main/ReviewTopbarActions";



export default function ReviewPageTop() {
    return (
        <div className="w-full max-w-[1152px] min-h-[76px] h-auto bg-[#FFFFFF] px-12 flex items-center justify-between">
            <TopNavbar />
            <ReviewTopbarActions />
        </div>
    )
}