// 1. import area

import { Outlet } from "react-router-dom";


//1.2 import {somenamedimport} from some location/library
//1.2 import somedefaultimport from some location/lobrary

//2. functional Component defination area
const Layout = ()=>{
    //every function should return something

    return(
        <>
            <header>This is Header</header>
            <div className="main">
                <Outlet />
            </div>
            <footer>This is Footer</footer>
        </>
    )
}

//3. export area

//3.1 default export
export default Layout;
//3.2 named export