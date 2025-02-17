import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow">
                {/* Your main content here */}
            </div>
            <footer className="bg-background/50 bg-opacity-80 backdrop-blur-lg bg-black text-white py-8">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://facebook.com" className="text-white hover:text-[#21D761]">
                            Facebook
                        </a>
                        <a href="https://twitter.com" className="text-white hover:text-[#21D761]">
                            Twitter
                        </a>
                        <a href="https://linkedin.com" className="text-white hover:text-[#21D761]">
                            LinkedIn
                        </a>
                    </div>
                    <p className="text-sm">
                        © 2025 vpofg | <Link href="/pp" className="hover:underline">Privacy Policy</Link> | <Link href="/tos" className="hover:underline">Terms of Service</Link>
                    </p>
                    <p className="text-xs mt-2">
                        Crafted with care by <Link href="https://github.com/vpofg" className="text-white hover:text-[#21D761]">@vpofg</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}