import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, DollarSign, TrendingUp } from "lucide-react";

export default function Giving() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Give</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Your generosity fuels our mission to spread the Gospel and impact
            lives.
          </p>
        </div>
      </section>

      {/* Giving Content */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Give Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Your Gift Makes a Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Local Outreach
                </h3>
                <p className="text-gray-600">
                  Supporting community programs, food drives, and assistance for
                  families in need.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Discipleship
                </h3>
                <p className="text-gray-600">
                  Funding Bible studies, mentorship programs, and spiritual
                  growth initiatives.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Global Missions
                </h3>
                <p className="text-gray-600">
                  Supporting missionaries and Gospel advancement in unreached
                  areas worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Giving Options */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Ways to Give
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Online Giving */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Online Giving
                </h3>
                <p className="text-gray-600 mb-6">
                  Secure online giving through our donation platform.
                </p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Give Online
                </button>
              </div>

              {/* PayPal */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  PayPal
                </h3>
                <p className="text-gray-600 mb-6">
                  Donate safely and securely using your PayPal account.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Donate via PayPal
                </button>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Bank Transfer
                </h3>
                <p className="text-gray-600 mb-6">
                  Arrange recurring or one-time bank transfers.
                </p>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-colors">
                  Bank Details
                </button>
              </div>
            </div>

            {/* Mobile Payment Option */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* M-Pesa */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  M-Pesa (Kenya)
                </h3>
                <p className="text-gray-600 mb-6">
                  Quick and easy mobile money donations using M-Pesa.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    To give via M-Pesa:
                  </p>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Go to M-Pesa menu</li>
                    <li>Select "Send Money"</li>
                    <li>Enter: 254XXXXXXXXXX</li>
                    <li>Enter amount and complete</li>
                  </ol>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors">
                  M-Pesa Instructions
                </button>
              </div>

              {/* In-Person */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-red-600 transition-colors p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  In Person
                </h3>
                <p className="text-gray-600 mb-6">
                  Give during our Sunday services or visit our office.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-700 font-semibold mb-2">
                    Church Office:
                  </p>
                  <p className="text-sm text-gray-600">
                    456 Grace Avenue, Redemption City, RC 67890
                  </p>
                  <p className="text-sm text-gray-600">
                    Mon - Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-12 border border-red-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Is my donation tax-deductible?
                </h3>
                <p className="text-gray-600">
                  Yes! Redeemed Gospel Church is a registered 501(c)(3)
                  non-profit organization. You will receive a tax receipt for
                  your records.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How will my gift be used?
                </h3>
                <p className="text-gray-600">
                  All contributions support our local ministry, discipleship
                  programs, community outreach, and global missions work.
                  Financial reports are available upon request.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Can I set up recurring donations?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Online giving and bank transfer options both
                  support recurring donations. Contact our office for details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Is my information secure?
                </h3>
                <p className="text-gray-600">
                  Yes. All online donations are processed through secure,
                  encrypted payment gateways. We never store your full payment
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
