import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest insights on mental health and holistic
            well-being.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Benefits of Psychotherapy for Mental Health",
                excerpt:
                  "Discover how psychotherapy can help you manage stress, anxiety, and other mental health challenges.",
                link: "/blog/psychotherapy-benefits",
              },
              {
                title: "Handwriting Analysis: What Your Writing Says About You",
                excerpt:
                  "Learn how graphology provides insights into personality and behavior.",
                link: "/blog/handwriting-analysis",
              },
              {
                title: "Marma Therapy: Unlocking the Body's Healing Potential",
                excerpt:
                  "Explore how stimulating vital energy points can improve your well-being.",
                link: "/blog/marma-therapy",
              },
              {
                title: "Using Bach Flower Remedies for Emotional Balance",
                excerpt:
                  "Understand how flower therapy can support emotional well-being.",
                link: "/blog/flower-therapy",
              },
              {
                title:
                  "Effective Parenting: Nurturing Mental Wellness in Children",
                excerpt:
                  "Practical tips for parents to foster healthy emotional development.",
                link: "/blog/parenting-tips",
              },
              {
                title: "Coping with Stress: Strategies for a Balanced Life",
                excerpt:
                  "Explore practical stress management techniques for daily life.",
                link: "/blog/stress-management",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={post.link}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Stay Updated?</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest articles and mental
            wellness tips.
          </p>
          <Button size="lg" asChild>
            <Link href="/subscribe">Subscribe Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
