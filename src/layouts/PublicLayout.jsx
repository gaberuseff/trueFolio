import Header from "@/components/landing/jsx/Header";
import Footer from "@/components/layout/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function PublicLayout() {
  const location = useLocation();

  return (
    <div
      className="flex flex-col"
      dir="rtl">
      <Header key={location.pathname} />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
