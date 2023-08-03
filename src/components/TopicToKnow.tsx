
export default function TopicToKnow() {
    return ( <div className="topics mt-4 w-[20%]">
        <div className="topic-top flex gap-2 justify-between items-center py-2 border-b-[1.5px] border-b-gray-300 mb-2">
            <div className="topic-to-know">
                <h1 className='font-semibold'>Topic yang Anda Tahu</h1>
            </div>
            <div className="topic-edit border-[1.6px] border-gray-300 p-1 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path></g></svg>
            </div>
        </div>
        <div className="topic-hint bg-white rounded-md px-4 py-8 flex flex-col gap-2 items-center justify-center text-center text-sm">
            <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="topic-hint" className='h-12 w-12' />
            <h1 className='font-bold text-gray-600'>Belum ada topik</h1>
            <p className='text-xs'>
                Anda akan mendapatkan pertanyaan yang lebih baik jika menambahkan topik yang bersifat lebih spesifik.
            </p>
            <button className='border-[1.5px] border-blue-500 py-2 px-3 rounded-full font-semibold text-blue-500 mt-2'>Tambah Topik</button>
        </div>
    </div> )
}
