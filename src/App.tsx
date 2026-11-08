import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import IntroOverlay from '@/components/IntroOverlay';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <About />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
