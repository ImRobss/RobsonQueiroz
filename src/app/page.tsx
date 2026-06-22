import {
  Navbar,
  Hero,
  About,
  Timeline,
  Projects,
  Stack,
  Contact,
  Footer,
} from "@views/index";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
