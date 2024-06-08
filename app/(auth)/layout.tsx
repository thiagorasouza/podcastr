export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-auth bg-cover bg-center">
      <div className="flex min-h-screen glassmorphism-auth justify-center items-center">
        {children}
      </div>
    </div>
  );
}
