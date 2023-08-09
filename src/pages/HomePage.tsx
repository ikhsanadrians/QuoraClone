
import ThePost from '../components/ThePost';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import Container from '../components/layouts/Container';
import Ads from '../components/Ads';
import PostData from '../data/answers';


export default function HomePage() {
    return (
        <>
            <Container>
                <SidebarRoom />
                <div className="posts w-full lg:w-[60%]">
                    <NewPost />
                    {
                      PostData.map((index,key)=> <ThePost key={key} answer={index.answer} author={index.author} authorCredentials={index.authorCredentials} authorPPUrl={index.authorPPUrl} commentValue={index.commentValue} postDate={index.postDate} question={index.question} shareValue={index.shareValue} thumbnailUrl={index.thumbnailUrl} upvoteValue={index.upvoteValue} /> )
                    }
                    <ThePost />
                </div>
                <Ads></Ads>
            </Container>
        </>
    )
}
