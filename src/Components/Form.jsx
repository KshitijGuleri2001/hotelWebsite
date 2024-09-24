import React, { useState } from "react";
import axios from "axios";
import Modal from "../Pages/modal";
const Form = () => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        destination: '',
        checkIn: '',
        checkOut: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const { destination, checkIn, checkOut } = formData;
            if(!destination || !checkIn ||!checkOut){
                alert("Please fill the all input")
                return;
            }
            const response = await axios.post('http://localhost:7008/api/checkin', {
                Destination: destination,
                Check_In: checkIn,
                Check_Out: checkOut
            });
            console.log('API Response:', response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error.message);
            alert('Failed to submit form. Please try again.');
        }
    };
    return (
        <>
                                <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
            <div id="deals" className="max-w-[1140px] mx-auto w-full p-4">
                <div className="lg:flex lg:justify-between w-full items-center">
                    <div className="flex flex-col my-2 py-2">
                        <label>Destination</label>
                        <select
                            className="lg:w-[300px] md:w-full border rounded-md p-2"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                        >
                            <option value="goa">Select Destination</option>
                            <option value="west coast">West Coast</option>
                            <option value="maldives">Maldives</option>
                            <option value="Himachal Pardesh">Himachal Pardesh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Gugrat">Gugrat</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Bangok">Bangok</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                            <label>Check-In</label>
                            <input
                                className="border rounded-md p-2"
                                type="date"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                            <label>Check-Out</label>
                            <input
                                className="border rounded-md p-2"
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col my-2 p-2 w-full">
                        <label className="p-1">Search</label>
                        <div className="flex gap-3">
                            <button
                                className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={handleSubmit} 
                            >
                                Submit
                            </button>
                            <button
                                className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={() => setOpenModal(true)}  
                            >
                             Details
                            </button>
    
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Form;
