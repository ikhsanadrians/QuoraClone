import { useLocation } from 'react-router-dom';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import ThePost from '../components/ThePost';
import Container from '../components/layouts/container';

function Following() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <Container>
        <SidebarRoom />
        <div className="posts w-[60%]">
          <NewPost />
          <ThePost />
        </div>
      </Container>
      <div className="mb-64">

      </div>

    </>
  )
}

export default Following;