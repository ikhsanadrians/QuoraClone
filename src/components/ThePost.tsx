import Koko from '../../public/assets/images/koko.jpeg';
import Thumb from '../../public/assets/images/webtex.jpeg';


const dummyAnswersText : string = "1. Mintalah dispensasi waktu belajar ke sekolah Agar mendapat hasil yang maksimal, kalian bisa coba untuk meminta dispensasi waktu belajar ke pihak sekolah untuk latihan LKS. Misalnya, setiap hari selasa kalian izin ke lab komputer untuk belajar soal-soal lomba. Jika sudah mendekati waktu lomba, minta izin agar 1-2 minggu sebelum lomba digunakan full untuk latihan. Ini sangat penting supaya bisa fokus ngembangin skill agar siap saat lomba nanti."



type PostProps = {
    author? : string,
    authorPPUrl? : string,
    authorCredentials? : string,
    question? : string,
    answer? : string,
    thumbnailUrl?: string, 
    postDate? : string,
    upvoteValue?: string,
    commentValue?: number,
    shareValue?: number
}


export default function ThePost({author,authorPPUrl,authorCredentials,question,answer,thumbnailUrl,postDate,upvoteValue,commentValue,shareValue} : PostProps) {
  return (<div className="the-post bg-white w-full max-h-fit mt-2 rounded-md border-[1.5px] overflow-hidden border-gray-300">
    <div className="post-header flex justify-between">
      <div className="post-profiles flex items-center gap-2 px-4 pt-3 pb-2">
        <div className="post-profile-picture overflow-hidden h-10 w-10 object-cover rounded-full border-[1.5px] border-gray-300">
          <img src={authorPPUrl ? authorPPUrl : Koko} alt="profile picture" className='w-full h-full object-cover' loading='lazy'/>
        </div>
        <div className="post-profile-data text-[13px]">
          <div className="post-profile-name font-bold ">
            <h3>{author ? author : "Abraham Gregorius"}</h3>
          </div>
          <div className="post-profile-credentials text-gray-600 truncate">
            {
               authorCredentials ? authorCredentials :  <span className='flex gap-2'>Software Engineering Student , SMKN 10 Jakarta (Lulus 2024)<span className='mr-[.8px]'>·</span><p>{postDate ? postDate : "2 Agustus"}</p></span>
            }
           
          </div>
           </div>
      </div>
      <div className="post-close px-4 pt-3 flex self-start">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666" strokeWidth="1.5"></path></svg>
      </div>
    </div>
    <div className="post-contents">
      <div className="post-text px-4 pb-2">
        <div className="post-title font-bold">
          <h1>
            {
              question ? question : "Bagaimana Caranya Juara LKS Web Technologies?"
            }
          </h1>
        </div>
        <div className="post-description relative overflow-hidden max-h-fit max-w-fit">
          <p className='text-[15px] line-clamp-3'>
            {
              answer ? answer :  dummyAnswersText
            }
           
          </p>
          <div className="detail-btn absolute bottom-0 right-0 cursor-pointer text-sky-700 bg-white">
            <p className="hover:underline">
              (lanjut)
            </p>
          </div>
        </div>
      </div>
      <div className="post-thumbnail w-full max-h-fit object-cover overflow-hidden">
        <img className='object-cover w-full h-full' src={thumbnailUrl ? thumbnailUrl : Thumb} alt="thumbnail" loading='lazy'/>
      </div>
    </div>
    <div className="post-tools bg-white px-4 py-2 w-full flex justify-between items-center gap-4">
      <div className="post-tool-left flex gap-4">
        <div className="upvote-downvote text-xs flex w-fit-content min-w-[180px] max-w-fit items-center">
          <div className="upvote  hover:bg-gray-200 flex border-[1.5px] border-gray-300 bg-gray-100 basis-[80%] items-center rounded-l-2xl">
            <div className="upvote-wrapper flex items-center py-1 pl-2 gap-1 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" stroke="#406ad5" fill="none" strokeLinejoin="round"></path></svg>
              <span className="flex items-center gap-1 text-gray-600  font-semibold">
                Dukung Naik  <p className="font-normal">{upvoteValue ? upvoteValue : 560}</p>
              </span>
            </div>
          </div>
          <div className="downvote cursor-pointer hover:bg-gray-200 border-y-[1.5px] border-gray-300 border-r-[1.5px] bg-gray-100 flex items-center basis-[20%] rounded-r-2xl">
            <div className="downvote-wrappers p-1 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>
        <div className="post-comments-button flex items-center text-gray-500 text-xs">
          <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" className="icon_svg-stroke icon_svg-fill" stroke="#666" strokeWidth="1.5" fill="none"></path></svg>
          {commentValue ? commentValue : 25}
        </div>
        <div className="post-shares flex items-center gap-1 text-gray-500 text-xs">
          <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>
          {shareValue ? shareValue : 560}
        </div>
      </div>
      <div className="post-others flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" className="icon_svg-stroke" fill="#666" stroke="#666" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
    </div>

  </div>
  )
}
