import ProfilePicture from '/assets/images/rpg.jpg';
import React, { Dispatch,SetStateAction } from 'react';

interface ModalsProps {
  setModals: Dispatch<SetStateAction<boolean>>;
}

const NewPost: React.FC<ModalsProps> = ({setModals}) => {
  const handleOpenModal = () => {
      setModals(true)
  }

  return (
  <div className="new-posts bg-white w-full px-4 py-2 rounded-md border-[1.5px] border-gray-300">
    <div className="flex flex-col">
      <div className="profile-n-text w-full flex gap-3 mt-1">
        <div className="post-profile-pic h-8 w-8 border-[1.7px] border-gray-300 rounded-full overflow-hidden object-cover">
          <img src={ProfilePicture} alt="profile-picture" className='object-cover h-full w-full' loading='lazy'/>
        </div>
        <input onClick={handleOpenModal} readOnly className="w-full cursor-pointer hover:bg-gray-200 bg-gray-100 border-[1.5px] border-gray-300 px-3 rounded-2xl outline-none" type="text" placeholder='Apa yang ingin Anda tanyakan dan bagikan?' />
      </div>
    <div className="new-posts-options w-full flex items-center mt-3 justify-around">
        <div className="ask basis-[33%] cursor-pointer justify-center hover:bg-gray-100 hover:rounded-lg flex items-center gap-1 border-r-[1.2px] mr-1 border-gray-300 py-1 px-4">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd"><g transform="translate(9 7)"><path d="M3 6v-.5A2.5 2.5 0 1 0 .5 3" stroke-linecap="round" stroke-linejoin="round"></path><circle className="icon_svg-fill_as_stroke" fill="#666" cx="3" cy="8.5" r="1" stroke="none"></circle></g><path d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" stroke-linejoin="round"></path></g></svg>
          <p className='font-semibold text-gray-500 text-sm'>
            Tanya
          </p>
        </div>
        <div className="answers basis-[33%] cursor-pointer justify-center flex items-center gap-1 hover:bg-gray-100  hover:rounded-lg  border-r-[1.2px] border-gray-300 py-1 px-4">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" className="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
          <p className='font-semibold text-gray-500 text-sm'>
            Jawab
          </p>
        </div>
        <div className="posts basis-[33%] cursor-pointer justify-center flex items-center gap-1 hover:bg-gray-100  hover:rounded-lg py-1 px-4">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
          <p className='font-semibold text-gray-500 text-sm'>
            Kiriman
          </p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default NewPost;