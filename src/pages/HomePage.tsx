
import ThePost from '../components/ThePost';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import Container from '../components/layouts/container';



export default function HomePage() {
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
