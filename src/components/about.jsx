// components/About.jsx

function About() {
  return (
    <div>
      <div className="flex items-center my-2 ml-5 md:ml-10 mt-12 w-fit">
        <span className="bg-blue-400 rounded-md px-3 py-1 w-fit h-fit font-bold">i</span>
        <h2 className="text-2xl font-bold ml-2">  About</h2>
      </div>
      <div className="md:px-5 px-8 md:py-4 py-5 md:pb-0 pb-14">
        <div className="bg-[#1a2121]  text-white/85 rounded-lg  md:mx-5 mx-0 py-9 px-7 w-full md:w-[96.5%] text-justify">
          <p className="text-md pb-4">
            🌦 <span className="font-semibold">Weather App</span> provides real-time weather updates,
            including temperature, humidity, wind speed, and more — delivered via a clean, user-friendly interface.
          </p>
          <p className="text-md pb-4">
            🛠 This app was built using <span className="font-semibold">React</span> and styled with <span className="font-semibold">Tailwind CSS</span> for a fast, responsive experience.
          </p>
          <p className="text-md pb-4">
            🌍 City-Specific Weather Insights – Get real-time updates for any city you search, including detailed metrics like pressure, visibility, cloudiness, sunrise, and sunset timings.
          </p>
          <p className="text-md pb-4">
            📊 Discover More Cities – Explore weather conditions across multiple major cities worldwide, with concise cards showing local time, temperature, wind speed, and sky conditions at a glance.
          </p>

          <p className="text-sm text-gray-400 border-t border-gray-700 pt-8 text-center">
            © {new Date().getFullYear()} <span className="font-medium">Chozhan</span> - <br className="flex md:hidden" /> All rights reserved - <a href="/" className="text-blue-400 hover:underline">chozhan_weatherapp.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;