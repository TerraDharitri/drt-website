import React from "react";
import { ArrowRight, Users, Shield, Coins } from "lucide-react";

const Validators = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Secure Dharitri Network
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the network of validators helping to secure and decentralize
            the Dharitri blockchain while earning rewards
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
            Become a Validator
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Active Validators
              </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">3,200+</p>
            <p className="text-gray-600 mt-2">Securing the network</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Network Security
              </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">$2B+</p>
            <p className="text-gray-600 mt-2">Total value secured</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Coins className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Annual Rewards
              </h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">12%</p>
            <p className="text-gray-600 mt-2">Average APR</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Running a Validator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Earn consistent rewards for helping secure and maintain the
                Dharitri network through transaction validation
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support Decentralization
              </h3>
              <p className="text-gray-600">
                Play a crucial role in maintaining the network's
                decentralization and security
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Join the Community
              </h3>
              <p className="text-gray-600">
                Become part of an active community of validators and contribute
                to network governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Validator Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hardware Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• CPU: 8 cores / 16 threads</li>
                <li>• RAM: 32GB DDR4</li>
                <li>• Storage: 500GB SSD</li>
                <li>• Network: 100 Mbps symmetric link</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Staking Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Minimum stake: 2,500 REWA</li>
                <li>• Server uptime: 99.9%</li>
                <li>• Technical knowledge of node operation</li>
                <li>• Secure key management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Become a Validator?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the Dharitri network and start earning rewards while supporting
            blockchain decentralization
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Validators;
