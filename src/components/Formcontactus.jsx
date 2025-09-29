"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d{10,}$/.test(formData.contact.replace(/\D/g, ''))) {
      newErrors.contact = 'Please enter a valid contact number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  setIsSubmitting(true);

  try {
    const res = await fetch('http://localhost:3002/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Something went wrong');

    setFormData({ name: '', email: '', contact: '', message: '' });
    alert('Message saved to database!');
  } catch (err) {
    alert(err.message);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Heading */}

      {/* Form Container */}
      <div className="w-full max-w-md">
        <div className="bg-gray-100 text-black p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white text-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white text-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white text-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ${
                  errors.contact ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your contact number"
              />
              {errors.contact && (
                <p className="text-red-400 text-sm mt-1">{errors.contact}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-white text-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 resize-vertical ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your message here..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-900 active:bg-gray-800 transform hover:scale-105'
              } focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
