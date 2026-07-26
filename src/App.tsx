import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import PropertyDetails from "./pages/PropertyDetails";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import NewProjectPage from "./pages/NewProjectPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Localhost - Find a host for every journey";
        metaDescription = "Discover the best local rental properties that fits your every travel needs";
        break;
      case "/sign-in-page":
        title = "Sign In - Localhost";
        metaDescription = "Sign in to your Localhost account";
        break;
      case "/property-details":
        title = "Property Details - Localhost";
        metaDescription = "View detailed information about this property";
        break;
      case "/sign-up-page":
        title = "Sign Up - Localhost";
        metaDescription = "Create your Localhost account";
        break;
      case "/card":
        title = "Card Showcase - Localhost";
        metaDescription = "Explore different stay card layouts and designs";
        break;
      case "/admin":
        title = "Admin Settings - RFQ Configuration";
        metaDescription = "Configure RFQ settings, shipping options, and supplier requirements";
        break;
      case "/new-project":
        title = "New Project - Innovatech Solutions";
        metaDescription = "Create a new project with company details, industry selection, and file uploads";
        break;
      case "/localhost":
        title = "Localhost - Find a host for every journey";
        metaDescription = "Discover the best local rental properties that fits your every travel needs";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      
      <Route path="/" element={<SignInPage />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/admin" element={<AdminSettingsPage />} />
      <Route path="/new-project" element={<NewProjectPage />} />
      
    </Routes>
  );
}
export default App;
