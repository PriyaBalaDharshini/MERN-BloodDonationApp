import { Link } from "react-scroll"

const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-[100px] px-[100px] ">
            <img src="/logo1.png" alt="" height={200} width={200} className="cursor-pointer" />
            <div className="flex items-center justify-evenly cursor-pointer">
                <Link className="mr-3 text-[18px] font-medium" smooth={true} duration={1000} to="hero">Home</Link>
                <Link className="mr-3 text-[18px] font-medium" smooth={true} duration={1000} to="about"   >About Us</Link>
                <Link className="mr-3 text-[18px] font-medium" smooth={true} duration={1000} to="contact">Contact Us</Link>
            </div>
        </div>

    )
}

export default NavBar