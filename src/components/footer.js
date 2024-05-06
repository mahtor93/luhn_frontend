import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    const nombre_creador = "hola"
    return (
        <footer className="bottom-0 w-full bg-gradient-to-b from-blue-800 to-indigo-950 text-white py-4">
            <div className="sm:max-w-7xl sm:mx-auto  lg:px-8">
                <div className="flex justify-between flex-col p-[16px] sm:flex-row items-center">
                    <div className='order-first'>
                        <div className='pb-[16px]'>

                        </div>
                        <ul className='list-none space-y-4 pb-[16px]'>
                            <li className='flex items-center'>
                                <IoLogoGithub className='mr-3 ' /> <a href='https://github.com/mahtor93/luhn'> Repo project</a>
                            </li>
                            <li className='flex items-center'>
                                <IoLogoGithub className='mr-3 ' /> <a href='https://github.com/mahtor93'> My Github</a>
                            </li>
                            <li className='flex items-center'>
                                <TiSocialLinkedinCircular className='mr-3 ' /> <a href='https://www.linkedin.com/in/mario-torneria-52a49a24b/'> LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className='order-last flex flex-col sm:flex-row h-full justify-center sm:justify-end items-end'>
                        <p className='mb-0 sm:mr-4'>~ &copy; {new Date().getFullYear()} Mario Tornería ~</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


