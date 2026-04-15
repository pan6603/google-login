import LoginButton from "@/features/auth/components/login/form/LoginButton";
import InputField from "@/shared/ui/input/InputField";

export default function LoginForm() {
    return (
       <form className="w-full max-w-[342px] min-h-[275px] h-auto flex flex-col justify-between">
            <InputField 
                className="w-full max-w-[342px] min-h-[82px] h-auto flex flex-col justify-between" 
                placeholder="name@company.com"
                label="Email or phone"
            />
            <InputField 
                className="w-full max-w-[342px] min-h-[82px] h-auto flex flex-col justify-between" 
                placeholder="Enter password"
                label="Password"
                forgotPasswordLink="Forgot password?"
            />
            <LoginButton />
       </form>
    )
}