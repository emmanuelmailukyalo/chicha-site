import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Calendar } from "lucide-react";
import { useState } from "react";

export default function Sermons() {
  const [sermons] = useState([
    {
      id: 1,
      title: "The Power of Faith",
      date: "December 10, 2024",
      pastor: "Bishop Samuel Okonkwo",
      videoId: "placeholder1",
      thumbnail: "https://via.placeholder.com/400x225?text=Sermon+1",
    },
    {
      id: 2,
      title: "Walking in God's Purpose",
      date: "December 3, 2024",
      pastor: "Pastor Grace Mensah",
      videoId: "placeholder2",
      thumbnail: "https://via.placeholder.com/400x225?text=Sermon+2",
    },
    {
      id: 3,
      title: "Loving Your Neighbor",
      date: "November 26, 2024",
      pastor: "Pastor David Chen",
      videoId: "placeholder3",
      thumbnail: "https://via.placeholder.com/400x225?text=Sermon+3",
    },
    {
      id: 4,
      title: "Grace That Transforms",
      date: "November 19, 2024",
      pastor: "Bishop Samuel Okonkwo",
      videoId: "placeholder4",
      thumbnail: "https://via.placeholder.com/400x225?text=Sermon+4",
    },
  ]);

  const [selectedSermon, setSelectedSermon] = useState(sermons[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sermons</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Watch inspiring messages from our pastoral team to grow in your
            faith.
          </p>
        </div>
      </section>

      {/* Sermons Content */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-black rounded-xl overflow-hidden shadow-lg mb-6">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-white fill-white" />
                      </div>
                      <p className="text-white font-semibold mb-2">
                        {selectedSermon.title}
                      </p>
                      <p className="text-gray-400 text-sm">
                        YouTube Embed Placeholder
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        Video ID: {selectedSermon.videoId}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sermon Details */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  {selectedSermon.title}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span>{selectedSermon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">
                      {selectedSermon.pastor}
                    </span>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-gray-700">
                  <p>
                    Sermon notes and message outline will appear here. Download
                    PDF notes or audio version below.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Download Notes (PDF)
                  </button>
                  <button className="border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2 px-6 rounded-lg transition-colors">
                    Download Audio (MP3)
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon Playlist */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Recent Sermons
              </h3>
              <div className="space-y-4">
                {sermons.map((sermon) => (
                  <button
                    key={sermon.id}
                    onClick={() => setSelectedSermon(sermon)}
                    className={`w-full text-left rounded-lg overflow-hidden border-2 transition-all ${
                      selectedSermon.id === sermon.id
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex gap-3 p-3">
                      <div className="flex-shrink-0 w-16 h-12 bg-gray-200 rounded relative overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <Play className="w-4 h-4 text-gray-600 fill-gray-600" />
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-slate-900 text-sm line-clamp-2">
                          {sermon.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {sermon.pastor}
                        </p>
                        <p className="text-xs text-gray-500">{sermon.date}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Subscription Box */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-200 mt-8">
                <h4 className="font-bold text-slate-900 mb-3">
                  Never Miss a Sermon
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to get new sermons delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 text-sm"
                />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
