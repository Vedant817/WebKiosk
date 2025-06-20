import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [enrollmentNo, setenrollmentNo] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   
    axios.post('http://localhost:3001/login', {enrollmentNo, password})
      .then(result => {
        console.log(result)

        if (result.data === "Login successfull") {
          navigate("/main");
        }
        else if (result.data === "The password is incorrect") {
          alert('The password is incorrect');
        }
        else
          alert('Wrong credentials');
      })
      .catch(err => console.log(err))
  }

  const handleReset = () => {
    setenrollmentNo('');
    setpassword('');
  }

  const userType = ['Student', 'Parent']

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <nav className="bg-orange-400 text-center py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-white">
            Thapar University, Patiala
          </h1>
          <p className="text-sm md:text-base font-medium mb-1 text-orange-100">
            (Formerly known as Thapar Institute of Engineering and Technology)
          </p>
          <p className="text-white font-semibold text-sm md:text-base">
            WEB KIOSK(INTERNET) for Parent/Students
          </p>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {/* University Image */}
            <div className="flex-shrink-0 order-2 lg:order-1">
              <img
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-xl object-cover border-4 border-white"
                src="https://images.shiksha.com/mediadata/images/1584960645php8nt1Zj.jpeg"
                alt="Thapar University Campus"
              />
            </div>
            
            {/* Authentication Form */}
            <div className="flex-shrink-0 order-1 lg:order-2 w-full max-w-md">
              <div className="bg-white border-2 border-orange-400 p-6 md:p-8 rounded-xl shadow-2xl">
                <div className="bg-orange-400 text-white text-center rounded-lg font-semibold py-3 mb-6">
                  <h2 className="text-lg md:text-xl">Kiosk Authentication Screen</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Member Type */}
                  <div className="space-y-2">
                    <label htmlFor="member" className="block text-sm font-semibold text-gray-700">
                      Member Type
                    </label>
                    <select
                      name="member"
                      id="member"
                      className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-orange-400 focus:outline-none transition-colors"
                    >
                      {userType.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Enrollment Number */}
                  <div className="space-y-2">
                    <label htmlFor="enrollmentNo" className="block text-sm font-semibold text-gray-700">
                      Enrollment Number
                    </label>
                    <input
                      type="text"
                      id="enrollmentNo"
                      name="enrollmentNo"
                      value={enrollmentNo}
                      placeholder="Enter your enrollment number"
                      className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-orange-400 focus:outline-none transition-colors"
                      onChange={(e) => setenrollmentNo(e.target.value)}
                      required
                    />
                  </div>
                  
                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                      Password/PIN
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-orange-400 focus:outline-none transition-colors"
                      onChange={(e) => setpassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-orange-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      Submit
                    </button>
                    <button 
                      onClick={handleReset}
                      type="button"
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-gray-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-orange-400 text-white p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs md:text-sm leading-relaxed">
            <strong className="text-orange-100">Disclaimer:</strong> Thapar Institute of Engineering and Technology is not
            responsible for any inadvertent error that may have crept in the results
            being published on WEB KIOSK. The results published on net are for
            immediate information to the examinees. These cannot be treated as final
            result. Original Grade Cards have been issued by the Institute
            separately under the signature of Registrar and are authentic proof of
            academic performance.
          </div>
        </div>
      </footer> 
    </div>
  );
}

export default LoginPage;
