import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    const [open, setOpen] = useState(false)
    return (
        <div className="mx-6">
            <div onClick={() => setOpen(!open)}>
                {!open==true?<MdOutlineMenu className="text-6xl md:hidden"></MdOutlineMenu>:<IoClose className="text-6xl md:hidden"></IoClose>}
                <ul className={`duration-[1s] absolute md:hidden ${open?'left-6':'-left-60'} bg-gray-300 px-6 shadow-lg`}>
                {
                    routes.map((route) => <li className="lg:hidden" key={route.id} href={route.path}>{route.name}</li>)
                }
            </ul>
            </div>
            <ul className="flex gap-6">
                {
                    routes.map((route) => <a className="hidden md:flex lg:flex" key={route.id} href={route.path}>{route.name}</a>)
                }
            </ul>
        </div>
    );
};

export default NavBar;