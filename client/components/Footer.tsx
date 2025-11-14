import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              Redeemed Gospel Church
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A dynamic community of believers dedicated to spreading the Gospel,
              discipling believers, and making a kingdom impact in our city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link
                  to="/sermons"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Sermons
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-500">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  456 Grace Avenue, Redemption City, RC 67890
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a
                  href="tel:+15559876543"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  (555) 987-6543
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:info@redeemedgospel.com"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  info@redeemedgospel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-red-500">
              Service Times
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold">Sunday Worship</p>
                  <p>8:00 AM & 10:30 AM</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold">Wednesday Service</p>
                  <p>7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Redeemed Gospel Church. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
