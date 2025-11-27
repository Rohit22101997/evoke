
import react from 'react';

export default function Section6cm() {
  return (
    <section className="flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] 
                        bg-gray-100 py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-4xl mx-auto text-center md:text-left"> {/* Centralized and limited width */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-normal leading-tight text-gray-900">
          Empowering Businesses with{' '}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text font-medium">
            AI-driven
          </span>
          <br className="sm:hidden" /> {/* Optional line break on small screens */}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text font-medium">
            marketing solutions
          </span> {' '}
          
          to boost
          <br/>
          
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text font-medium">
            engagement, drive conversions
          </span>{' '}
          and unlock new levels of growth and success.
        </h1>
      </div>
    </section>
  );
}