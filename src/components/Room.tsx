
export default function Room() {
  return (
                 <li className="the-room hover:bg-gray-100 cursor-pointer font-semibold border-b-[1.5px] border-gray-300 py-2 text-sm ">
                    <div className="room-wrapper flex items-center px-4 gap-3 ">
                    <div className="room-thumbnails h-6 w-6 overflow-hidden rounded-md object-cover">
                        <img className="object-cover" src="https://qph.cf2.quoracdn.net/main-thumb-ti-1721737-100-rpusataldgresgdqtcqkhbmsupnggpou.jpeg" alt="thumbnail" />
                    </div>
                    <h1 className="font-bold">
                       Postingan Menarik Dan Bermanfaat
                    </h1>
                    </div>
                  </li>
        )
}
  