import NotificationHeader  from '../components/NotificationHeader';
import Notif from '../components/Notif';
import Container from "../components/layouts/Container"
import SidebarNotification from "../components/SidebarNotification"
import NotifData from '../data/notifications';
import MobileNotificationHeader from '../components/MobileNotificationHeader';

function Notifications() {
  return (
    <>
      <Container>
        <SidebarNotification />
        <div className="notification-container w-full lg:w-[52%] lg:mt-4 mt-0">
          <NotificationHeader />
          <MobileNotificationHeader/>
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