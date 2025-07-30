import Sidbar from "../components/Side";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section lang="en">
      <Sidbar />
      {children}
    </section>
  );
}
