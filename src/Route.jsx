import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Home from "./home";
import Location from "./location";
import Profile from "./profile";
import Nav from './components/nav';

import Info from './components/info';
import Settings from './components/settings';
import About from './components/about';

function RouteCom() {
    return (
        <BrowserRouter className="">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/Location' element={<Location />}></Route>

                <Route path='/Profile' element={<Profile />}>
                    <Route index element={<Info />}></Route>

                    <Route path='Info' element={<Info />}></Route>
                    <Route path='Settings' element={<Settings />}></Route>
                    <Route path='About' element={<About />}></Route>
                </Route>

            </Routes>
            <Nav></Nav>
        </BrowserRouter>
    );
}

export default RouteCom;