



export default function RegisterSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[1440px] min-h-[1259px] h-auto flex flex-col items-center justify-between">
      {children}
    </div>
  );
}
