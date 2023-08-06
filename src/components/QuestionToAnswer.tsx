type QTAProps = {
    title? : string,
    answersValue? : number,
    followingValue? : number,
    date?: string
}


export default function QuestionToAnswer({title,answersValue,followingValue,date} : QTAProps) {
  return (
            <div className="questions-to-answers border-b-[1.5px] border-gray-300">
                <div className="qta-contents px-4 pt-4 pb-2">
                  <div className="content-top flex items-center justify-between">
                    <div className="content-title flex-1">
                      <h1 className='font-bold cursor-pointer hover:underline'>
                        { title ? title : '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, atque.'}
                      </h1>
                    </div>
                    <div className="close flex self-start flex-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666" strokeWidth="1.5"></path></svg>
                    </div>
                  </div>
                  <div className="content-statistic mt-1">
                    <span className='font-semibold flex gap-1 text-[14px] text-gray-500'>
                     { answersValue ? answersValue + " Jawaban" : "Belum ada Jawaban" }  · <p className='font-normal text-gray-500'>Terakhir Diikuti {date ? date : "Sab"}</p>
                    </span>
                  </div>
                  <div className="content-btm flex justify-between items-center mt-2">
                    <div className="content-interact flex gap-1 items-center">
                      <div className="answer flex gap-1 hover:bg-gray-100 cursor-pointer border-[1.5px] border-gray-300 max-w-fit py-2 px-4 rounded-full font-semibold text-gray-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" className="icon_svg-stroke" stroke="#666" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        <p>Jawab</p>
                      </div>
                      <div className="follow-question flex rounded-full text-gray-500 gap-2 font-semibold hover:bg-gray-100 cursor-pointer py-2 px-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round"><path d="M14.5 19c0-5.663-3.337-9-9-9m14 9c0-8.81-5.19-14-14-14"></path><circle cx="7.5" cy="17" r="2" className="icon_svg-fill"></circle></g></svg>
                        <span className='flex gap-1'>
                          Ikuti  <p className='font-normal'>{ '·' + followingValue ? followingValue : 1}</p>

                        </span>
                      </div>
                      <div className="skip-question flex rounded-full text-gray-500 gap-2 font-semibold hover:bg-gray-100 cursor-pointer py-2 px-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m11.828 9.314 3.9-3.9a2 2 0 1 1 2.828 2.829l-3.9 3.9m-3.535 3.535-2.464 2.464-4.241 1.416 1.412-4.244 2.465-2.465" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" strokeLinecap="square" stroke-linejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.414 19.556 2.652-.884-1.768-1.767z"></path><path d="M4.636 5.636 18.5 19.5" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" strokeLinecap="round"></path></g></svg>
                        <span className='flex gap-1'>
                          Lewati
                        </span>
                      </div>
                    </div>
                    <div className="content-downvote-report flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" className="icon_svg-stroke" fill="#666" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
  )
}
  