import ThePost from './components/ThePost';
import SidebarRoom from './components/SidebarRoom';
import NewPost from './components/NewPost';
import Header from './components/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
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

export default App
