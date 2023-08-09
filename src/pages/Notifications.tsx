import Notif from '../components/Notif';
import Container from "../components/layouts/Container"
import SidebarNotification from "../components/SidebarNotification"
import NotifData from '../data/notifications';

function Notifications() {
  return (
    <>
      <Container>
        <SidebarNotification />
        <div className="notification-container w-[52%] mt-4">
          <div className="notif-head flex justify-between items-center border-b-[1.5px] border-gray-300 pb-1">
            <div className="notif-title text-gray-700 font-medium">
              <h1>Notifikasi</h1>
            </div>
            <div className="notif-settings flex text-[13px] items-center gap-2 text-gray-500">
              <p className="cursor-pointer hover:underline">Tandai Semua Sudah Dibaca  · </p>
              <p className="cursor-pointer hover:underline">Setelan</p>
            </div>
          </div>
          <div className="notif-list">
            {
              NotifData.map((index, key) => <Notif key={key} rooms={index.rooms} title={index.title} answersBy={index.answersBy} times={10} />)
            }
          </div>
        </div>
      </Container>
      <div className="mb-48"></div>
    </>

  )
}

export default Notifications