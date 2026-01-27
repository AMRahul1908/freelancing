import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}






