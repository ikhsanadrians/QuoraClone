
export default function NotificationHeader() {
  return ( <div className="notif-head lg:flex md:block hidden justify-between items-center border-b-[1.5px] lg:bg-transparent md:bg-transparent bg-white border-gray-300 p-4 lg:pb-1 lg:p-0">
            <div className="notif-title text-gray-700 font-medium">
              <h1>Notifikasi</h1>
            </div>
            <div className="notif-settings flex text-[13px] items-center gap-2 text-gray-500">
              <p className="cursor-pointer hover:underline">Tandai Semua Sudah Dibaca  · </p>
              <p className="cursor-pointer hover:underline">Setelan</p>
            </div>
          </div> )
}
  