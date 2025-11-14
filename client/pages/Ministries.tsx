import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Music, Heart, BookOpen, Zap, Home } from "lucide-react";

export default function Ministries() {
  const ministries = [
    {
      name: "Youth Ministry",
      icon: Zap,
      description:
        "Empowering young believers to grow in faith, build meaningful relationships, and discover their purpose in Christ.",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Worship Ministry",
      icon: Music,
      description:
        "Creating an atmosphere of authentic worship through contemporary music, prayer, and the presence of the Holy Spirit.",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Outreach Ministry",
      icon: Heart,
      description:
        "Reaching our community with compassion through service, evangelism, and practical help to those in need.",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Children's Ministry",
      icon: Home,
      description:
        "Creating a safe, nurturing environment where children learn about Jesus, build friendships, and grow in God's love.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Women's Ministry",
      icon: BookOpen,
      description:
        "Supporting women in their spiritual journey through Bible studies, prayer groups, and mentorship opportunities.",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Men's Ministry",
      icon: Users,
      description:
        "Challenging men to be strong leaders in their families and communities through discipleship and fellowship.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover the different ways you can grow, connect, and serve in our
            church community.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={ministry.name}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden group"
                >
                  <div
                    className={`bg-gradient-to-br ${ministry.color} h-32 flex items-center justify-center`}
                  >
                    <Icon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {ministry.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {ministry.description}
                    </p>
                    <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center gap-2">
                      Learn More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to serve, grow, or connect with others, we
              have a ministry for you.
            </p>
            <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Ministry Leader
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
