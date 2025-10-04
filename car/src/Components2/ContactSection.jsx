import React, { useState } from 'react';
import Lap from '../assets/Parts/lap.jpg';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Submitted:', form);
      // Reset form
      setForm({ name: '', phone: '', description: '' });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white overflow-hidden shadow-xl min-h-[100vh] md:min-h-[60vh]">
      {/* Image */}
      <div className="w-full h-[300px] md:h-[350px] lg:h-auto lg:w-1/2">
        <img
          src={Lap}
          alt="Contact Support"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="border-l-8 border-red-500 pl-3">Get in Touch</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl">
          We’re here to help! Whether you're interested in booking a tour, learning more about our memberships, or have general inquiries, feel free to reach out. We’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-red-400'
                }`}
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-red-400'
                }`}
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              rows="6"
              value={form.description}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.description ? 'border-red-500 focus:ring-red-500' : 'focus:ring-red-400'
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-all"
          >
            Send My Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
