type NotifProps = {
    title: string,
    answersBy: string,
    times: number,
    rooms: string,
    imageURL?: string,
}


export default function Notif({title, answersBy , times, rooms , imageURL} : NotifProps) {
  return ( <div className="notif-content p-4 flex gap-4 border-b-[1.5px] border-gray-300">
            <div className="content-img h-8 w-8 overflow-hidden rounded-lg object-cover flex flex-3">
              <img className="object-cover w-full h-full" src={imageURL ? imageURL : "https://qph.cf2.quoracdn.net/main-thumb-ti-1721737-100-rpusataldgresgdqtcqkhbmsupnggpou.jpeg"} alt="thumbnail" />
            </div>
            <div className="content-text flex flex-1">
              <div className="text-wrapper">
                <span className="text-sm text-gray-600">Sorotan di {rooms} · Dijawab oleh {answersBy} · {times} jam yang lalu</span>
                <h3 className="font-bold text-base">{title}</h3>
              </div>
            </div>
            <div className="content-interact flex self-start mt-2 flex-4">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" className="icon_svg-stroke" strokeWidth="1.5" stroke="#666" fill="none"></path></svg>
            </div>
          </div> )
}
  