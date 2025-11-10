import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen text-black  ">
      <GridContainer cols={12}>
        <SideBar />
        <div className="bg-blue-200  col-span-full lg:col-span-10">
          {children}
        </div>
      </GridContainer>
    </main>
  );
}
