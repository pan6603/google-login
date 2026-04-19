import Image from "next/image";


type PasswordVisibilityToggleProps = {
    className?: string;
    visible: boolean;
    onToggle: () => void;
};



export default function PasswordVisibilityToggle({ className, visible, onToggle }: PasswordVisibilityToggleProps) {
    return (
        <button
            type="button"
            className={className}
            onClick={onToggle}
            aria-label={visible ? "Hide password" : "Show password"}
        >
            <Image
                src={visible ? "/images/icons/eye.svg" : "/images/icons/eye-off.svg"}
                alt=""
                width={22}
                height={18}
            />
        </button>
    )
}
