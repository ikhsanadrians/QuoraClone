type RoomListProps = {
    imageUrl : string,
    name : string,
}


export default function SidebarRoom() {
    return (
      <div className="sidebar-room sticky top-[80px] h-[500px] overflow-y-scroll lg:block hidden">
        <ul className='flex flex-col gap-4'>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center bg-gray-200 max-w-fit py-[4px] px-2 rounded-md">
                    <div className="icons bg-gray-100 p-[1px] rounded-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 12h15M12 4.5v15" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg>
                    </div>
                    <p className='text-gray-500 text-sm'>
                        Buat Ruang
                    </p>
                </div>
            </li>
           <RoomList name="Web Developer Indonesia" imageUrl="https://qph.cf2.quoracdn.net/main-thumb-ti-1721737-100-rpusataldgresgdqtcqkhbmsupnggpou.jpeg"/>
           <RoomList name="Programmer Indonesia" imageUrl="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"/>
           <RoomList name="Cocok-Logika" imageUrl="https://i.pinimg.com/originals/a6/94/4a/a6944ad25186f826dbdcf3cd108dc060.png"/>
           <RoomList name="Kisah-Kisah yang terlupakan" imageUrl="https://qph.cf2.quoracdn.net/main-thumb-ti-2635-100-ndgitufkwdafqfciqjvieyerutfocbom.jpeg"/>
           <RoomList name="Diskusi Politik" imageUrl="https://visinews.net/wp-content/uploads/2020/12/IMG-20201211-WA0035.jpg"/>
           <RoomList name="Analisa Wacana Politik" imageUrl="https://qph.cf2.quoracdn.net/main-thumb-ti-1740080-100-cljcugemjmpiriysdsxhdmiojivwwzdc.jpeg"/>
           <RoomList name="Sejarah Politik" imageUrl="https://qph.cf2.quoracdn.net/main-thumb-ti-1740080-100-cljcugemjmpiriysdsxhdmiojivwwzdc.jpeg"/>
        </ul>
        <div className="footer">
            <span className="text-sm flex flex-wrap w-28 mt-4 text-gray-500 cursor-pointer">
                <p className="hover:underline">Tentang Kami ·</p>
                <p className="hover:underline">Karier ·</p>
                <p className="hover:underline">Ketentuan ·</p>
                <p className="hover:underline">Privasi ·</p>
                <p className="hover:underline">Penggunaan Dapat Diterima ·</p>
                <p className="hover:underline">Bisnis ·</p>
                <p className="hover:underline">Pers</p>
            </span>
        </div>
    </div>
    )
}

    function RoomList({imageUrl, name} : RoomListProps) {
      return (<li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center  max-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-lg flex self-start">
                        <img className='object-cover w-full h-full' src={imageUrl} />
                    </div>
                    <p className='text-gray-500 text-[13px] w-[4.4rem] line-clamp-2 h-full'>
                       { name }
                    </p>
                </div>
            </li>)
    }                                    
  
   
  