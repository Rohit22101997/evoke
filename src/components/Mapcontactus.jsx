import React from 'react';

const YOUR_ADDRESS = {
  street: "123 Main Street",
  city: "Anytown, CA 90210",
  phone: "(555) 555-1212",
  email: "contact@example.com",
};

// **IMPORTANT:** Replace the 'YOUR_EMBED_MAP_URL' string below 
// with the actual 'src' URL from the Google Maps iframe code you copied.

const YOUR_EMBED_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.748301548171!2d-118.35858632349195!3d34.05836867315579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b97f0a996f5b%3A0xf60d2e85a6a666e1!2sGrauman's%20Chinese%20Theatre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export default function MapAddress() {
  return (
    <section className="container mx-auto p-4 md:p-8">
      {/* Container for Map and Address Info, styled for medium screens and up */}
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Map Section */}
        <div className="w-full md:w-2/3 h-96">
          <iframe
            src={YOUR_EMBED_MAP_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location Map"
          ></iframe>
        </div>

        {/* Address and Contact Information Component */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            Contact Us
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-indigo-600 mb-1">
              Our Address
            </h3>
            <p className="text-gray-600">{YOUR_ADDRESS.street}</p>
            <p className="text-gray-600">{YOUR_ADDRESS.city}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-indigo-600 mb-1">
              Phone
            </h3>
            <p className="text-gray-600">
              <a href={`tel:${YOUR_ADDRESS.phone}`} className="hover:text-indigo-800">
                {YOUR_ADDRESS.phone}
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-indigo-600 mb-1">
              Email
            </h3>
            <p className="text-gray-600">
              <a href={`mailto:${YOUR_ADDRESS.email}`} className="hover:text-indigo-800">
                {YOUR_ADDRESS.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}