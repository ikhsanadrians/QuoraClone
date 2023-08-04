function SidebarNotification() {
  return (
    <div className="sidebar-notification mt-4">
    <ul className="text-[14px] flex flex-col gap-2">
        <li className="font-semibold px-3 border-b-[1.5px] border-gray-300 pb-2">Filter</li>
        <li className="text-red-700 py-1 rounded-sm font-semibold bg-[#ebdddd] px-3">Semua Notifikasi</li>
        <li className="text-gray-600 px-3">Kisah</li>
        <li className="text-gray-600 px-3">Pertanyaan</li>
        <li className="text-gray-600 px-3">Ruang</li>
        <li className="text-gray-600 px-3">Pembaruan Tentang Orang</li>
        <li className="text-gray-600 px-3">Komentar dan sebutan</li>
        <li className="text-gray-600 px-3">Dukung Naik</li>
        <li className="text-gray-600 px-3">Konten Anda</li>
        <li className="text-gray-600 px-3">Profil Anda</li>
        <li className="text-gray-600 px-3">Pengumuman</li>
    </ul>
</div>
  )
}

export default SidebarNotification