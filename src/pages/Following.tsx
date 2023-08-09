import { useLocation } from 'react-router-dom';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import ThePost from '../components/ThePost';
import Container from '../components/layouts/Container';
import Ads from '../components/Ads';
import PostFollowingData from '../data/following';

function Following() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <Container>
        <SidebarRoom />
        <div className="posts w-full lg:w-[60%]">
          <NewPost />
          {
                      PostFollowingData.map((index,key)=> <ThePost key={key} answer={index.answer} author={index.author} authorCredentials={index.authorCredentials} authorPPUrl={index.authorPPUrl} commentValue={index.commentValue} postDate={index.postDate} question={index.question} shareValue={index.shareValue} thumbnailUrl={index.thumbnailUrl} upvoteValue={index.upvoteValue} /> )
          }
        </div>
        <Ads/>
      </Container>
      <div className="mb-64">

      </div>

    </>
  )
}

export default Following;