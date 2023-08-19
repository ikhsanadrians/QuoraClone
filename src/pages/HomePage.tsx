
import ThePost from '../components/ThePost';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import Container from '../components/layouts/Container';
import Ads from '../components/Ads';
import PostData from '../data/answers';
import ProfilePicture from '/assets/images/rpg.jpg';
import React , { useState } from 'react';


export default function HomePage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [openModals,setOpenModals] = useState<boolean>(false);

    const closeTheModals = () => {
         setOpenModals(false)
    }

    return (
        <>
            <Container>
                <SidebarRoom />
                <div className="posts w-full lg:w-3/5">
                    <NewPost setModals={setOpenModals} />
                    {
                        PostData.map((index, key) => <ThePost key={key} answer={index.answer} author={index.author} authorCredentials={index.authorCredentials} authorPPUrl={index.authorPPUrl} commentValue={index.commentValue} postDate={index.postDate} question={index.question} shareValue={index.shareValue} thumbnailUrl={index.thumbnailUrl} upvoteValue={index.upvoteValue} />)
                    }
                </div>
                <Ads></Ads>
                <div className={`modal-create ${openModals ? 'block' : 'hidden'} fixed z-30 rounded-md bg-white w-1/2 h-2/3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
                    <div className="modal-wrappers p-2 h-full">
                        <div onClick={closeTheModals} className="close-modal hover:bg-gray-100 w-fit h-fit p-2 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.5 5.5 13 13m-13 0 13-13" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fill-rule="evenodd" strokeLinecap="round"></path></svg>
                        </div>
                        <div className="chosee-option flex gap-4 border-b-[1.5px]">
                            <div className="add-questions basis-1/2 justify-center flex text-sm items-center p-2 font-semibold relative text-gray-700 after:contents-[''] after:w-full after:absolute after:bottom-0 after:bg-blue-600 after:h-[3px] after:rounded-tl-3xl after:rounded-tr-3xl">
                                <p>Tambah Pertanyaan</p>
                            </div>
                            <div className="add-questions basis-1/2 justify-center p-2 font-semibold text-gray-700 flex text-sm items-center">
                                <p>Buat Kiriman Informasi</p>
                            </div>
                        </div>
                        <div className="wrappers-add-question flex flex-col h-full">
                            <div className="post-and-input h-[71%]">
                                <div className="posts-visibility flex items-center gap-2 px-2 py-4">
                                    <div className="post-profile-pictures overflow-hidden h-4 w-4 rounded-full border-[1.5px] border-gray-100">
                                        <img className='object-cover w-full h-full' src={ProfilePicture} alt="profile-picture" loading='lazy' />
                                    </div>
                                    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.5 12-11 7V5z" className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" stroke="#666" fill="#666" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    <div className="choose-visibility flex gap-1 text-sm items-center font-semibold text-gray-600 py-[2px] px-2 border-[1.5px] 
                                   border-gray-200 rounded-full">
                                        <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" transform="translate(4 4)" stroke="#666" strokeWidth="1.5" fill="none" fill-rule="evenodd"><path d="M10 15.5a5 5 0 0 0-10 0m17 0a5 5 0 0 0-7.032-4.57"></path><circle cx="5" cy="4" r="4"></circle><path d="M9.678 7.258A4 4 0 1 0 9.791.665"></path></g></svg>
                                        <p>Publik</p>
                                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8.5 7 7 7.005-7" className="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" stroke-linecap="round"></path></svg>
                                    </div>
                                </div>
                                <div className="input-questions px-2">
                                    <input className='w-full outline-none border-b-[1.5px] border-gray-200 py-2 focus:border-blue-500' placeholder='Awali pertanyaan Anda dengan "Apa", "Bagaimana", "Mengapa", dll.' />
                                </div>
                            </div>

                            <div className="send-question flex border-t-[1.5px] border-gray-200 w-full justify-end pt-2 items-center self-end gap-4 py-1 px-4">
                                <div className="cancel text-sm font-semibold text-gray-500">
                                    <p>Batal</p>
                                </div>
                                <button className="add-question-btn bg-blue-400 opacity-70 rounded-full px-4 py-2 text-sm text-white font-semibold">
                                    Tambah pertanyaan
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
            <div className={`backdrop ${openModals ? 'block' : 'hidden'} fixed z-20 top-0 bg-black/50 w-full h-[100vh]`}>
            </div>
        </>
    )
}
