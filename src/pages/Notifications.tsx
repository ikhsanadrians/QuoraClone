import Notif from '../components/Notif';
import Container from "../components/layouts/Container"
import SidebarNotification from "../components/SidebarNotification"

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
          <Notif rooms={"Web Developer Indonesia"} title={"Cara Urutan Yang Tepat dalam Mempelajari Laravel?"} answersBy={'Raya Rizky'} times={10}/>
          <Notif rooms={"Programmer Indonesia Community"} title={"Apakah Worth it bagi saya Jurusan Teknik Sipil untuk mengambil Course Machine Learning?"} answersBy={'Rafael Lorenza'} times={3} imageURL={'https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png'}/>
          <Notif rooms={"Kisah-Kisah Yang Terlupakan"} title={"Mengapa sejak abad 16 ke atas peradaban Asia tertinggal dari Eropa?"} answersBy={'Maulana Hafizh Sirajudin'} times={10} imageURL={'https://qph.cf2.quoracdn.net/main-thumb-ti-2635-100-ndgitufkwdafqfciqjvieyerutfocbom.jpeg'}/>
          <Notif rooms={"Cocok-Logika"} title={"Argumen-argumen seperti apa yang menurutmu menunjukkan penalaran yang lemah? Mengapa?"} answersBy={'Fauzan Syahri'} times={10} imageURL={'https://i.pinimg.com/originals/a6/94/4a/a6944ad25186f826dbdcf3cd108dc060.png'}/>
          <Notif rooms={"Linux Indonesia"} title={"Distro Linux Manakah Terbaik Untuk Laptop Low Spec?"} answersBy={'Maulana Hafizh Sirajudin'} times={10} imageURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwG7tfhtNUeUVnkqYeG2lUmOLSgCvjPRimRnjuMJHG5ARryNsYtYnpJWSEyEDU6MYOmGs&usqp=CAU'}/>
        </div>
      </div>
    </Container>
     <div className="mb-48"></div>
    </>
    
  )
}

export default Notifications