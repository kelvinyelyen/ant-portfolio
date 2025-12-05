import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Showcase />
      <Blog />
      <Contact />
    </main>
  );
}
