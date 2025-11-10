import GridContainer from "../components/defaults/GridContainer";
import NavBar from "../components/nav/NavBar";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen background  ">
      <GridContainer cols={12}>
        <SideBar />
        <div className=" col-span-full lg:col-span-10">
          <NavBar />
          {children}
        </div>
      </GridContainer>
    </main>
  );
}
