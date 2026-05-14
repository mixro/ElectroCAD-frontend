import FeaturedProjects from "../../sections/featuredProjects/FeaturedProjects";
import FinalCTA from "../../sections/finalCTA/FInalCTA";
import Hero from "../../sections/hero/Hero";
import Services from "../../sections/services/Services";
import Testimonials from "../../sections/testimonials/Testimonials";
import WhyChooseUs from "../../sections/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <FinalCTA />
    </>
  );
}