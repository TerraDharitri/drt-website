import React from "react";

const Partners = () => {
  const partners = [
    {
      category: "Technology Partners",
      items: [
        {
          name: "Partner 1",
          description: "Building innovative blockchain solutions",
          logo: "/api/placeholder/120/60",
        },
        {
          name: "Partner 2",
          description: "Leading blockchain infrastructure provider",
          logo: "/api/placeholder/120/60",
        },
        // Add more partners as needed
      ],
    },
    {
      category: "Financial Partners",
      items: [
        {
          name: "Partner 3",
          description: "Global financial services provider",
          logo: "/api/placeholder/120/60",
        },
        {
          name: "Partner 4",
          description: "Digital asset management platform",
          logo: "/api/placeholder/120/60",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mt-20">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Dharitri Ecosystem Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forces with industry leaders to build the future of blockchain
            technology. Discover how Dharitri and Rewa are transforming the
            digital landscape through strategic partnerships.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Global Partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5M+</h3>
              <p className="text-gray-600">Users Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      {partners.map((section, index) => (
        <section key={index} className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((partner, pIndex) => (
                <div
                  key={pIndex}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the Dharitri ecosystem and help shape the future of blockchain
            technology. We're always looking for innovative partners to
            collaborate with.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
