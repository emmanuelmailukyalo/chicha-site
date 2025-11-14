import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";

export default function About() {
  const pastors = [
    {
      name: "Bishop Samuel Okonkwo",
      title: "Senior Pastor",
      bio: "With over 20 years of pastoral ministry, Bishop Okonkwo leads Redeemed Gospel Church with vision and dedication to biblical teaching.",
    },
    {
      name: "Pastor Grace Mensah",
      title: "Associate Pastor",
      bio: "Pastor Grace brings warmth and wisdom to our congregational care and discipleship programs.",
    },
    {
      name: "Pastor David Chen",
      title: "Youth & Young Adults Pastor",
      bio: "Passionate about mentoring the next generation, Pastor David oversees all youth ministry initiatives.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Learn about our church's story, mission, and the leadership that
            guides us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Church History */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Redeemed Gospel Church was founded with a simple yet powerful
                  vision: to create a place where people could experience the
                  transforming power of Jesus Christ. What started as a small
                  gathering of believers in our community has grown into a
                  thriving congregation of over 1,000 members.
                </p>
                <p>
                  Our church is built on the foundation of God's Word, vibrant
                  worship, and authentic community. We believe that the Gospel
                  has the power to redeem, restore, and revolutionize lives.
                  Every ministry, every program, and every service we offer is
                  designed to help our members grow deeper in their faith and
                  become more effective servants of Christ.
                </p>
                <p>
                  Today, we continue to expand our impact through local outreach
                  programs, discipleship initiatives, and global missions work.
                  We remain committed to our mission of proclaiming Christ,
                  discipling believers, and transforming our community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-slate-50 p-8 rounded-2xl border-2 border-red-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-red-600 text-sm uppercase tracking-widest mb-2">
                      Founded
                    </h3>
                    <p className="text-2xl font-bold text-slate-900">1995</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 text-sm uppercase tracking-widest mb-2">
                      Members
                    </h3>
                    <p className="text-2xl font-bold text-slate-900">1000+</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 text-sm uppercase tracking-widest mb-2">
                      Ministries
                    </h3>
                    <p className="text-2xl font-bold text-slate-900">6 Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be a beacon of hope in our community, where people encounter
                Jesus Christ, experience His transforming grace, and are
                empowered to fulfill their God-given purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To proclaim the Gospel of Jesus Christ, disciple believers in
                biblical truth, and engage in compassionate outreach to
                transform lives and communities.
              </p>
            </div>
          </div>

          {/* Pastoral Leadership */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 flex items-center gap-3">
              <Users className="w-8 h-8 text-red-600" />
              Pastoral Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pastors.map((pastor) => (
                <div
                  key={pastor.name}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-slate-100 to-red-50 h-40 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-300 opacity-50">
                      ✝
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {pastor.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-4">
                      {pastor.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pastor.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 italic">
              [Pastor photos and detailed bios to be added]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
