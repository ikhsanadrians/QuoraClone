function MobileNotificationHeader() {
  return (
    <div className="notif-head lg:hidden md:hidden flex justify-between items-center border-b-[1.5px] lg:bg-transparent md:bg-transparent bg-white border-gray-300 p-4 lg:pb-1 lg:p-0">
    <div className="notif-title text-gray-600 font-semibold">
      <h1>Tandai Semua Sudah Dibaca</h1>
    </div>
    <div className="notif-settings flex text-[13px] items-center gap-2 text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5">
        <use xlinkHref="#filter-knob"></use>
        <use xlinkHref="#filter-knob" x="6.863" y="9.15"></use>
        <use xlinkHref="#filter-knob" x="-6.863" y="9.15"></use>
        <path d="M11.913 10.125v11.057m0-18.301v1.906m6.863 14.489v1.906m0-18.301v11.057" strokeLinecap="round"></path>
      </g>
      <defs>
        <path className="icon_svg-stroke icon_svg-fill" id="filter-knob" d="M14.582 7.457a2.67 2.67 0 0 1-2.669 2.669 2.67 2.67 0 0 1-2.669-2.669 2.67 2.67 0 0 1 2.669-2.669 2.67 2.67 0 0 1 2.669 2.669z"></path>
      </defs>
    </svg>
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="none" fill="none" fill-rule="evenodd"><g id="settings" className="icon_svg-stroke icon_svg-fill" transform="translate(2.000000, 2.000000)" stroke="#666666" stroke-width="1.5"><path d="M13.125,10 C13.125,11.7260417 11.7260417,13.125 10,13.125 C8.27447917,13.125 6.875,11.7260417 6.875,10 C6.875,8.27447917 8.27447917,6.875 10,6.875 C11.7260417,6.875 13.125,8.27447917 13.125,10 Z" id="Stroke-1"></path><path d="M20,10 C20,9.61764706 19.9717647,9.24176471 19.9264706,8.87176471 C19.8994118,8.65 19.7429412,8.46470588 19.5317647,8.39235294 L17.0682353,7.55 C16.7329412,7.43529412 16.5747059,7.05235294 16.7305882,6.73470588 L17.8752941,4.40058824 C17.9747059,4.19764706 17.9535294,3.95235294 17.8123529,3.77529412 C17.3441176,3.18823529 16.8117647,2.65588235 16.2247059,2.18764706 C16.0482353,2.04647059 15.8023529,2.02529412 15.5994118,2.12470588 L13.2658824,3.26941176 C12.9476471,3.42588235 12.5647059,3.26705882 12.45,2.93176471 L11.6076471,0.468235294 C11.5358824,0.257058824 11.3505882,0.100588235 11.1282353,0.0735294118 C10.7582353,0.0282352941 10.3829412,0 10,0 C9.61764706,0 9.24176471,0.0282352941 8.87176471,0.0735294118 C8.65,0.100588235 8.46470588,0.257058824 8.39235294,0.468235294 L7.55,2.93176471 C7.43529412,3.26705882 7.05235294,3.42588235 6.73470588,3.26941176 L4.40058824,2.12470588 C4.19823529,2.02529412 3.95235294,2.04647059 3.77529412,2.18764706 C3.18823529,2.65588235 2.65588235,3.18823529 2.18764706,3.77529412 C2.04647059,3.95235294 2.02529412,4.19764706 2.12529412,4.40058824 L3.27,6.73470588 C3.42588235,7.05235294 3.26705882,7.43529412 2.93176471,7.55 L0.468235294,8.39235294 C0.257058824,8.46470588 0.100588235,8.65 0.0735294118,8.87176471 C0.0282352941,9.24176471 0,9.61764706 0,10 C0,10.3823529 0.0282352941,10.7582353 0.0735294118,11.1282353 C0.100588235,11.35 0.257058824,11.5352941 0.468235294,11.6076471 L2.93176471,12.45 C3.26705882,12.5647059 3.42588235,12.9476471 3.27,13.2658824 L2.12529412,15.5994118 C2.02529412,15.8023529 2.04647059,16.0476471 2.18764706,16.2247059 C2.65588235,16.8117647 3.18823529,17.3441176 3.77529412,17.8123529 C3.95235294,17.9535294 4.19764706,17.9747059 4.40058824,17.8752941 L6.73470588,16.7305882 C7.05235294,16.5747059 7.43529412,16.7329412 7.55,17.0682353 L8.39235294,19.5317647 C8.46470588,19.7429412 8.65,19.8994118 8.87176471,19.9264706 C9.24176471,19.9717647 9.61764706,20 10,20 C10.3829412,20 10.7582353,19.9717647 11.1282353,19.9264706 C11.3505882,19.8994118 11.5358824,19.7429412 11.6076471,19.5317647 L12.45,17.0682353 C12.5647059,16.7329412 12.9476471,16.5747059 13.2658824,16.7305882 L15.5994118,17.8752941 C15.8023529,17.9747059 16.0482353,17.9535294 16.2247059,17.8123529 C16.8117647,17.3441176 17.3441176,16.8117647 17.8123529,16.2247059 C17.9535294,16.0482353 17.9747059,15.8023529 17.8752941,15.5994118 L16.7305882,13.2658824 C16.5747059,12.9476471 16.7329412,12.5647059 17.0682353,12.45 L19.5317647,11.6076471 C19.7429412,11.5352941 19.8994118,11.35 19.9264706,11.1282353 C19.9717647,10.7582353 20,10.3823529 20,10 Z" id="Stroke-3"></path></g></g></svg>
    </div>
  </div>
  )
}

export default MobileNotificationHeader