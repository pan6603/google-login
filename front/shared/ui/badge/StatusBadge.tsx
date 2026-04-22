import StatusBadgeIcon from "@/shared/icons/StatusBadgeIcon"

type StatusBadgeProps = {
    className?: string
    spanClassName?: string
    text?: string
}


export default function StatusBadge({ className, text, spanClassName}: StatusBadgeProps) {
    return (
        <div className={className}>
            <StatusBadgeIcon />
            <span className={spanClassName}>{text}</span>
        </div>
    )
}