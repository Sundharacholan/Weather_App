import { Link, Outlet, useLocation } from "react-router-dom";

import heroBG from "./heroBgPC.png"

function Profile() {

  const location = useLocation();

  return (
    <div className="relative  font-sans text-sm flex md:text-base md:h-screen md:pt-[75px]">
      {/* overlay */}
      <div
      className="w-[13%] md:w-[20%]"
        style={{
          height: "100%",
          top: "0",
          left: "0",
          position: "absolute",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1
        }}
      ></div>

      {/* bg img */}
      <div className="md:w-[20%] w-[13%] md:h-full flex flex-col justify-between "
        style={{
          border: "red 2px",
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>

        {/* ProfileNav */}
        <div style={{ zIndex: 7 }} className="flex w-full flex-wrap px-2 md:px-0 h-[28%] md:h-[45%] mt-5 md:mt-0 items-center" >
          <h1 className=" md:text-2xl text-base font-medium my-5  md:ml-5 ml-2 md:flex hidden">Profile</h1>
          {
            profileList.map(function (data, index) {
              return (
                <Link key={index} to={data.path}
                  className={`flex justify-between rounded-xl cursor-pointer w-full py-2 md:pl-4 pl-[4px] pr-2 md:pr-0 mx-0 md:mx-5 grow md:my-0 
                  hover:bg-[rgb(38,41,41)]
                  ${(location.pathname === "/Profile" && data.path === "Info" ) ||
                    location.pathname === `/Profile/${data.path}`
                    ?"border-[rgb(18,232,186)] border-l-[2px] bg-[rgb(38,41,41)] md:border-l-4"
                    :""
                  }
                  `}
                  >
                  <div className="flex gap-[10px]  items-center">
                    <div>{data.icon}</div>
                    <span className="hidden md:flex">{data.title}</span>
                  </div>
                  <div className="cursor-pointer pt-2 hidden md:flex">
                    {data.moreBtn}
                  </div>
                </Link>
              )
            })
          }
        </div>

        <div className="flex z-10 w-full flex-wrap gap-4 md:gap-0 mt-5 h-fit justify-center items-end">
          {
            logOut.map(function (item, index) {
              return (
                <div key={index} style={{ zIndex: 2 }} className="hidden md:flex w-full p-5 items-center justify-between rounded-lg  grow md:my-0">
                  <span className="font-medium ">{item.logoutTitle}</span>
                  <div className="pt-1 cursor-pointer hover:bg-red-600 rounded-md">{item.logoutUser}</div>
                </div>
              )
            })
          }
        </div>

      </div>


      <div className="w-[100%] md:w-[80%] flex pb-12 flex-col justify-center" >
        <Outlet></Outlet>
      </div>
    </div>
  );
}

var profileList = [
  {
    icon:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

      ),

    title: "General info",
    path: "Info",
    moreBtn:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      )
  },

  {
    icon:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

      ),

    title: "Settings",
    path: "Settings",
    moreBtn:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      )
  },

  {
    icon:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      ),

    title: "About",
    path: "About",
    moreBtn:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      )
  },

]

var logOut = [
  {
    logoutUser:
      (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
      ),

    logoutTitle: "GUEST USER",
  },
]

export default Profile;