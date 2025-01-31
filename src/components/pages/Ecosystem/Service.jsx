import React from "react";
import { ArrowUpRight } from "lucide-react";

const Service = () => {
  const services = [
    {
      category: "Staking Providers",
      description:
        "Delegate your REWA tokens to trusted validators and earn rewards",
      items: [
        {
          name: "Dharitri Staking",
          description: "Official staking platform for Dharitri Network",
          link: "#",
        },
        {
          name: "Rewa Validators",
          description: "Professional validator services for the ecosystem",
          link: "#",
        },
      ],
    },
    {
      category: "Payment Providers",
      description: "Integration solutions for merchants and businesses",
      items: [
        {
          name: "DharitriPay",
          description: "Complete payment solution for blockchain transactions",
          link: "#",
        },
        {
          name: "Rewa Gateway",
          description: "Enterprise-grade payment processing",
          link: "#",
        },
      ],
    },
    {
      category: "Infrastructure Providers",
      description: "Essential infrastructure services for the network",
      items: [
        {
          name: "Dharitri Nodes",
          description: "Dedicated node infrastructure services",
          link: "#",
        },
        {
          name: "Rewa Cloud",
          description: "Cloud solutions for blockchain applications",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Service Providers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the ecosystem of trusted service providers that help power
            the Dharitri Network
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-gray-600 mb-8">{category.description}</p>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <a key={itemIdx} href={item.link} className="block group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight className="text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Become a Service Provider
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Dharitri ecosystem and help build the future of blockchain
            technology
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;
