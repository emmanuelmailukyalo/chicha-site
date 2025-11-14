import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for reaching out! We will get back to you soon."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        456 Grace Avenue
                        <br />
                        Redemption City, RC 67890
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">Phone</h3>
                      <a
                        href="tel:+15559876543"
                        className="text-red-600 hover:text-red-700 font-semibold"
                      >
                        (555) 987-6543
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <a
                        href="mailto:info@redeemedgospel.com"
                        className="text-red-600 hover:text-red-700 font-semibold"
                      >
                        info@redeemedgospel.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Times */}
                <div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">
                        Service Times
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>
                          <p className="font-semibold text-slate-900">
                            Sunday Worship
                          </p>
                          <p>8:00 AM & 10:30 AM</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            Wednesday Service
                          </p>
                          <p>7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Google Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Interest</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="membership">Membership</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
