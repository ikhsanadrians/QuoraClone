export default function SidebarAnswers() {
    return (
        <div className="sidebar-answers lg:block hidden lg:mt-4">
            <ul className="text-[14px] flex flex-col gap-2">
                <li className="font-semibold px-3 border-b-[1.5px] border-gray-300 pb-2">Pertanyaan</li>
                <li className="text-red-700 py-1 rounded-sm font-semibold bg-[#ebdddd] px-3">Pertanyaan untuk Anda</li>
                <li className="text-gray-600 px-3">Permintaan jawaban</li>
                <li className="text-gray-600 px-3">Draf</li>
            </ul>
        </div>
    )
}
