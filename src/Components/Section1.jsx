import React from 'react';
import thirdphoto from '../assets/thirdphoto.jpg'

const Section1 = () => {
    return (
        <div className="first sticky top-0 w-[15%] flex flex-col items-center lg:w-[22%] ">
            <div className="sidebar flex flex-col items-center lg:items-end sticky top-0 p-4">
                {/* Logo */}
                <div className="logo invert lg:self-start lg:pl-3 ">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 m-auto">
                        <g>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                    </svg>
                </div>
                
                {/* Navigation */}
                <ul className="flex flex-col text-xl font-light space-y-0.5 items-center lg:self-start lg:items-start">
                    {[
                        { icon: 'home', label: 'Home' },
                        { icon: 'search', label: 'Explore' },
                        { icon: 'notifications', label: 'Notifications' },
                        { icon: 'message', label: 'Grok' },
                        { icon: 'lists', label: 'Lists' },
                        { icon: 'bookmarks', label: 'Bookmarks' },
                        { icon: 'group', label: 'Communities' },
                        { icon: 'box', label: 'Premium' },
                        { icon: 'person', label: 'Profile' },
                        { icon: 'pending', label: 'More' },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 justify-center lg:justify-start lg:w-fit px-3 py-3 rounded-full hover:bg-gray-800 cursor-pointer">
                            <span className="text-3xl material-symbols-outlined">{item.icon}</span>
                            <span className="hidden lg:block font-semibold">{item.label}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Post Button */}
                <div className="w-full flex justify-center">
                    <button className="hidden lg:block bg-white hover:bg-gray-300 px-20 text-xl rounded-full py-3 text-black">Post</button>
                    <button className="lg:hidden flex items-center justify-center bg-white hover:bg-gray-300 px-2 text-xl rounded-full py-2 text-black">
                        <span className="material-symbols-outlined text-black">edit</span>
                    </button>
                </div>
                
                {/* User Profile */}
                <div className="userprofile w-full mt-5  justify-end flex">
                    <div className="flex items-center justify-center gap-3 hover:bg-gray-800 cursor-pointer rounded-full w-fit">
                        <img className="w-12 h-12 rounded-full object-cover" src={thirdphoto} alt="vercel" />
                        <div className='hidden lg:block'>
                            <div>Abhishek Kumar</div>
                            <div className="text-gray-500">@maury_ak24</div>
                        </div>
                        <div className="hidden lg:block text-2xl">...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
