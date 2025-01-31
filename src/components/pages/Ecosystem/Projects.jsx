import React, { useState } from "react";
import { Search } from "lucide-react";
import { ArrowRight, Users, Code, Shield, Zap } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "DeFi",
    "NFT",
    "Gaming",
    "Tools",
    "Social",
    "Infrastructure",
    "Wallets",
  ];

  const projects = [
    {
      name: "DhariFi",
      category: "DeFi",
      description: "Decentralized exchange and liquidity protocol on Dharitri",
      image: "/api/placeholder/80/80",
      status: "Live",
    },
    {
      name: "RewaSwap",
      category: "DeFi",
      description: "Automated market maker for Rewa tokens",
      image: "/api/placeholder/80/80",
      status: "Live",
    },
    {
      name: "DhariNFT",
      category: "NFT",
      description: "NFT marketplace for digital collectibles",
      image: "/api/placeholder/80/80",
      status: "Live",
    },
    // Add more projects as needed
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const solutions = [
    {
      title: "Developer Tools",
      icon: <Code className="w-6 h-6" />,
      description:
        "Comprehensive development tools and SDKs for building on Dharitri",
      items: ["Smart Contract IDE", "Testing Framework", "Deployment Tools"],
    },
    {
      title: "Community",
      icon: <Users className="w-6 h-6" />,
      description:
        "Join the growing community of Dharitri developers and users",
      items: ["Developer Forum", "Discord Channel", "Local Meetups"],
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Enterprise-grade security solutions for Dharitri applications",
      items: ["Audit Tools", "Security Scanner", "Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover the Dharitri Ecosystem
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore the growing network of applications and projects building on
            Dharitri
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-12 h-12 rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <span className="text-sm text-blue-500">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.status}
                  </span>
                  <button className="px-4 py-2 text-sm text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Zap className="w-4 h-4 mr-2 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Build on Dharitri</h3>
              <p className="text-gray-600 mb-6">
                Get started with development using our comprehensive
                documentation, tutorials, and developer tools.
              </p>
              <button className="flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Join Rewa Community</h3>
              <p className="text-gray-600 mb-6">
                Connect with other developers, share ideas, and collaborate on
                projects in our growing community.
              </p>
              <button className="flex items-center text-blue-500 hover:text-blue-600 font-semibold">
                Join Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
