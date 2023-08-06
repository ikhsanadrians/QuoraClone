export default function RoomInvitation() {
  return (
            <div className="rooms-invitation bg-white w-[30%] max-h-[150px] border-[1.5px] border-gray-200 rounded-md">
               <div className="invitation-header py-2 px-4 border-b-[1.5px] border-gray-200">
                  <h1 className="text-gray-500 font-medium">Undangan yang Tertunda</h1>
               </div>
               <div className="invitation-content flex justify-center mt-6">
                  <div className="invite-content flex flex-col items-center h-full justify-center">
                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke justify-center flex" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinejoin="round"><path d="M4.5 6.5h15v12h-15z"></path><path strokeLinecap="round" d="M4.5 7.5 12 14l7.5-6.5"></path></g></svg>
                     <p className="text-gray-400">Tidak ada undangan</p>
                  </div>
               </div>
            </div>
        )

         
}
  