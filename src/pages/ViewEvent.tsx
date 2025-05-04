import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewEvent = () => {
  const navigate = useNavigate()
  return (
    <div className="mx-auto px-4 sm:px-12 lg:px-10 max-w-screen-xl">
    <div className="flex items-center p-4">
      <button
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        onClick={() => navigate('/dashboard')}
      >
        ← Back
      </button>
      </div>
    <div className="flex mt-5 justify-between items-start p-4 bg-white shadow-md rounded-md">
      {/* Left: Product Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
        <p className="text-gray-600 text-sm mt-1">
          This is some brief information about the product, such as category, price, or status.
        </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Share
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
          Edit
        </button>
      </div>
    </div>


    <div className="flex flex-col sm:flex-row gap-6 p-6">
      {/* Left: Card (40%) */}
      <div className="w-full sm:w-2/5 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h2>

        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Event:</span> <span>Annual Meetup</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span> <span>2025-06-01</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Time:</span> <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Location:</span> <span>New York City</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Access Code:</span> <span>ABCD1234</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Photos:</span> <span>12</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Guests:</span> <span>54</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Created:</span> <span>2025-04-25</span>
          </div>
        </div>

        {/* Delete Button */}
        <div className="pt-6">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>

      {/* Right: Images (60%) */}
      <div className="w-full sm:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <img
          src="/images/image-1.jpg"
          alt="Event 1"
          className="w-full h-40 object-cover rounded-md"
        />
        <img
          src="/images/image-1.jpg"
          alt="Event 2"
          className="w-full h-40 object-cover rounded-md"
        />
        <img
          src="/images/image-1.jpg"
          alt="Event 3"
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
    </div>
    </div>
  );
};

export default ViewEvent;
