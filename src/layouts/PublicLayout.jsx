import Header from "@/components/landing/jsx/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { Outlet, useLocation } from "react-router-dom";

export default function PublicLayout() {
  const location = useLocation();

  return (
    <div
      className="flex flex-col w-full max-w-full overflow-x-hidden" // Added overflow-x-hidden to prevent horizontal scroll
      dir="rtl">
      <ScrollProgressBar />
      <Header key={location.pathname} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
