import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ open, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [err, setErr] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await axios.get("http://localhost:7008/api/bookingDetails");
      setBookingDetails(response.data.result);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    if (open) {
      fetchDetails();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 '>
      <div onClick={(e) => e.stopPropagation()} className='max-w-screen-sm w-full bg-white shadow-lg rounded-lg'>

        <div className="bg-white h-[400px] shadow rounded-lg border overflow-auto  ">
            
          <p className='text-right top-0 right-0 px-5 p-3 cursor-pointer' onClick={onClose}>X</p>
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
          {bookingDetails.map((booking,item) => (
      <div class="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-24">
      <div class="bg-gray-100 ">
          <h2 class="text-lg font-medium text-gray-800">Booking Details</h2>
      </div>
      <div class="px-4 py-5 sm:p-6">
          <div class="flex flex-col items-start justify-between mb-6">
              <span class="text-sm font-medium text-gray-600">Destination</span>
              <span class="text-lg font-medium text-gray-800">{booking.Destination}</span>
          </div>
        
          <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col items-start">
                  <span class="text-sm font-medium text-gray-600">Check in</span>
                  <span class="text-lg font-medium text-gray-800">{booking.Check_in}</span>
              </div>
              <div class="flex flex-col items-start">
              <span class="text-sm font-medium text-gray-600">Check out</span>
                  <span class="text-lg font-medium text-gray-800">{booking.Check_out}</span>
              </div>
          </div>
      </div>
  </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Modal;
