import { useState, useEffect, use } from "react";

function Info() {
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Load from sessionStorage if available
  useEffect(() => {
    const savedPhoto = sessionStorage.getItem("profilePhoto");
    if (savedPhoto) setProfilePhoto(savedPhoto);
  }, []);

  var [close, setClose] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePhoto(imageURL);
      sessionStorage.setItem("profilePhoto", imageURL); // ✅ this is small (a temp blob URL)
    }
  };

  return (
    <div className="my-10 w-full">
      {close && (
        <div className="w-[26%] absolute left-[71%] top-[92px] text-[15px] text-white  p-3 mr-10 bg-[#1a2121]  rounded-lg border-l-4 border-l-[rgb(18,232,186)]">
          <p>This page is just for demo & doesn’t have any functionality connected yet  : )</p>
          <button onClick={()=> setClose(false)} className="text-[red] font-semibold text-end hover:underline hover:cursor-pointer absolute right-[14px] bottom-3">Close</button>
        </div>)
      }

      <h1 className="text-2xl font-bold px-5">📝 General Info</h1>

      <div className="md:px-10 px-8 md:py-3 py-5 w-full">
        <div className="bg-[#1a2121] px-5 py-6 rounded-lg shadow-md my-3">
          <h3 className="text-lg font-semibold mb-3"> Profile</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
            <div className="w-32 h-32 mb-3 sm:mb-0 relative">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full text-center rounded-full flex items-center justify-center text-sm text-gray-400  bg-[rgb(38,41,41)]">
                  Upload<br />NewProfile
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full sm:w-auto cursor-pointer 
              file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 
              file:text-sm file:bg-[rgb(18,232,186)] file:text-black hover:file:bg-[rgb(14,189,151)]"
            />
          </div>
        </div>

        {/* Username & Language Section */}
        <div className="flex flex-col lg:flex-row gap-[13px] md:gap-5 min-h-full">

          {/* Username Edit */}
          <div className="flex-1 bg-[#1a2121] px-6 py-10 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 ">👤 Username & Edit Profile</h3>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value="Chozhan"
                className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-500"
                readOnly
              />
              <button className="bg-[rgb(18,232,186)] hover:bg-[rgb(14,189,151)] text-black px-4 py-2 rounded whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex-1 bg-[#1a2121] px-6 py-10 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">🌐 Language</h3>
            <select className="bg-[rgb(38,41,41)] text-white px-4 py-2 rounded w-full">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
