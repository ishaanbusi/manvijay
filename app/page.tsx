import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Lightbulb, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Psychotherapy & Holistic Well-being Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive mental health and wellness services designed to
            support your journey towards a healthier mind and body.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-600" />, // Replace with relevant icon
                title: "Psychotherapy & Counseling",
                description:
                  "Personalized therapy sessions to help individuals cope with mental health challenges.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />, // Replace with relevant icon
                title: "Handwriting Analysis",
                description:
                  "Using graphology to gain insights into personality traits and behaviors.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-blue-600" />, // Replace with relevant icon
                title: "Marma Chikitsa",
                description:
                  "Ancient Indian therapy focusing on stimulating vital energy points for holistic healing.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The psychotherapy sessions provided me with tools to manage my anxiety effectively.",
                author: "Aarav Mehta",
                role: "Software Engineer",
              },
              {
                quote:
                  "Handwriting analysis gave me a deeper understanding of my strengths and areas for growth.",
                author: "Priya Sharma",
                role: "Graphic Designer",
              },
              {
                quote:
                  "Marma therapy sessions have significantly improved my overall well-being.",
                author: "Rohit Kumar",
                role: "Business Owner",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to start your journey towards mental wellness and
            personal growth.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
