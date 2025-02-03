import React from "react";

const Discover = () => {
  // Sample ecosystem data - replace with your actual data
  const ecosystemStats = [
    { label: "Total Value Locked", value: "$0" },
    { label: "Daily Active Addresses", value: "0" },
    { label: "Projects Built", value: "2" },
  ];

  const categories = [
    {
      title: "DeFi",
      description: "Decentralized finance applications built on Dharitri",
      projects: [
        {
          name: "RewaSwap",
          description: "Decentralized exchange for Dharitri tokens",
          icon: "/api/placeholder/48/48",
        },
        {
          name: "RewaPad",
          description: "Launchpad for new Dharitri projects",
          icon: "/api/placeholder/48/48",
        },
      ],
    },
    {
      title: "NFTs & Gaming",
      description: "Digital collectibles and blockchain gaming",
      projects: [
        {
          name: "Rewa Realms",
          description: "NFT marketplace and gaming platform",
          icon: "/api/placeholder/48/48",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover the Dharitri Ecosystem
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore the innovative projects and applications building the future
            of decentralized technology on Dharitri
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {ecosystemStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-8">{category.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={project.icon}
                        alt={project.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Build on Dharitri
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing ecosystem of developers and innovators building the
            future of blockchain technology
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Building
          </button>
        </div>
      </section>
    </div>
  );
};

export default Discover;
