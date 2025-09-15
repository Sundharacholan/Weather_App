import { Link, useLocation } from 'react-router-dom'

function Nav() {

    const location = useLocation()

    var navList = [
        {
            icon: (
                <svg xmlns="http://uwww.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" class="size-6 mt-[mt-3]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>),
            path: "/",
            menu: "Home"
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" class="size-6 mt-[3px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>),
            path: "/Location",
            menu: "Location"
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="1.5" stroke="currentColor" class="size-6 mt-[3px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>),
            path: "/Profile",
            menu: "Profile"
        }
    ]

    return (
        <>
            <div className='flex w-full text-xs bg-black backdrop-blur-sm text-white  justify-center py-1 px-3 fixed bottom-0 z-10 md:top-0 md:bottom-auto md:text-base md:p-4 md:justify-between'>
                <Link to="/">
                    <h1 className='hidden md:flex text-2xl pt-2 items-center font-bold text-[rgb(18,232,186)] '>WEATHER APP</h1>
                </Link>
                <div className='flex w-11/12 justify-between md:w-1/3 md:font-semibold my-1'>
                    {
                        navList.map(function (data, i) {
                            return (
                                <Link to={data.path} key={i} 
                                className={`py-2 px-3 flex flex-col items-center justify-center md:flex-row rounded-lg hover:bg-[rgb(16,18,18)]
                                    ${location.pathname === data.path || 
                                        (data.path !== "/" && location.pathname.startsWith(data.path))
                                        ?"text-[rgb(18,232,186)] border-b-2 bg-[rgb(24,26,26)]"
                                        :""
                                    }
                                `}>
                                    <div className="pl-1">{data.icon}</div>
                                    <p>{data.menu}</p>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Nav;