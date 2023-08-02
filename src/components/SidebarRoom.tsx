import cnximg from '../../public/assets/images/cnx.png';
import js from '../../public/assets/images/js.png';
import fisika from '../../public/assets/images/fisika.png';
import biologi from '../../public/assets/images/biologi.jpg';

export default function SidebarRoom() {
    return (
      <div className="sidebar-room">
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
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center  max-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit truncate hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] truncate h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={js} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm w-[4.4rem] truncate'>
                        Web Development design
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center  max-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit truncate hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] truncate h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={biologi} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm w-[4.4rem] truncate'>
                        Kimia
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center  max-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit truncate hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] truncate h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={fisika} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm w-[4.4rem] truncate'>
                        Fisika
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center ax-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit max-w-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={cnximg} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm truncate w-[4.4rem]'>
                        Connexsoft
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center ax-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit max-w-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={cnximg} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm truncate w-[4.4rem]'>
                        Connexsoft
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center ax-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit max-w-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={cnximg} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm truncate w-[4.4rem]'>
                        Connexsoft
                    </p>
                </div>
            </li>
            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center ax-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit max-w-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={cnximg} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm truncate w-[4.4rem]'>
                        Connexsoft
                    </p>
                </div>
            </li>

            <li className="cursor-pointer">
                <div className="room flex gap-2 text-base items-center ax-w-[7.2rem] py-[4px] px-2 rounded-md max-h-fit max-w-fit hover:bg-gray-200">
                    <div className="icons-rooms bg-gray-100 p-[1px] w-[1.3rem] h-[1.3rem] overflow-hidden object-cover rounded-sm">
                        <img src={cnximg} className='object-cover' />
                    </div>
                    <p className='text-gray-500 text-sm truncate w-[4.4rem]'>
                        Connexsoft
                    </p>
                </div>
            </li>
        </ul>
        <div className="footer">

        </div>
    </div>
    )
}
