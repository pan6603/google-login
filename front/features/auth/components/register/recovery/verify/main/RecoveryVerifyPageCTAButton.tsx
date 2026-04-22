import Link from "next/link"

export default function RecoveryVerifyPageCTAButton() {
  return (
    <div className="w-full max-w-[478px] min-h-[92px] h-auto">
      <Link
        href="/register/review"
        className="flex w-full min-h-[60px] items-center justify-center rounded-2xl bg-[#0058BD] text-[18px] font-semibold text-white"
      >
        Verify & Continue
      </Link>
    </div>
  )
}