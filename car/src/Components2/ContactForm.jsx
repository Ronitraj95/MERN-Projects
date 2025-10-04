import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: 'Jane cooper',
    email: 'janecooper@gmail.com',
    mobile: '406555012012',
    pincode: '411047',
    city: 'Pune',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,12}$/;
    const pinRegex = /^\d{6}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(formData.mobile)) newErrors.mobile = 'Enter valid mobile number';
    if (!pinRegex.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('✅ Contact Details Saved Successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Contact Details</h2>

      <div>
        <label className="block text-sm text-gray-600">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-100 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm text-gray-600">Email ID</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-100 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm text-gray-600">Mobile Number</label>
        <div className="flex">
          <span className="p-2 bg-gray-100 rounded-l">+91</span>
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100 rounded-r"
          />
        </div>
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-sm text-gray-600">Pincode</label>
          <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>
        <div className="w-1/2">
          <label className="block text-sm text-gray-600">City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
      </div>

      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded mt-4">
        Save
      </button>
    </form>
  );
};

export default ContactForm;
