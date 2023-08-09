import Room from '../components/Room';
import RoomInvitation from '../components/RoomInvitation';
import Container from "../components/layouts/Container"
import RoomData from '../data/rooms';

function Rooms() {
  return (
    <>
      <Container>

        <div className="rooms-containers-list bg-white w-[70%]  border-[1.5px] border-gray-300 rounded-md">
          <div className="rooms-header flex justify-between px-4 py-2 items-center">
            <div className="header-title font-bold">
              <h1>Ruang Anda</h1>
            </div>
            <div className="header-filter hover:bg-gray-100 text-gray-500 text-sm px-2 py-1 rounded-full cursor-pointer font-semibold flex items-center gap-1">
              <p>Baru-Baru Ini Dikunjungi</p>
              <svg width="21" height="21" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8.5 7 7 7.005-7" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" strokeLinecap="round"></path></svg>
            </div>
          </div>
          <div className="room-tools flex gap-2 items-center px-4">
            <div className="make-room flex items-center gap-1 hover:bg-blue-100 cursor-pointer text-[#5e81d4] text-sm border-[1.5px] px-3 py-1 rounded-full border-[#5e81d4]">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#5e81d4" strokeWidth="1.5" fill="none" fill-rule="evenodd"><path d="M12 7v10m-5-5h10" strokeLinecap="round"></path><circle cx="12" cy="12" r="9"></circle></g></svg>
              Buat Ruang
            </div>
            <div className="find-room flex cursor-pointer hover:bg-blue-100 items-center gap-1 text-[#5e81d4] text-sm border-[1.5px] px-3 py-1 rounded-full border-[#5e81d4]">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd" fill="none" stroke="#5e81d4"><path className="icon_svg-stroke" d="M12 21c-4.95 0-9-4.05-9-9s4.05-9 9-9 9 4.05 9 9-4.05 9-9 9z"></path><path className="icon_svg-fill_as_stroke" d="M15.233 8.036c.45-.168.9.281.73.731l-1.686 4.498c-.169.506-.562.843-1.012 1.012l-4.498 1.687a.571.571 0 0 1-.73-.731l1.686-4.498c.169-.506.562-.843 1.012-1.012l4.498-1.687zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></g></svg>
              Temukan Ruang
            </div>
          </div>
          <div className="room-list mt-4">
            <ul>
              {
                RoomData.map((index, key) =>
                  <Room key={key} title={index.title} imageUrl={index.imageUrl}></Room>
                )

              }

            </ul>
          </div>
          <div className="room-more p-2 flex justify-center items-center gap-1">
            <p className="text-gray-500 text-sm">Lihat Lebih Lanjut</p>
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8.5 7 7 7.005-7" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" strokeLinecap="round"></path></svg>
          </div>
        </div>
        <RoomInvitation />
      </Container>


    </>
  )
}

export default Rooms