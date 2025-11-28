import React from 'react';

// Custom Tailwind colors to mimic the dark, glowing effect
const customColors = {
  'dark-bg': '#101010',
  'card-bg': '#1f1f1f',
  'accent-orange': '#ff5a1f',
  'accent-red': '#c4281f',
};

// Data mirroring the structure of the image content
const metricsData = {
  main: {
    numbers: ['80', '90', '~ 100'],
    label: 'ЗАВЕРШЕНО В СРОК',
    description: 'Наш департамент использует передовые практики, направленные на улучшение качества процессов и минимизацию проблем. Мы постоянно работаем над автоматизацией оценки и поиском ошибок.'
  },
  secondary: [
    { value: '1235', label: 'Проработанных инцидентов' },
    { value: '365', label: 'Дней без критичных сбоев' },
  ],
};

const App = () => {
  const { main, secondary } = metricsData;

  // Component for the smaller metric cards
  const SecondaryMetricCard = ({ value, label }) => (
    <div className="p-8 rounded-xl shadow-xl bg-card-bg transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent-orange/10 h-full">
      <div
        className="text-[4rem] md:text-[5rem] font-extrabold leading-none"
        style={{ color: customColors['accent-orange'] }} // Removed textShadow
      >
        {value}
      </div>
      <p className="text-white/70 mt-3 text-lg font-medium">
        {label}
      </p>
    </div>
  );

  return (
    <div
      className="min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans"
      style={{ backgroundColor: customColors['dark-bg'] }}
    >
      <div
        className="w-full max-w-6xl rounded-2xl p-1 sm:p-2 relative overflow-hidden"
        style={{
          // Subtle outer glow/border effect - keeping this for now unless you want it removed too
          background: `linear-gradient(135deg, ${customColors['accent-red']}40, ${customColors['accent-orange']}40, transparent 60%)`,
        }}
      >
        <div className="bg-dark-bg p-6 md:p-10 rounded-xl space-y-8">

          {/* Top Section: Main Metric and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative overflow-hidden">
            {/* Background Red Glow/Gradient */}
            <div className="absolute inset-0 z-0 opacity-20" style={{
              background: `radial-gradient(circle 300px at 70% 0%, ${customColors['accent-red']} 0%, transparent 80%)`
            }}></div>

            {/* Left Side: Large Metric Numbers */}
            <div className="col-span-1 lg:col-span-2 flex items-start z-10 relative">
                <div className="flex-shrink-0">
                  <div className="flex flex-col text-white/50 font-extrabold text-right">
                    {/* The 80 and 90 are smaller and grayed out */}
                    <span className="text-4xl leading-[0.7]">{main.numbers[0]}</span>
                    <span className="text-6xl leading-[0.7] mt-3">{main.numbers[1]}</span>
                  </div>
                </div>

                <div className="ml-4 flex items-center">
                    <span className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-extrabold leading-none text-accent-orange relative"
                        style={{ color: customColors['accent-orange'] }}> {/* Removed textShadow */}
                        {main.numbers[2]}
                    </span>
                    <p className="text-lg uppercase font-semibold text-white/80 ml-4 mt-16 md:mt-24 w-28 md:w-auto">
                        {main.label}
                    </p>
                </div>
            </div>

            {/* Right Side: Description */}
            <div className="col-span-1 flex items-center p-4 lg:p-0 z-10">
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                {main.description}
              </p>
            </div>
          </div>

          {/* Divider Line (Optional - based on image) */}
          <div className="w-full h-px bg-white/10 my-4"></div>

          {/* Bottom Section: Secondary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {secondary.map((metric, index) => (
              <SecondaryMetricCard key={index} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Assuming Tailwind configuration setup is available in the Next.js project
// This ensures that the custom colors are interpreted correctly:
// We need to define them globally in a style tag for this single-file preview to work
const style = `
  .bg-dark-bg { background-color: ${customColors['dark-bg']}; }
  .bg-card-bg { background-color: ${customColors['card-bg']}; }
  .text-accent-orange { color: ${customColors['accent-orange']}; }
`;

// To make this component runnable in a single HTML file environment for previewing:
// In a real Next.js project, you would only export 'App'.
export default App;
// Note: In a true Next.js environment, the style block below would be handled by your global CSS config.
// For the single-file mandate, we include it here.

// If you were using this in a simple HTML/React sandbox environment, you would use this pattern:
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <style>{style}</style>
        <App />
    </>
);
*/