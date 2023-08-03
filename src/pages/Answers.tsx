import TopicToKnow  from '../components/TopicToKnow';
import QuestionToAnswer from '../components/QuestionToAnswer';
import SidebarAnswers from '../components/SidebarAnswers';
// import { useLocation } from 'react-router-dom';

function Answers() {
  // const location = useLocation();
  return (
    <>
      <div className="container mx-auto">
        <div className="container max-w-[1090px] mx-auto mt-5">
          <div className="content-wrappers flex gap-6">
            <SidebarAnswers />
            <div className="questions-to-answers-list mt-4 bg-white w-[65%] border-[1.5px] border-gray-300 rounded-md">
              <div className="qta-heads w-full py-2 px-4 border-b-[1.5px] border-gray-300">
                <div className="stars-and-text flex items-center gap-2 text-[13px] text-gray-600">
                  <div className="stars bg-red-700 max-w-fit p-[2px] rounded-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.618-4.944 2.599L8 13.71 4 9.812l5.528-.803L12 4l2.472 5.01L20 9.811l-4 3.9.944 5.505z" className="icon_svg-stroke icon_svg-fill" stroke="white" strokeWidth="1.5" fill="white" strokeLinejoin="round"></path></svg>
                  </div>
                  <p>Pertanyaan Untuk Anda</p>
                </div>
              </div>
              <div className="question-list">
                <QuestionToAnswer />
                <QuestionToAnswer />
                <QuestionToAnswer />
                <QuestionToAnswer />
                <QuestionToAnswer />
              </div>
            </div>
         <TopicToKnow />
          </div>
          <div className="mb-64">
          </div>
        </div>
      </div>
    </>
  )
}

export default Answers