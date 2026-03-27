import React from "react";

const Clients = () => {
  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33ZxPQHqwpgHGmC5AP_K6IGbvF51ZSePjoQ&s",
    "https://5.imimg.com/data5/SELLER/Default/2021/6/FQ/XY/HD/3313909/radha-tmt-bars.jpg",
    "https://www.adityabirla.com/_next/image/?url=https%3A%2F%2Fwww.cms.adityabirla.com%2Fuploads%2FUltratech_acaeb26d3d.webp&w=1920&q=100",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112013/untitled-1_111.png?itok=_xbR4AgS",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1280px-Ultratech_Cement_Logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r0BWdV197inXwZXc8rhhDpCbVZWGSxgJiA&s",
  ];

  // Duplicate to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="relative py-6 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-white/85" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest block text-center">Trusted By</span>
        <h2 className="text-3xl font-bold text-center text-[#051614] mt-2 mb-2">
          Our Partners
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-6 text-sm leading-relaxed">
          We have associated with a wide range of high-profile clients. We invest
          more time to emphasis on how we can add value to our clients. We value
          association, ensures that there is full transparency, develop
          trustworthy relationships and delivers results.
        </p>

        {/* Sliding Logos Strip */}
        <div className="relative overflow-hidden">
          <div className="animate-slide flex items-center gap-12 whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-12 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-10 max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation Keyframes – add to your global CSS or use inline style */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
          display: inline-flex;
        }
        /* Pause animation on hover */
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Clients;