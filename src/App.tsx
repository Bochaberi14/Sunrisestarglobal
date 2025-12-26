import ChatWidget from "./components/chatbot/ChatWidget";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
      <ChatWidget />
    </>
  );
}