import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-navy text-foreground selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
