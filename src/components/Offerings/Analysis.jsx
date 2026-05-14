import React from "react";

const Analysis = () => {
  return (
    <div className="relative py-24 lg:py-32 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950" />

      {/* GLOWS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
            <span className="text-sm tracking-wide text-white/90">
              Business Capability Offering
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Business Analysis & Requirements Engineering
          </h2>

          <p className="mt-6 text-white/75 leading-8 text-base sm:text-lg">
            We help organizations define clear business requirements, improve
            stakeholder alignment, and ensure project success through structured
            analysis and documentation practices.
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-14 group relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2">
          
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-400/10 blur-3xl rounded-full" />

          {/* TITLE BLOCK */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white">
              Core Capability Focus
            </h3>

            <p className="mt-4 text-white/75 leading-8">
              Strong business analysis ensures that projects are built on
              accurate, well-defined, and aligned requirements that reflect
              stakeholder needs and organizational strategy.
            </p>
          </div>

          {/* PILLS */}
          <div className="relative z-10 flex flex-wrap gap-3 mt-8">
            {[
              "Requirements",
              "Stakeholders",
              "Analysis",
              "Documentation",
              "Value Delivery",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>

          {/* OPTIONAL EXTRA SECTION */}
          <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold text-lg">
                Requirement Gathering
              </h4>
              <p className="mt-3 text-white/70 text-sm leading-7">
                Capture, validate, and structure business needs using proven
                elicitation techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold text-lg">
                Stakeholder Alignment
              </h4>
              <p className="mt-3 text-white/70 text-sm leading-7">
                Ensure all stakeholders share a unified understanding of project
                goals and deliverables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold text-lg">
                Process Analysis
              </h4>
              <p className="mt-3 text-white/70 text-sm leading-7">
                Evaluate current workflows to identify gaps, inefficiencies, and
                improvement opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold text-lg">
                Documentation Excellence
              </h4>
              <p className="mt-3 text-white/70 text-sm leading-7">
                Deliver clear, structured, and actionable documentation for
                successful project execution.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-10 text-center">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium hover:opacity-90 transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;