import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollStack from "./components/bits/jsx/test";
import CursorFollower from "./components/CursorFollower";
import PublicLayout from "./layouts/PublicLayout";
import About from "./pages/About/jsx/About";
import Contact from "./pages/Contact/jsx/Contact";
import Landing from "./pages/landing";
import ConfirmationSuccess from "./pages/login/jsx/done";
import EmailVerificationPage from "./pages/login/jsx/EmailVerificationPage";
import Login from "./pages/login/jsx/login";
import Signup from "./pages/login/jsx/signup";
import PortfolioPage from "./pages/portfolio/jsx/Portfolio";
import Marketing from "./pages/Services/jsx/Marketing";
import MobileApp from "./pages/Services/jsx/MobileApp";
import SEO from "./pages/Services/jsx/SEO";
import WebDesign from "./pages/Services/jsx/WebDesign";
const Dashboard = lazy(() => import("./pages/dashboard/jsx/main"));
const ProjectsManagementPage = lazy(() =>
  import("./pages/dashboard/jsx/projects")
);
const ProjectDetails = lazy(() => import("./pages/dashboard/jsx/project"));
const BillingAndPayments = lazy(() =>
  import("./pages/dashboard/jsx/BillingAndPayments")
);
const ReferralProgram = lazy(() =>
  import("./pages/dashboard/jsx/ReferralProgram")
);
const Feedback = lazy(() => import("./pages/dashboard/jsx/Feedback"));
const ToolsPage = lazy(() => import("./pages/dashboard/jsx/Tools"));
const Tool_ImageToSite = lazy(() =>
  import("./pages/dashboard/jsx/Tool_ImageToSite")
);
const Tool_TextToArticle = lazy(() =>
  import("./pages/dashboard/jsx/Tool_TextToArticle")
);
const Tool_QRCodeGenerator = lazy(() =>
  import("./pages/dashboard/jsx/Tool_QRCodeGenerator")
);
const SettingsProfile = lazy(() =>
  import("./pages/dashboard/jsx/SettingsProfile")
);
const SettingsIntegrations = lazy(() =>
  import("./pages/dashboard/jsx/SettingsIntegrations")
);
const LibraryKnowledge = lazy(() =>
  import("./pages/dashboard/jsx/LibraryKnowledge")
);
const Review = lazy(() => import("./pages/dashboard/jsx/Review"));
const SiteViewer = lazy(() => import("./pages/site/SiteViewer"));
const SiteViewerGeneric = lazy(() => import("./pages/site/SiteViewerGeneric"));
const Sidebar = lazy(() => import("./pages/dashboard/jsx/Sidebar"));

function Shell() {
  const location = useLocation();
  const showSidebar =
    /^(\/dashboard|\/projects|\/project|\/billing|\/referral|\/feedback|\/library\/knowledge|\/review|\/settings\/profile|\/settings\/integrations|\/tools)/.test(
      location.pathname
    );
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-gray-600">Loading...</div>
      }>
      {showSidebar && <Sidebar />}
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services/webdesign" element={<WebDesign />} />
          <Route path="/services/mobileapp" element={<MobileApp />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<ScrollStack />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/done" element={<ConfirmationSuccess />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tools" element={<ToolsPage />} />
        <Route
          path="/dashboard/tools/image-to-site"
          element={<Tool_ImageToSite />}
        />
        <Route
          path="/dashboard/tools/text-to-article"
          element={<Tool_TextToArticle />}
        />
        <Route
          path="/dashboard/tools/qr-code-generator"
          element={<Tool_QRCodeGenerator />}
        />
        <Route
          path="/dashboard/tools/qr-generator"
          element={<Tool_QRCodeGenerator />}
        />
        <Route path="/settings/profile" element={<SettingsProfile />} />
        <Route
          path="/settings/integrations"
          element={<SettingsIntegrations />}
        />
        <Route path="/projects" element={<ProjectsManagementPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/billing" element={<BillingAndPayments />} />
        <Route path="/referral" element={<ReferralProgram />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/library/knowledge" element={<LibraryKnowledge />} />
        <Route path="/review" element={<Review />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/image-to-site" element={<Tool_ImageToSite />} />
        <Route path="/tools/text-to-article" element={<Tool_TextToArticle />} />
        <Route path="/tools/qr-generator" element={<Tool_QRCodeGenerator />} />
        <Route
          path="/:username/image-to-site/:usageId"
          element={<SiteViewer />}
        />
        <Route
          path="/:username/:toolId/:usageId"
          element={<SiteViewerGeneric />}
        />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CursorFollower />
      <Shell />
    </BrowserRouter>
  );
}

export default App;
