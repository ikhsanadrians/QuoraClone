type RoomProps = {
  imageUrl?: string,
  title: string,
}


export default function Room({imageUrl,title} : RoomProps) {
  return (
                 <li className="the-room hover:bg-gray-100 cursor-pointer font-semibold border-b-[1.5px] border-gray-300 py-2 text-sm ">
                    <div className="room-wrapper flex items-center px-4 gap-3 ">
                    <div className="room-thumbnails h-6 w-6 overflow-hidden rounded-md object-cover border-[1.5px] border-gray-200">
                        <img className="object-cover w-full h-full" src={imageUrl ? imageUrl : "https://qph.cf2.quoracdn.net/main-thumb-ti-1721737-100-rpusataldgresgdqtcqkhbmsupnggpou.jpeg"}  alt="thumbnail" />
                    </div>
                    <h1 className="font-bold">
                        {title}
                    </h1>
                    </div>
                  </li>
        )
}
  