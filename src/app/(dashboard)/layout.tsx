import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        {/* NAVBAR */}
        <div className="fixed top-0 left-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          {/*  TODO NAVBAR */}
          <Navbar />
          {/* enable user button following screen size */}
          <div className="mx-auto max-w-screen-2xl h-full">
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
