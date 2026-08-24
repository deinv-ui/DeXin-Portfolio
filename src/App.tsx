import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import { Stack } from "./components/sections/Stack";
import { Contact } from "./components/sections/Contact";
import { Toast } from "./components/ui/Toast";

export default function App() {
  return (
    <>
      <Nav />

      <main id="top">
        <Hero />
        <Work />
        <Stack />
        <Contact />
      </main>

      <Footer />
      <Toast />
    </>
  );
}
