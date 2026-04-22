import ReviewSidebarHeader from "@/features/auth/components/register/review/sidebar/ReviewSidebarHeader";
import ReviewSidebarNav from "@/features/auth/components/register/review/sidebar/ReviewSidebarNav";
import ReviewSidebarActionButton from "@/features/auth/components/register/review/sidebar/ReviewSidebarActionButton";


export default function ReviewSidebar() {
    return (
        <aside className="w-full max-w-[288px] min-h-[900px] h-auto bg-[#F7F9FF] p-4 flex flex-col justify-between">
            <ReviewSidebarHeader />
            <ReviewSidebarNav />
            <ReviewSidebarActionButton />
        </aside>
    );
}
