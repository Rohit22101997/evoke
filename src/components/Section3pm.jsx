<<<<<<< HEAD
"use client";
import React from "react";

const customColors = {
  "dark-bg": "#202020",
  "text-default": "#E0E0E0",
  "text-muted": "#A0A0A0",
  "accent-orange": "#FF8500",
};

const statsData = [
  { value: "100+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Good Reviews" },
];

const App = () => {
  const imageUrl =
    "/Images/s3pm.jpg";

  const Statistic = ({ value, label }) => (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <span
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none"
        style={{ color: customColors["accent-orange"] }}
      >
        {value}
      </span>
      <span
        className="text-xs sm:text-sm md:text-base uppercase tracking-wide font-semibold mt-1"
        style={{ color: customColors["text-muted"] }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="min-h-screen p-5 sm:p-8 md:p-12 font-sans"
      style={{ backgroundColor: customColors["dark-bg"] }}
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-2xl w-full">
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x600/101010/888?text=Image+Not+Available";
              }}
            />
          </div>

          {/* TEXT SECTION */}
          <div className="relative lg:col-span-2 flex flex-col md:grid md:grid-cols-3 gap-10">

            {/* Watermark */}
            <h2
              className="absolute inset-0 flex justify-center items-center text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] opacity-[0.05] font-black tracking-widest select-none pointer-events-none"
              style={{ color: customColors["text-default"] }}
            >
              EVOKE
            </h2>

            {/* MAIN CONTENT */}
            <div className="md:col-span-2 space-y-2 relative z-10">
              <div
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: customColors["accent-orange"] }}
              >
                
              </div>

              <div className="text-3xl pb-10 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Evoke Digital: Propelling Your Growth in the Digital World.
              </div>

              <div
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
                style={{ color: customColors["text-default"] }}
              >
                <span
                  className="float-left text-4xl sm:text-5xl md:text-6xl font-bold mr-3 leading-none"
                  style={{ color: customColors["accent-orange"] }}
                >
                  E
                </span>
                voke Digital is your dedicated partner in performance-driven
                growth. We move beyond vanity metrics, focusing solely on
                strategies that generate measurable results, high-value leads,
                and direct ROI. Our team blends data science with creative
                execution to ensure every dollar delivers scalable success.
              </div>
            </div>

            {/* QUOTE SECTION */}
            <div className="relative z-10 space-y-5 md:space-y-8">
              <p
                className="text-base sm:text-lg md:text-xl italic font-medium"
                style={{ color: customColors["text-default"] }}
              >
                "Lift your business to new heights with our digital marketing
                services"
              </p>

              

              <a
                href="#"
                className="inline-flex items-center text-sm sm:text-base md:text-lg font-medium group "
                style={{ color: "orange" }}
                onClick={(e) => e.preventDefault()}
              >
                Optimize My Advertisement
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="w-full border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-5 justify-between">
            {statsData.map((stat) => (
              <Statistic key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
=======
"use client";
import React from "react";

const customColors = {
  "dark-bg": "#202020",
  "text-default": "#E0E0E0",
  "text-muted": "#A0A0A0",
  "accent-orange": "#FF8500",
};

const statsData = [
  { value: "100+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Good Reviews" },
];

const App = () => {
  const imageUrl =
    "/Images/s3pm.jpg";

  const Statistic = ({ value, label }) => (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <span
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none"
        style={{ color: customColors["accent-orange"] }}
      >
        {value}
      </span>
      <span
        className="text-xs sm:text-sm md:text-base uppercase tracking-wide font-semibold mt-1"
        style={{ color: customColors["text-muted"] }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div
      className="min-h-screen p-5 sm:p-8 md:p-12 font-sans"
      style={{ backgroundColor: customColors["dark-bg"] }}
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-2xl w-full">
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x600/101010/888?text=Image+Not+Available";
              }}
            />
          </div>

          {/* TEXT SECTION */}
          <div className="relative lg:col-span-2 flex flex-col md:grid md:grid-cols-3 gap-10">

            {/* Watermark */}
            <h2
              className="absolute inset-0 flex justify-center items-center text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] opacity-[0.05] font-black tracking-widest select-none pointer-events-none"
              style={{ color: customColors["text-default"] }}
            >
              EVOKE
            </h2>

            {/* MAIN CONTENT */}
            <div className="md:col-span-2 space-y-2 relative z-10">
              <div
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: customColors["accent-orange"] }}
              >
                
              </div>

              <div className="text-3xl pb-10 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Evoke Digital: Propelling Your Growth in the Digital World.
              </div>

              <div
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
                style={{ color: customColors["text-default"] }}
              >
                <span
                  className="float-left text-4xl sm:text-5xl md:text-6xl font-bold mr-3 leading-none"
                  style={{ color: customColors["accent-orange"] }}
                >
                  E
                </span>
                voke Digital is your dedicated partner in performance-driven
                growth. We move beyond vanity metrics, focusing solely on
                strategies that generate measurable results, high-value leads,
                and direct ROI. Our team blends data science with creative
                execution to ensure every dollar delivers scalable success.
              </div>
            </div>

            {/* QUOTE SECTION */}
            <div className="relative z-10 space-y-5 md:space-y-8">
              <p
                className="text-base sm:text-lg md:text-xl italic font-medium"
                style={{ color: customColors["text-default"] }}
              >
                "Lift your business to new heights with our digital marketing
                services"
              </p>

              

              <a
                href="#"
                className="inline-flex items-center text-sm sm:text-base md:text-lg font-medium group "
                style={{ color: "orange" }}
                onClick={(e) => e.preventDefault()}
              >
                Optimize My Advertisement
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="w-full border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-5 justify-between">
            {statsData.map((stat) => (
              <Statistic key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
>>>>>>> 9a1f4c69a04e8ed813a0f35f875fa7e1c4b74a05
