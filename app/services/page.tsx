import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Leaf,
  PenTool,
  Brain,
  Flower2,
  Users,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Holistic Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Offering a comprehensive range of therapies designed to promote
            mental wellness and holistic well-being.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-blue-600" />,
                title: "Psychotherapy & Counseling",
                description:
                  "Personalized support to help individuals overcome mental health challenges.",
                features: [
                  "One-on-one Counseling",
                  "Group Therapy Sessions",
                  "Stress Management",
                  "Relationship Counseling",
                ],
              },
              {
                icon: <PenTool className="h-8 w-8 text-blue-600" />,
                title: "Handwriting Analysis",
                description:
                  "Graphology techniques to gain insights into personality traits and behaviors.",
                features: [
                  "Personality Insights",
                  "Behavioral Analysis",
                  "Career Guidance",
                  "Self-improvement Tips",
                ],
              },
              {
                icon: <Leaf className="h-8 w-8 text-blue-600" />,
                title: "Marma Chikitsa",
                description:
                  "Ancient Indian therapy to stimulate vital energy points for holistic healing.",
                features: [
                  "Energy Balancing",
                  "Pain Relief",
                  "Stress Reduction",
                  "Improved Sleep Quality",
                ],
              },
              {
                icon: <Flower2 className="h-8 w-8 text-blue-600" />,
                title: "Flower Therapy",
                description:
                  "Using Bach Flower Remedies for emotional well-being and stress relief.",
                features: [
                  "Mood Enhancement",
                  "Anxiety Relief",
                  "Emotional Balance",
                  "Natural Healing",
                ],
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Workshops & Training",
                description:
                  "Educational workshops on mental wellness and self-development.",
                features: [
                  "Parenting Workshops",
                  "Study Skills Training",
                  "Sex Education for Youth",
                  "Corporate Wellness Programs",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Approach",
                description:
                  "We address mental, emotional, and physical well-being as a whole.",
              },
              {
                title: "Experienced Professionals",
                description:
                  "Our team is well-versed in multiple therapeutic techniques.",
              },
              {
                title: "Personalized Care",
                description:
                  "We tailor our services to fit individual needs and goals.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discover the Path to Wellness
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us today and start your journey toward a healthier mind
            and body.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
