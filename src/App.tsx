import Header from "./components/Header";
import LyricVideos from "./components/LyricVideos/LyricVideos";
import MusicVideos from "./components/MusicVideos/MusicVideos";
import Illustration from "./components/Illustration/Illustration";
import Design from "./components/Design/Design";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <LyricVideos />
      <MusicVideos />
      <Illustration />
      <Design />
      <Contact />
      <Footer />
    </>
  );
}
