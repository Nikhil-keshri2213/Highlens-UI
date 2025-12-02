export default function About() {
  return (
    <div className="min-h-screen w-full py-2 px-5 sm:px-10 text-white">
      <div className="backdrop-blur-sm bg-linear-to-br from-slate-500/30 via-black/20 to-gray-500/40 border-dashed border border-white/30 rounded-xl p-8 sm:p-12 max-w-5xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">About HighLens</h1>

        {/* Who We Are */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-200 leading-relaxed">
            HighLens is a comprehensive photography ecosystem designed to transform how
            creators learn, work, earn, and connect. We unify hiring, equipment access,
            education, community engagement, and creator-centric business tools into a
            single next-generation platform.
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Our mission is simple:
            <br />
            <strong className="text-white">
              Empower every visual storyteller with the tools, opportunities, and community
              they need to succeed.
            </strong>
          </p>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Vision */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-200 leading-relaxed">
            To become the world’s most complete digital home for photographers and creators—
            where learning, creativity, commerce, and collaboration coexist seamlessly in
            one unified ecosystem.
          </p>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Democratize access to high-value photography resources</li>
            <li>Enable creators to build sustainable, long-term careers</li>
            <li>Bring transparency and efficiency to the photography marketplace</li>
            <li>Build a global creative community powered by technology and innovation</li>
          </ul>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Values / What We Stand For */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What We Stand For</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>
              <strong className="text-white">Innovation:</strong>  
              AI-driven tools that enhance productivity and creative workflow
            </li>
            <li>
              <strong className="text-white">Transparency:</strong>  
              Verified profiles, clear pricing, and secure operations
            </li>
            <li>
              <strong className="text-white">Accessibility:</strong>  
              Learning and tools designed for every skill level
            </li>
            <li>
              <strong className="text-white">Empowerment:</strong>  
              Growth-oriented features that support personal brand development
            </li>
            <li>
              <strong className="text-white">Community:</strong>  
              A supportive space where creators inspire and uplift each other
            </li>
          </ul>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Why HighLens Exists */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why HighLens Exists</h2>
          <p className="text-gray-200 leading-relaxed">
            The photography world is deeply fragmented—learning happens on one platform,
            equipment rentals on another, jobs elsewhere, and community scattered across
            multiple channels.  
            <br /><br />
            HighLens solves this fragmentation by bringing everything into one integrated,
            intelligent, and creator-focused ecosystem. This enables professionals, learners,
            and businesses to work more efficiently and collaboratively.
          </p>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Ecosystem */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Our Ecosystem</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>
              <strong className="text-white">Blog:</strong>  
              Insights, knowledge, inspiration, and industry news
            </li>
            <li>
              <strong className="text-white">Marketplace:</strong>  
              Hire, rent, buy, sell, and monetize creative output
            </li>
            <li>
              <strong className="text-white">Learn:</strong>  
              Structured educational tracks for all levels
            </li>
            <li>
              <strong className="text-white">Build:</strong>  
              Business and brand-building tools for creators
            </li>
            <li>
              <strong className="text-white">Community:</strong>  
              A global network of interconnected photographers and creators
            </li>
          </ul>
        </section>

        <hr className="border-white/20 my-8" />

        {/* Promise */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">The HighLens Promise</h2>
          <p className="text-gray-200 leading-relaxed">
            We don’t just provide tools—we provide a complete creative infrastructure built
            for growth, professionalism, and long-term success.  
            HighLens stands as the platform where talent meets opportunity, and where creators
            are empowered to build their future with clarity and confidence.
          </p>
        </section>

      </div>
    </div>
  );
}
