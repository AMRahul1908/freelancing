import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-navy text-foreground selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <div className="pt-20">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
