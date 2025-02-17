import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="fixed w-full z-50 bg-background/50 bg-opacity-80 backdrop-blur-lg bg-black text-white h-20 flex items-center"> 
            <div className=" w-full px-4 mx-auto flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/LogoTypeDarkMode.svg" alt="logo" width={128} height={128} />
                </Link>
                <div className="hidden md:flex space-x-4 relative ml-auto">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="ml-4">
                        <Link href="/signin" className="bg-background/50 px-4 py-2 rounded-md bg-[#21D761] text-black hover:bg-green-500">Sign In</Link>
                </div>
            </div>   
        </nav>
    );
}