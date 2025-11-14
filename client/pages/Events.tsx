import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:00 AM & 10:30 AM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship and powerful preaching.",
    },
    {
      title: "Midweek Service",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Prayer, worship, and community fellowship.",
    },
    {
      title: "New Members Class",
      date: "January 12, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Conference Room",
      description:
        "Learn about our church and get connected to community groups.",
    },
    {
      title: "Youth Conference",
      date: "February 22-24, 2025",
      time: "All Day",
      location: "Off-site Retreat Center",
      description: "3-day conference for youth focused on faith and purpose.",
    },
    {
      title: "Community Service Day",
      date: "March 8, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Various Locations",
      description: "Join our outreach team serving the community together.",
    },
    {
      title: "Annual Church Picnic",
      date: "April 20, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "City Park",
      description: "Family-friendly celebration with food, games, and fellowship.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join us for upcoming services, events, and gatherings throughout the
            year.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {event.date}
                        </p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center gap-2">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar CTA */}
          <div className="mt-12 bg-gradient-to-br from-red-50 to-slate-50 rounded-xl p-8 border border-red-200 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Want to stay updated?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Subscribe to our calendar or join our mailing list to get event
              notifications directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Subscribe to Calendar
              </button>
              <button className="border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2 px-6 rounded-lg transition-colors">
                Join Mailing List
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
