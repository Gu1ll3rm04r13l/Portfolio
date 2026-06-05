import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero";
import Work from "@/components/work/Work";
import Resume from "@/components/resume/Resume";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <main className="relative">
        <NavBar />
        <Hero />
        <Work />
        <Resume />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
