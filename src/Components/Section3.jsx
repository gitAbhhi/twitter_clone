import React from 'react';
import abplogo from '../assets/abplogo.jpg';
import firstphoto from '../assets/firstphoto.png';
import secondphoto from '../assets/secondphoto.jpeg';
import thirdphoto from '../assets/thirdphoto.jpg';

const Section3 = () => {
    return (
        // <div className="third bg-black lg:w-[25%] hidden lg:block p-4  top-0 right-0 h-full overflow-y-auto">
        <div className="third bg-black hidden lg:w-[25%] relative top-0 self-start lg:   lg:block p-4">
            {/* Search Bar */}
            <div className="search  mb-2">
                <input type="text" className="w-full bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none" placeholder="Search" />
            </div>

            {/* Premium Subscription */}
            <div className="subscribe border-2 border-gray-700 bg-black text-white p-4 rounded-xl mb-2">
                <div className="font-bold text-xl mb-2">Subscribe to Premium</div>
                <p className="text-sm mb-3">Subscribe to unlock new features and, if eligible, receive a share of ad revenue.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 font-bold w-full">Subscribe</button>
            </div>

            {/* What's Happening */}
            <div className="whats border-2 border-gray-700 bg-black text-white p-4 rounded-xl mb-2">
                <h1 className="font-bold text-xl mb-3">What's happening</h1>
                <div className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                    <span className="text-xs text-gray-500">Entertainment - Trending</span>
                    <div className="font-bold text-base">#Thalapathy69</div>
                    <span className="text-xs text-gray-500">6,762 posts</span>
                </div>
                <div className="hover:bg-gray-800 p-2 rounded-md cursor-pointer mt-2">
                    <span className="text-xs text-gray-500">Celebrities - Trending</span>
                    <div className="font-bold text-base">#DeepikaPadukone</div>
                    <span className="text-xs text-gray-500">Trending with </span>
                    <span className="text-xs text-blue-400">#BabyGirl, #RanveerSingh</span>
                </div>
            </div>

            {/* Who to Follow */}
            <div className="follow bg-gray-900 text-white p-4 rounded-xl">
                <div className="font-bold text-xl mb-3">Who to follow</div>
                {[{name: "Abhishek Kumar", username: "@maury_ak24", photo: firstphoto},
                  {name: "Avanish Kumar", username: "@its_akm", photo: secondphoto},
                  {name: "Nitin Maurya", username: "@nathu_paji", photo: thirdphoto}].map((user, index) => (
                    <div key={index} className="flex items-center justify-between mb-3 hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                        <img className="w-10 h-10 rounded-full object-cover" src={user.photo} alt="profile" />
                        <div className="flex-1 ml-3">
                            <div className="font-bold text-sm">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.username}</div>
                        </div>
                        <button className="bg-white text-black w-[80px] h-[30px] rounded-full font-bold hover:bg-gray-300">Follow</button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500 text-center  mt-6">
                Terms of Service · Privacy Policy · Cookie Policy · Accessibility · Ads info · More © 2024 X Corp.
            </div>
        </div>
    );
}

export default Section3;
