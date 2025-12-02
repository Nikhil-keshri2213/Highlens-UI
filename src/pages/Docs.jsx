import React from "react";

const Docs = () => {
  return (
    <div className="min-h-screen w-full py-2 px-5 sm:px-10 text-white">
      <div className="backdrop-blur-sm bg-linear-to-br from-slate-500/30 via-black/20 to-gray-500/40 rounded-xl p-8 sm:p-12 max-w-5xl mx-auto border-dashed border border-white/30">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">HighLens Documentation</h1>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">1. Platform Overview</h2>
          <p className="text-gray-200 leading-relaxed">
            HighLens is a unified digital ecosystem designed to centralize every essential
            function of the photography and visual-creation industry. By integrating learning,
            services, marketplaces, collaboration, and community engagement into one scalable
            hub, HighLens enables creators, businesses, and consumers to operate efficiently
            without shifting across multiple platforms.
          </p>

          <p className="mt-4">The HighLens ecosystem is built on <strong>five core pillars</strong>:</p>

          <ul className="space-y-2 mt-3 list-disc pl-6">
            <li><strong>Blog</strong> – Knowledge, updates, insights, and industry trends</li>
            <li><strong>Marketplace</strong> – Hiring, rentals, buying & selling of gear, and artwork</li>
            <li><strong>Learn</strong> – Structured education, tutorials, and skill development</li>
            <li><strong>Build</strong> – Business tools, brand building, and portfolio development</li>
            <li><strong>Community</strong> – Creator interaction, networking, and support</li>
          </ul>

          <p className="mt-4">
            Each section works independently yet aligns cohesively to deliver a fully integrated
            creative infrastructure.
          </p>
        </section>

        <hr className="border-white/20 my-10" />

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">2. Platform Sections (Categorized)</h2>

          {/* BLOG */}
          <div className="mt-7">
            <h3 className="text-xl font-semibold mb-2">A. BLOG — Insights, Education & Industry Intelligence</h3>
            <p className="text-gray-200 leading-relaxed">
              The <strong>Blog</strong> serves as the official knowledge center of HighLens,
              delivering high-quality written and visual content for creators, learners, and professionals.
            </p>

            <h4 className="mt-4 font-semibold">Key Components</h4>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Educational Articles</strong> — Guides on photography, editing, lighting, etc.</li>
              <li><strong>Industry Trends</strong> — Market updates & new technologies</li>
              <li><strong>Case Studies</strong> — Real-world breakdowns</li>
              <li><strong>Gear Reviews</strong> — Cameras, lenses, software analysis</li>
              <li><strong>Announcements</strong> — Platform updates & events</li>
            </ul>

            <h4 className="mt-4 font-semibold">Purpose</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Build industry authority</li>
              <li>Inspire and educate creators</li>
              <li>Increase brand visibility and credibility</li>
            </ul>
          </div>

          <hr className="border-white/20 my-8" />

          {/* MARKETPLACE */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              B. MARKETPLACE — Hire, Rent, Buy & Sell, and Sell Art
            </h3>

            <p className="text-gray-200 leading-relaxed">
              The <strong>Marketplace</strong> is the commercial engine of HighLens, enabling
              secure and seamless transactions for photography services and products.
            </p>

            <h4 className="mt-4 font-semibold">1. Hire Photographers & Videographers</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verified professional profiles</li>
              <li>Transparent portfolios & pricing</li>
              <li>Secure booking workflows</li>
              <li>Multi-category service support</li>
            </ul>

            <h4 className="mt-4 font-semibold">2. Rent Gear & Equipment</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cameras, lenses, drones</li>
              <li>Lighting & studio equipment</li>
              <li>Real-time availability</li>
              <li>Damage protection & insurance</li>
            </ul>

            <h4 className="mt-4 font-semibold">3. Buy & Sell New & Used Gear</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Moderated listings</li>
              <li>Verified authentication</li>
              <li>Fraud-prevention workflows</li>
              <li>Price guidance</li>
            </ul>

            <h4 className="mt-4 font-semibold">4. Printed Art Marketplace</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell premium prints</li>
              <li>Custom sizes & formats</li>
              <li>Order management tools</li>
            </ul>

            <p className="mt-4">All marketplace features are designed for transparency and security.</p>
          </div>

          <hr className="border-white/20 my-8" />

          {/* LEARN */}
          <div>
            <h3 className="text-xl font-semibold mb-2">C. LEARN — Structured Education Ecosystem</h3>
            <p className="text-gray-200">
              The <strong>Learn</strong> section provides structured education for every skill level.
            </p>

            <h4 className="mt-4 font-semibold">Learning Categories</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Photography fundamentals</li>
              <li>Composition & lighting</li>
              <li>Videography & filmmaking</li>
              <li>Editing: Lightroom, Photoshop, DaVinci</li>
              <li>Camera handling & technical skills</li>
              <li>Niche specializations</li>
            </ul>

            <h4 className="mt-4 font-semibold">Content Formats</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Learning paths</li>
              <li>Recorded lessons</li>
              <li>Tutorials + resources</li>
              <li>Certifications</li>
              <li>AI-guided learning</li>
            </ul>
          </div>

          <hr className="border-white/20 my-8" />

          {/* BUILD */}
          <div>
            <h3 className="text-xl font-semibold mb-2">D. BUILD — Creator Growth & Business Tools</h3>
            <p className="text-gray-200">
              The <strong>Build</strong> section equips creators with tools to grow their business and brand.
            </p>

            <h4 className="mt-4 font-semibold">Key Tools</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Portfolio Builder</strong> — Showcase your best work</li>
              <li><strong>Studio Manager</strong> — Clients, bookings, and invoicing</li>
              <li><strong>Brand Kit</strong> — Logos, colors, templates</li>
              <li>
                <strong>AI Tools</strong>
                <ul className="pl-6 list-disc space-y-1">
                  <li>Keyword tagging</li>
                  <li>Portfolio curation</li>
                  <li>Photo suggestions</li>
                  <li>Pricing automation</li>
                </ul>
              </li>
              <li>
                <strong>Business Dashboard</strong>
                <ul className="pl-6 list-disc space-y-1">
                  <li>Leads</li>
                  <li>Analytics</li>
                  <li>Performance metrics</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr className="border-white/20 my-8" />

          {/* COMMUNITY */}
          <div>
            <h3 className="text-xl font-semibold mb-2">E. COMMUNITY — Network of Connected Creators</h3>
            <p className="text-gray-200">
              The <strong>Community</strong> provides networking, collaboration, and learning together.
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Discussion forums</li>
              <li>Q&A support spaces</li>
              <li>Collaboration requests</li>
              <li>Creator groups & teams</li>
              <li>Events & workshops</li>
            </ul>
          </div>
        </section>

        <hr className="border-white/20 my-10" />

        {/* Technical Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">3. Technical Architecture (High-Level)</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cloud-Native & Scalable Infrastructure</strong></li>
            <li><strong>API-Driven Modular Architecture</strong></li>
            <li><strong>High-Security Authentication (RBAC, 2FA)</strong></li>
            <li><strong>Integrated Payment Systems (Escrow, Wallet)</strong></li>
            <li><strong>AI-Powered Search & Recommendations</strong></li>
            <li><strong>Real-Time Inventory & Booking Systems</strong></li>
          </ul>
        </section>

        <hr className="border-white/20 my-10" />

        {/* Target Audience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">4. Target Audience</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Photographers & videographers</li>
            <li>Creative studios & agencies</li>
            <li>Learners & educators</li>
            <li>Gear owners & retailers</li>
            <li>Hobbyists</li>
            <li>Businesses needing creative support</li>
          </ul>
        </section>

        <hr className="border-white/20 my-10" />

        {/* Business Value */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Business Value</h2>
          <p className="text-gray-200">HighLens provides an all-inclusive ecosystem that:</p>

          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Reduces fragmentation</li>
            <li>Enhances productivity</li>
            <li>Expands earning opportunities</li>
            <li>Supports long-term creator growth</li>
            <li>Delivers unified user experience</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Docs;
