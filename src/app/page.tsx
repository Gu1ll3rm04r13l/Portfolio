import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Work from "@/components/work/Work";
import Resume from "@/components/resume/Resume";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Work />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
