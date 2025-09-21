import heroBG from "../assets/heroBgPC.png"
import weatherImg from "../assets/cloud.png"
import locationRed from "../assets/placeholder.png"
import clockRed from "../assets/clock.png"

function HeroBanner(props) {

  var query = props.query
  var setQuery = props.setQuery
  var city = props.city
  var time = props.time
  var temp = props.temp
  var clouds = props.clouds
  var error = props.error
  var handleSearch = props.handleSearch

  return (
    <div className="text-sm h-fit w-full bg-no-repeat bg-cover  bg-center rounded-b-[35px] md:rounded-b-none md:rounded-tr-[40px] md:rounded-br-[40px] md:w-2/5  md:h-[41vw] md:mt-2" style={{ border: "red 2px", backgroundImage: `url(${heroBG})` }}>

      <div className="w-full  px-7 py-4 bg-cover " style={{ border: "green  2px" }}>

        {/* search-box */}
        <div className="w-full mt-8 mb-6 flex justify-between items-center rounded-full border border-gray-300/50 bg-black/30 backdrop-blur-sm  md:mt-12" style={{ border: "2px red" }}>
          <div className="w-fit h-full flex items-center  px-6  py-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Enter a city here"
              className=" ml-4 placeholder-white/70  w-5/6 font-semibold text-[16px] md:text-lg bg-opacity-0 border-b-2  pb-1 text-center bg-[#5d8181] rounded-md  outline-none">

            </input>

          </div>
          <div onClick={handleSearch} className="w-fit h-11 mr-5  rounded-full px-[15px] py-[10px] border border-gray-300/50  backdrop-blur-sm hover:bg-white/10 hover:cursor-pointer transition">
            <p className="text-white font-semibold mt-[1px]">Check</p>
          </div>
        </div>

        {/* weather-card */}
        <div className="py- rounded-2xl border border-gray-300/50 bg-black/30 backdrop-blur-sm md:mt-16" style={{ border: "2px green" }}>
          <div className="flex justify-between py-8 pl-3 pr-7">
            <div className="flex">
              <img src={locationRed} className="w-6 h-6 mt-[5px]" alt="" />
              <p className="text-2xl font-semibold pl-[4px]">{city}</p>
            </div>
            <div className="flex mr-2">
              <img src={clockRed} className="w-5 h-5 mt-[8px]" alt="" />
              <p className="text-xs opacity-90 text-white font-bold pl-1 pt-[10px]" >{time}</p>
            </div>
          </div>

          <div className="flex py-10 pb-10 px-7 justify-evenly gap-16">
            <div className="flex flex-col items-center justify-center " >
              <h1 className=" w-fit h-fit text-2xl font-bold">
                {temp !== null ? ` ${temp}°C ` : "--"}
              </h1>
              <p className="pt-3 text-base">Sky: {clouds}</p>
              {error && <p className="text-sm text-red-500 mt-2 font-bold bg-red-100/40 py-1 px-2 rounded-md border-t-2 border-t-red-500">{error}</p>}
            </div>
            <img className="w-24 ml-7 pl-5" src={weatherImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;