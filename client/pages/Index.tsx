import { Link } from "react-router-dom";
import { Play, Heart, Users, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/13963611/pexels-photo-13963611.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Welcome to Redeemed Gospel Church
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                A place of worship, community, and transformation. Join us as we
                celebrate faith, build relationships, and make a kingdom impact
                in our city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                  Join Us This Sunday
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/sermons"
                  className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Watch Sermons
                  <Play className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-12 text-center">
                  <div className="text-6xl mb-4">✝</div>
                  <p className="text-xl font-semibold text-white">
                    Faith, Fellowship & Freedom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To proclaim the Gospel of Jesus Christ, disciple believers, and
              engage in compassionate outreach to transform lives and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Love & Compassion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to loving God and serving our community with
                genuine compassion and generosity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Biblical Foundation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are grounded in God's Word and committed to teaching and
                living out biblical truth in every aspect of our lives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We equip our members to serve Jesus and reach our city with
                hope, help, and the message of redemption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the different ways you can grow, connect, and serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {["Youth", "Worship", "Outreach"].map((ministry) => (
              <div
                key={ministry}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-600"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {ministry} Ministry
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Growing together in faith and service.
                </p>
                <span className="text-red-600 font-semibold text-sm">
                  Learn More →
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Explore All Ministries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">1000+</div>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">6</div>
              <p className="text-gray-300">Ministry Groups</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">50+</div>
              <p className="text-gray-300">Monthly Events</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">Lives</div>
              <p className="text-gray-300">Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Redemption?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're new to faith or deepening your walk with Christ,
              we'd love to welcome you home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                Join Us Sunday
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
