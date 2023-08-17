import TopicToKnow from '../components/TopicToKnow';
import QuestionToAnswer from '../components/QuestionToAnswer';
import SidebarAnswers from '../components/SidebarAnswers';
import Container from '../components/layouts/Container';
import QTAData from '../data/questionToAnswers';
// import { useLocation } from 'react-router-dom';

function Answers() {
  // const location = useLocation();
  return (
    <>
      <Container>
        <SidebarAnswers />
        <div className="header-mobile-answers lg:hidden flex items-center bg-white sticky top-[100px] p-3">
             <div className="wrappers flex gap-4  h-full relative">
                <div className="for-you max-w-fit after:contents-[''] after:absolute after:-bottom-3 flex items-center after:w-20 justify-center after:h-[4px] after:bg-red-700 after:rounded-tr-xl after:rounded-tl-xl font-semibold text-gray-700">
                     Untuk Anda
                </div>
                <div className="request">
                     Permintaan
                </div>
                <div className="draft">
                    Draf
                </div>
             </div>
        </div>
        <div className="questions-to-answers-list mt-2 lg:mt-4 bg-white w-full lg:w-[65%] border-[1.5px] border-gray-300 rounded-md">
          
          <div className="qta-heads w-full py-2 px-4 border-b-[1.5px] border-gray-300">
            <div className="stars-and-text flex items-center gap-2 text-[13px] text-gray-600">
              <div className="stars bg-red-700 max-w-fit p-[2px] rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.618-4.944 2.599L8 13.71 4 9.812l5.528-.803L12 4l2.472 5.01L20 9.811l-4 3.9.944 5.505z" className="icon_svg-stroke icon_svg-fill" stroke="white" strokeWidth="1.5" fill="white" strokeLinejoin="round"></path></svg>
              </div>
              <p>Pertanyaan Untuk Anda</p>
            </div>
          </div>
          <div className="question-list">
            {
              QTAData.map((index,key)=><QuestionToAnswer title={index.title} answersValue={index.answersValue} date={index.date} followingValue={index.followingValue} key={key}/>)
            }
          </div>
        </div>
        <TopicToKnow />
     
      </Container>
      <div className="mb-64">
          
          </div>
    </>
  )
}

export default Answers