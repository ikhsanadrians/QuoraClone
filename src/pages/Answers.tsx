import TopicToKnow from '../components/TopicToKnow';
import QuestionToAnswer from '../components/QuestionToAnswer';
import SidebarAnswers from '../components/SidebarAnswers';
import Container from '../components/layouts/Container';
// import { useLocation } from 'react-router-dom';

function Answers() {
  // const location = useLocation();
  return (
    <>
      <Container>
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
            <QuestionToAnswer title='Mengapa Timor Leste tidak bisa menjadi negara kaya seperti negara Arab? Padahal negara Timor Leste memiliki sumber daya alam berupa minyak dan gas?' answersValue={1} />
            <QuestionToAnswer title='Bagaimana otak mengolah informasi dan menyimpan ingatan?' />
            <QuestionToAnswer title='Bagaimana penggunaan antibiotik berlebihan telah menyebabkan resistensi bakteri dan bagaimana dampaknya pada kesehatan manusia?' />
            <QuestionToAnswer title='Apa yang diketahui tentang struktur dasar dan evolusi alam semesta dari studi astronomi dan astrofisika?'/>
            <QuestionToAnswer title='Apa itu jaringan komputer, dan bagaimana cara kerja internet sebagai jaringan global yang menghubungkan berbagai komputer di seluruh dunia?'/>
            <QuestionToAnswer title='Apa itu jaringan komputer, dan bagaimana cara kerja internet sebagai jaringan global yang menghubungkan berbagai komputer di seluruh dunia?'/>
            <QuestionToAnswer title='Apa itu aplikasi berbasis microservices, dan mengapa arsitektur ini semakin populer dalam pengembangan aplikasi modern?'/>
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