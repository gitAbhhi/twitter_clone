import React from 'react'
import abplogo from '../assets/abplogo.jpg'
import thirdphoto from '../assets/thirdphoto.jpg'
import firstphoto from '../assets/firstphoto.png'
import secondphoto from '../assets/secondphoto.jpeg'
import fourthphoto from '../assets/fouthphoto.png'
import content from '../assets/content'

const Section2 = () => {
  return (
    <div className="second w-[85%]  border-[1px] border-x-gray-700 border-y-black lg:w-[50%] h-full">
      <div className="heading flex p-2  h-[45px] relative">
        <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[18%]"></div>
        <div className="for_you w-1/2 flex justify-center font-bold">For you</div>
        <div className="following w-1/2 flex justify-center font-bold ">Following</div>
        <div className="setting mx-2 "><span className="text-3xl material-symbols-outlined">Settings</span></div>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>

      <div className="happing flex text-center ">
        <div className="pic m-3 ">
          <img className="mainicon w-[35px] h-[30px] object-cover rounded-full"
            src={thirdphoto} alt="profile"/>
        </div>
        <div className="w-full">
          <input className=" bg-black text-gray-200 text-xl w-full my-4" type="text" placeholder="What is happening?!"/>
          <div className="text-blue-400 flex items-center gap-1 w-full ">
            <span className="material-symbols-outlined text-base">globe_asia</span>
            <span className="text-sm font-bold">Everyone can reply</span>
          </div>
          <div className="w-[90%] h-[0.2px] bg-gray-800 my-3"></div>

          <div className="flex items-center my-2 mr-2">
            <div className="icons text-blue-400 w-[78%] flex justify-start items-center gap-2">
              <span className="text-xl material-symbols-outlined ">image</span>
              <span className="text-xl material-symbols-outlined">gif</span>
              <span className="text-xl material-symbols-outlined">format_list_bulleted</span>
              <span className="text-xl material-symbols-outlined">mood</span>
              <span className="text-xl material-symbols-outlined">event</span>
              <span className="text-xl material-symbols-outlined">location_on</span>
            </div>
            <button
              className="bg-blue-500 text-white w-[60px] h-[35px] rounded-full text-sm font-bold flex justify-center items-center">post</button>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-700"></div>
        {
          content.map((work,index)=>(
            <>
              <div className="photo flex">
            <div key={work} className="user_icon w-[50px] flex justify-center p-1.5">
              <img className=" rounded-full w-[40px] h-[40px]  object-cover " src={work.cnt_img} alt="profile" />
            </div>
            <div key={work} className="user_img w-[85%] lg:w-[92%] pr-3 my-1">
                <div className="user_detail flex justify-start items-center gap-1">
                  <span className=" text-base font-bold fl">{work.cnt_id}</span>
                  <span className="material-symbols-outlined text-xl text-blue-400 ">{work.cnt_verify}</span>
                  <span className="text-gray-500 ">{work.cnt_time}</span>
                </div>
                <div className="user_detail2 text-wrap">
                  <div className="w-full whitespace-pre-wrap break-words overflow-hidden">{work.cnt_txt}
                    <span className=" text-blue-400">{work.cnt_tag}</span>
                  </div>
                  <div className="my-2">
                    <img src={work.cnt_simg} className="border-none  object-cover rounded-2xl" alt="pic" />
                    <div className="likes flex justify-between my-2 text-gray-500">
                      <span className="flex items-center gap-1  hover:text-blue-600 hover:bg-gray-900 hover:rounded-full">
                        <span className="text-xl material-symbols-outlined">mode_comment</span>
                        <span className="text-sm">{work.cnt_msg}</span>
                      </span>
                      <span className="flex items-center gap-1  hover:text-green-600 hover:bg-gray-900 hover:rounded-full">
                        <span className="text-xl material-symbols-outlined  ">Repeat</span>
                        <span className="text-sm">{work.cnt_retweet}</span>
                      </span>
                      <span className="flex items-center gap-1  hover:text-pink-600 hover:bg-gray-900 hover:rounded-full">
                        <span className="text-xl material-symbols-outlined  ">favorite</span>
                        <span className="text-sm">{work.cnt_like}</span>
                      </span>
                      <span className="flex items-center gap-1  hover:text-blue-600 hover:bg-gray-900 hover:rounded-full">
                        <span className="text-xl material-symbols-outlined ">bar_chart</span>
                        <span className="text-sm ">{work.cnt_view}</span>
                      </span>
                      <span>
                        <span
                          className="text-xl  material-symbols-outlined hover:text-blue-600  hover:bg-gray-900 hover:rounded-full">bookmark</span>
                        <span
                          className="text-xl material-symbols-outlined hover:text-blue-600  hover:bg-gray-900 hover:rounded-full">upload</span>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
                <div className="h-[1px] w-full bg-gray-700"></div>
              </>
          ))
        }

     
      <div className="h-[1px] w-full bg-gray-700"></div>
    </div>
  )
}

export default Section2
