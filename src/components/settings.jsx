import React, { useState } from 'react';

function Settings() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [unit, setUnit] = useState('Celsius');
  const [defaultLocation, setDefaultLocation] = useState('Chennai');
  const [password, setPassword] = useState('');

  var [close, setClose] = useState(false)

  return (
    <div className="text-white mx-0 md:mx-5 md:pt-0 pt-6 md:pb-0 my-5 md:my-0">
      {close && (
        <div className="w-[26%] absolute left-[71%] top-[92px] text-[15px] text-white  p-3 mr-10 bg-[#1a2121]  rounded-lg border-l-4 border-l-[rgb(18,232,186)]">
          <p>This page is just for demo & doesn’t have any functionality connected yet  : )</p>
          <p onClick={()=>{setClose(false)}} className="text-[red] font-semibold text-end hover:underline hover:cursor-pointer absolute right-[14px] bottom-3">Close</p>
        </div>)
      }
      <h2 className="text-2xl font-bold mb-4 ml-4">🛠️ Settings</h2>

      <div className="flex gap-7  pt-4 md:pt-0 px-8 md:px-5 flex-wrap ">

        {/* Theme Toggle */}
        <div className="bg-[#1a2121] w-[100%] md:w-[45%] flex flex-col flex-grow py-7 px-4 rounded-lg shadow-md md:py-10">
          <h3 className="text-lg font-semibold mb-2">⚙️ Theme Toggle</h3>
          <button
            className={`px-4 py-2 rounded transition font-semibold ${isDarkMode ? 'bg-[rgb(18,232,186)] text-[rgb(38,41,41)]' : 'bg-[rgb(18,232,186)] text-[rgb(38,41,41)]'}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? 'Dark Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Account & Privacy */}
        <div className="bg-[#1a2121] w-[100%] md:w-[45%] flex flex-col flex-grow py-7 px-4 rounded-lg shadow-md md:py-10">
          <h3 className="text-lg font-semibold mb-2">🔐 Account & Privacy</h3>
          {/* <label className="block mb-1">Change Password</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full focus:outline-none"
            placeholder="Enter new password"
          />
        </div>

        {/* Default Location */}
        <div className="bg-[#1a2121] w-[100%] md:w-[45%] flex flex-col flex-grow py-7 px-4 rounded-lg shadow-md md:py-12">
          <h3 className="text-lg font-semibold mb-2">📍 Default Location</h3>
          <input
            type="text"
            value={defaultLocation}
            // onChange={(e) => setDefaultLocation(e.target.value)}
            className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full focus:outline-none"
            placeholder="Enter your location"
          />
        </div>

        {/* Temperature Unit */}
        <div className="bg-[#1a2121] w-[100%] md:w-[45%] flex flex-col flex-grow py-7 px-4 rounded-lg shadow-md md:py-12">
          <h3 className="text-lg font-semibold mb-2">🌡 Temperature Unit</h3>
          <select
            className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="Celsius">Celsius (°C)</option>
            {/* <option value="Fahrenheit">Fahrenheit (°F)</option> */}
          </select>
        </div>


      </div>
    </div>
  );
}

export default Settings;
