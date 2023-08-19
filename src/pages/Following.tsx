import { useLocation } from 'react-router-dom';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import ThePost from '../components/ThePost';
import Container from '../components/layouts/Container';
import Ads from '../components/Ads';
import PostFollowingData from '../data/following';
import React , { useState } from 'react';

function Following() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openModals,setOpenModals] = useState<boolean>(false);
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <Container>
        <SidebarRoom />
        <div className="posts w-full lg:w-[60%]">
          <NewPost setModals={setOpenModals}/>
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