import React from "react";
import { ArrowUpRight } from "lucide-react";

const Grants = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Growth Games on Dharitri
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a new era of gaming where play meets opportunity. Join the
            Rewa ecosystem and experience gaming innovation at its finest.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Start Building
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <ArrowUpRight className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rapid Development</h3>
            <p className="text-gray-600">
              Build and deploy games quickly with our comprehensive toolset and
              developer-friendly environment.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
              <ArrowUpRight className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Scalable Infrastructure
            </h3>
            <p className="text-gray-600">
              Leverage Dharitri's high-performance blockchain for seamless
              gaming experiences.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
              <ArrowUpRight className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reward Systems</h3>
            <p className="text-gray-600">
              Implement engaging reward mechanisms using Rewa tokens and NFTs.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">$100M+</p>
              <p className="text-gray-600">Total Value Locked</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">1M+</p>
              <p className="text-gray-600">Active Players</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">500+</p>
              <p className="text-gray-600">Games Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div
                key={game}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Game Title {game}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience the next level of blockchain gaming with our
                    featured titles.
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl mb-8">
            Join the Dharitri ecosystem and create the next generation of
            blockchain games.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Start Building
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Read Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grants;
