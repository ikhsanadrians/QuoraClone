import { useLocation } from 'react-router-dom';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import ThePost from '../components/ThePost';

function Following() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
    <div className="container mx-auto">
        <div className="container max-w-[1090px] mx-auto mt-5">
            <div className="content-wrappers flex gap-6">
                <SidebarRoom />
                <div className="posts w-[60%]">
                    <NewPost />
                    <ThePost />
                </div>
            </div>
            <div className="mb-64">

            </div>
        </div>
    </div>
    </>
  )
}

export default Following;