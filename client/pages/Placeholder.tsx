import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow pt-20 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <div className="bg-white rounded-xl p-12 shadow-lg border-2 border-dashed border-blue-200 max-w-2xl mx-auto">
              <p className="text-gray-600 mb-6 leading-relaxed">
                This page is coming soon! We're working hard to bring you great
                content for the {title.toLowerCase()} section.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                In the meantime, feel free to explore other parts of our site or
                reach out to us directly for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Return Home
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
