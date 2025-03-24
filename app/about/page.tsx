import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Manvijay Psychotherapy Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dedicated to promoting mental wellness and holistic healing through
            personalized care and innovative techniques.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To empower individuals with holistic therapies and mental
                wellness practices, fostering growth, resilience, and emotional
                well-being.
              </p>
              <ul className="space-y-4">
                {[
                  "Promote mental health and wellness",
                  "Utilize innovative and effective therapeutic methods",
                  "Create a supportive and compassionate environment",
                  "Empower individuals to overcome personal challenges",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be a beacon of hope and transformation in mental health and
                holistic well-being, helping individuals lead fulfilling and
                balanced lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Compassion",
                description:
                  "We prioritize empathy and understanding in every interaction.",
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Excellence",
                description:
                  "We strive for the highest standards in therapeutic care.",
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: "Integrity",
                description:
                  "We maintain transparency and ethical practices at all times.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Founder
          </h2>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Pratima S. Khandekar"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Mrs. Pratima S. Khandekar</h3>
            <p className="text-gray-600">Founder & Psychotherapist</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us on Your Journey to Wellness
          </h2>
          <p className="text-gray-600 mb-8">
            Discover how our holistic therapies can help you achieve mental and
            emotional well-being.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
