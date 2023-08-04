import Container from "../components/layouts/container"
import SidebarNotification from "../components/SidebarNotification"

function Notifications() {
  return (
    <Container>
      <SidebarNotification/>

         <div className="notification-container w-[50%] mt-4">
          <div className="notif-head flex justify-between items-center border-b-[1.5px] border-gray-300 pb-1">
              <div className="notif-title text-gray-700 font-medium">
                 <h1>Notifikasi</h1>
              </div>
              <div className="notif-settings flex text-sm items-center gap-2 text-gray-500">
                <p className="cursor-pointer hover:underline">Tandai Semua Sudah Dibaca  · </p>
                <p className="cursor-pointer hover:underline">Setelan</p>
              </div>
          </div>
          <div className="notif-content">
            
          </div>
         </div>
     
    </Container>
  )
}

export default Notifications