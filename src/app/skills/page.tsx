import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import WhyChooseMe from "@/components/WhyChooseMe";
import Footer from "@/components/Footer";

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-navy text-foreground selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <div className="pt-20">
                <TechStack />
                <WhyChooseMe />
            </div>
            <Footer />
        </main>
    );
}
