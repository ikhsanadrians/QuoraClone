
import logoquora from '/assets/images/logoquoras.svg';
import ProfilePicture from '/assets/images/rpg.jpg';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40 hidden lg:block md:block">
            <div className="container mx-auto flex justify-center w-full h-full">
                <div className="header-wrappers flex items-center gap-6 h-full">
                    <img src={logoquora} alt="logoquora" className={`h-8 relative overflow-hidden`} />
                    <div className="menus flex gap-2 h-full p-1">
                        <Link to={'/'} className={`home hover:bg-gray-100 w-full h-full py-2 px-4 rounded-md after:content-[''] ${location.pathname == '/' && 'after:bg-red-700'} after:w-12 after:h-1 flex justify-center after:absolute after:-bottom-1 relative`}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={
                              location.pathname == '/'  ? "#b91c1c" : "#666666"} xmlns="http://www.w3.org/2000/svg"><path d="M22.02 11.46L12.63 2.45999C12.34 2.17999 11.89 2.17999 11.6 2.44999L1.99 11.45C1.77 11.66 1.69 11.99 1.8 12.27C1.91 12.56 2.19 12.74 2.5 12.74H5.25V20.49C5.25 20.9 5.59 21.24 6 21.24H9.62C10.03 21.24 10.37 20.9 10.37 20.49V16.36C10.37 15.43 11.09 14.67 12 14.62H12.12C13.08 14.62 13.87 15.4 13.87 16.37V20.5C13.87 20.91 14.21 21.25 14.62 21.25H18C18.41 21.25 18.75 20.91 18.75 20.5V12.75H21.5C21.81 12.75 22.08 12.56 22.2 12.28C22.32 12 22.24 11.67 22.02 11.46Z" fill={
                              location.pathname == '/'  ? "#b91c1c" : "#666666"}  className="icon_svg-fill_as_stroke"></path></svg>
                        </Link>
                        <Link to={'/following'} className={`following hover:bg-gray-100 w-full h-full py-2 px-4 rounded-md after:content-[''] ${location.pathname == '/following' && 'after:bg-red-700'} after:w-12 after:h-1 flex justify-center after:absolute after:-bottom-1 relative`}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={
                              location.pathname == '/following'  ? "#b91c1c" : "#666666"} xmlns="http://www.w3.org/2000/svg"><path d="M7.46001 9.04001C6.26001 9.04001 5.29001 8.07001 5.29001 6.87001C5.29001 5.67001 6.26001 4.70001 7.46001 4.70001C8.66001 4.70001 9.63001 5.67001 9.63001 6.87001C9.63001 8.07001 8.65001 9.04001 7.46001 9.04001ZM7.46001 6.20001C7.09001 6.20001 6.79001 6.50001 6.79001 6.87001C6.79001 7.24001 7.09001 7.54001 7.46001 7.54001C7.83001 7.54001 8.13001 7.24001 8.13001 6.87001C8.13001 6.50001 7.83001 6.20001 7.46001 6.20001Z" className="icon_svg-fill_as_stroke"></path><path d="M18.41 7.39001H12.22C11.81 7.39001 11.47 7.05001 11.47 6.64001C11.47 6.23001 11.81 5.89001 12.22 5.89001H18.41C18.82 5.89001 19.16 6.23001 19.16 6.64001C19.16 7.05001 18.82 7.39001 18.41 7.39001Z" className="icon_svg-fill_as_stroke"></path><path d="M18.41 14.72H12.22C11.81 14.72 11.47 14.38 11.47 13.97C11.47 13.56 11.81 13.22 12.22 13.22H18.41C18.82 13.22 19.16 13.56 19.16 13.97C19.16 14.38 18.82 14.72 18.41 14.72Z"  className="icon_svg-fill_as_stroke"></path><path d="M18.41 18.38H12.22C11.81 18.38 11.47 18.04 11.47 17.63C11.47 17.22 11.81 16.88 12.22 16.88H18.41C18.82 16.88 19.16 17.22 19.16 17.63C19.16 18.04 18.82 18.38 18.41 18.38Z"  className="icon_svg-fill_as_stroke"></path><path d="M18.41 11.06H12.22C11.81 11.06 11.47 10.72 11.47 10.31C11.47 9.9 11.81 9.56 12.22 9.56H18.41C18.82 9.56 19.16 9.9 19.16 10.31C19.16 10.72 18.82 11.06 18.41 11.06Z" className="icon_svg-fill_as_stroke"></path><path d="M7.44999 11.23L7.81999 11.87L8.18999 12.51H7.44999H6.71999L7.08999 11.87L7.44999 11.23ZM7.44999 9.73001C6.90999 9.73001 6.41999 10.02 6.14999 10.48L5.77999 11.12L5.40999 11.76C5.13999 12.22 5.13999 12.8 5.40999 13.26C5.68999 13.72 6.17999 14 6.71999 14H7.45999H8.19999C8.73999 14 9.22999 13.71 9.49999 13.25C9.76999 12.79 9.76999 12.21 9.49999 11.75L9.12999 11.11L8.75999 10.47C8.48999 10.02 7.98999 9.73001 7.44999 9.73001Z"  className="icon_svg-fill_as_stroke"></path><path d="M8.81001 19.07H6.10001C5.69001 19.07 5.35001 18.73 5.35001 18.32V15.61C5.35001 15.2 5.69001 14.86 6.10001 14.86H8.81001C9.22001 14.86 9.56001 15.2 9.56001 15.61V18.32C9.56001 18.73 9.22001 19.07 8.81001 19.07ZM6.85001 17.57H8.06001V16.36H6.85001V17.57Z"  className="icon_svg-fill_as_stroke"></path><path d="M18.5 21.75H5.5C3.71 21.75 2.25 20.29 2.25 18.5V5.5C2.25 3.71 3.71 2.25 5.5 2.25H18.5C20.29 2.25 21.75 3.71 21.75 5.5V18.5C21.75 20.29 20.29 21.75 18.5 21.75ZM5.5 3.75C4.54 3.75 3.75 4.54 3.75 5.5V18.5C3.75 19.46 4.54 20.25 5.5 20.25H18.5C19.46 20.25 20.25 19.46 20.25 18.5V5.5C20.25 4.54 19.46 3.75 18.5 3.75H5.5Z" className="icon_svg-fill_as_stroke"></path></svg>
                        </Link>
                        <Link to={'/answers'} className={`answers hover:bg-gray-100 w-full h-full py-2 px-4 rounded-md  after:content-[''] ${location.pathname == '/answers' && 'after:bg-red-700'} after:w-12 after:h-1 flex justify-center after:absolute after:-bottom-1 relative`}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={
                              location.pathname == '/answers'  ? "#b91c1c" : "#666666"}  xmlns="http://www.w3.org/2000/svg"><path d="M20.45 6.28001C20.45 5.55001 20.17 4.87001 19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17 14.98C5.09 15.06 5.03 15.16 4.99 15.27L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L8.74 19.01C8.85 18.97 8.95 18.91 9.03 18.83L19.65 8.21001C20.16 7.69001 20.45 7.01002 20.45 6.28001ZM18.59 7.15001L8.09 17.65L6.33 18.24L5.77 17.68L6.35 15.92L16.85 5.42001C17.31 4.96001 18.12 4.96001 18.58 5.42001C18.81 5.65001 18.94 5.96001 18.94 6.29001C18.94 6.62001 18.82 6.92001 18.59 7.15001Z"  className="icon_svg-fill_as_stroke"></path><path d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z"  className="icon_svg-fill_as_stroke"></path><path d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z"  className="icon_svg-fill_as_stroke"></path></svg>
                        </Link>
                        <Link to={'/spaces'} className={`rooms hover:bg-gray-100 w-full h-full py-2 px-4 rounded-md after:content-[''] ${location.pathname == '/spaces' && 'after:bg-red-700'} after:w-12 after:h-1 flex justify-center after:absolute after:-bottom-1 relative`}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={
                              location.pathname == '/spaces'  ? "#b91c1c" : "#666666"}  xmlns="http://www.w3.org/2000/svg"><path d="M17.7 9.25C16.75 9.25 15.98 9.52 15.37 9.92C15.8 10.23 16.18 10.6 16.49 11.01C16.83 10.85 17.23 10.75 17.7 10.75C19.48 10.75 20.25 12.12 20.25 12.81V20.25H17.55V21C17.55 21.26 17.5 21.51 17.41 21.75H21C21.41 21.75 21.75 21.41 21.75 21V12.81C21.75 11.32 20.34 9.25 17.7 9.25Z"  className="icon_svg-fill_as_stroke"></path><path d="M17.7 2.73C16.77 2.73 15.95 3.16 15.4 3.82C15.78 4.26 16.07 4.77 16.25 5.34C16.42 4.7 17 4.23 17.69 4.23C18.52 4.23 19.19 4.9 19.19 5.73C19.19 6.56 18.52 7.23 17.69 7.23C17.19 7.23 16.75 6.98 16.48 6.61C16.48 6.65 16.49 6.69 16.49 6.74C16.49 7.3 16.38 7.83 16.19 8.32C16.63 8.58 17.14 8.74 17.69 8.74C19.34 8.74 20.69 7.39 20.69 5.74C20.69 4.09 19.35 2.73 17.7 2.73Z" className="icon_svg-fill_as_stroke"></path><path d="M7.5 6.73C7.5 6.69 7.51 6.65 7.51 6.6C7.24 6.98 6.8 7.23 6.3 7.23C5.47 7.23 4.8 6.56 4.8 5.73C4.8 4.9 5.47 4.23 6.3 4.23C6.99 4.23 7.57 4.7 7.74 5.34C7.93 4.77 8.22 4.26 8.6 3.82C8.04 3.16 7.23 2.73 6.3 2.73C4.65 2.73 3.3 4.08 3.3 5.73C3.3 7.38 4.65 8.73 6.3 8.73C6.85 8.73 7.36 8.57 7.8 8.31C7.61 7.81 7.5 7.28 7.5 6.73Z"  className="icon_svg-fill_as_stroke"></path><path d="M12 3.73C10.35 3.73 9 5.08 9 6.73C9 8.38 10.35 9.73 12 9.73C13.65 9.73 15 8.38 15 6.73C15 5.08 13.65 3.73 12 3.73ZM12 8.23C11.17 8.23 10.5 7.56 10.5 6.73C10.5 5.9 11.17 5.23 12 5.23C12.83 5.23 13.5 5.9 13.5 6.73C13.5 7.56 12.83 8.23 12 8.23Z" className="icon_svg-fill_as_stroke"></path><path d="M6.45 21V20.25H3.75V12.81C3.75 12.11 4.52 10.75 6.3 10.75C6.79 10.75 7.18 10.86 7.5 11.01C7.81 10.6 8.19 10.23 8.63 9.92C7.97 9.49 7.17 9.25 6.3 9.25C3.66 9.25 2.25 11.32 2.25 12.81V21C2.25 21.41 2.59 21.75 3 21.75H6.59C6.5 21.51 6.45 21.26 6.45 21Z" className="icon_svg-fill_as_stroke"></path><path d="M7.95 21C7.95 21.41 8.29 21.75 8.7 21.75H15.3C15.71 21.75 16.05 21.41 16.05 21V13.91C16.05 12.42 14.64 10.35 12 10.35C9.36 10.35 7.95 12.42 7.95 13.91V21ZM9.45 13.91C9.45 13.21 10.22 11.85 12 11.85C13.78 11.85 14.55 13.22 14.55 13.91V20.25H9.45V13.91Z" className="icon_svg-fill_as_stroke"></path></svg>
                        </Link>
                        <Link to={'/notifications'} className={`notification hover:bg-gray-100 w-full h-full py-2 px-4 rounded-md after:content-[''] ${location.pathname == '/notifications' && 'after:bg-red-700'} after:w-12 after:h-1 flex justify-center after:absolute after:-bottom-1 relative`}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={
                              location.pathname == '/notifications'  ? "#b91c1c" : "#666666"}  xmlns="http://www.w3.org/2000/svg"><path d="M20.86 14.93L20.48 14.54C20.22 14.27 19.98 14 19.76 13.73C19.57 13.49 19.4 13.27 19.26 13.07C19.07 12.79 18.99 12.62 18.96 12.55C18.93 12.46 18.81 12.1 18.73 11.12C18.68 10.5 18.66 9.8 18.67 9.12C18.67 9.05 18.67 8.97 18.67 8.87C18.66 5.22 15.67 2.25 11.99 2.25C8.30999 2.25 5.31999 5.23 5.31999 8.89V9.11C5.32999 9.81 5.30999 10.51 5.25999 11.12C5.17999 12.09 5.06999 12.46 5.02999 12.54C4.99999 12.62 4.91999 12.78 4.72999 13.06C4.58999 13.26 4.42999 13.48 4.22999 13.72C4.01999 14 3.77999 14.27 3.51999 14.54L3.27999 14.79C3.22999 14.84 3.17999 14.89 3.15999 14.91C2.76999 15.28 2.54999 15.79 2.54999 16.32V17.1C2.54999 17.96 3.24999 18.65 4.10999 18.65H8.21999C8.56999 20.41 10.13 21.75 12 21.75C13.87 21.75 15.43 20.42 15.78 18.65H19.89C20.75 18.65 21.45 17.95 21.45 17.1V16.32C21.44 15.78 21.22 15.26 20.86 14.93ZM12 20.25C10.97 20.25 10.1 19.58 9.77999 18.65H14.22C13.9 19.58 13.03 20.25 12 20.25ZM19.88 17.15L4.05999 17.1V16.32C4.05999 16.2 4.10999 16.08 4.22999 15.97L4.60999 15.59C4.88999 15.29 5.15999 14.99 5.39999 14.7C5.62999 14.42 5.81999 14.16 5.98999 13.92C6.18999 13.62 6.33999 13.34 6.43999 13.11C6.58999 12.72 6.69999 12.1 6.76999 11.25C6.81999 10.59 6.83999 9.85 6.82999 9.08V8.9C6.82999 6.06 9.15999 3.75 12.01 3.75C14.86 3.75 17.19 6.05 17.19 8.87V9.08C17.18 9.83 17.2 10.58 17.25 11.24C17.32 12.08 17.42 12.71 17.58 13.1C17.67 13.34 17.82 13.61 18.03 13.91C18.19 14.15 18.39 14.41 18.62 14.69C18.86 14.98 19.13 15.28 19.41 15.58L19.82 15.99C19.91 16.08 19.96 16.19 19.96 16.32L19.88 17.15Z" className="icon_svg-fill_as_stroke"></path></svg>
                        </Link>

                    </div>
                    <div className="inputs relative overflow-hidden flex items-center w-80">
                        <div className="icons absolute z-10 left-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1    0 15Zm10.45 2.95L16 16l4.95 4.95Z" className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <input type="text" placeholder='Cari Quora' className="relative -z-5 py-2 pl-9 outline-none border-[1.5px] text-xs hover:border-blue-500 border-gray-200 focus:border-blue duration-200 rounded-md w-full" />
                    </div>
                    <div className="profile-pic-lang-switch flex items-center gap-3">
                        <div className="profile-pictures h-6 w-6 overflow-hidden rounded-full object-cover">
                            <img src={ProfilePicture} alt="profile-picture" className='object-cover' />
                        </div>
                        <div className="lang-switch">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12C2.25 17.38 6.62 21.75 12 21.75C17.38 21.75 21.75 17.38 21.75 12C21.75 6.62 17.38 2.25 12 2.25ZM19.34 8.25H15.82C15.31 6.17 14.43 4.78 13.69 3.92C16.16 4.44 18.22 6.07 19.34 8.25ZM14.75 12C14.75 12.83 14.69 13.57 14.59 14.25H9.41C9.31 13.57 9.25 12.83 9.25 12C9.25 11.17 9.31 10.43 9.41 9.75H14.59C14.69 10.43 14.75 11.17 14.75 12ZM12 19.66C11.42 19.17 10.34 17.99 9.72 15.75H14.28C13.66 17.99 12.58 19.16 12 19.66ZM3.75 12C3.75 11.22 3.87 10.47 4.07 9.75H7.9C7.81 10.44 7.75 11.18 7.75 12C7.75 12.82 7.81 13.56 7.9 14.25H4.07C3.87 13.53 3.75 12.78 3.75 12ZM9.72 8.25C10.34 6.01 11.43 4.84 12 4.34C12.58 4.83 13.66 6.01 14.28 8.25H9.72ZM10.31 3.92C9.57 4.78 8.69 6.17 8.18 8.25H4.66C5.78 6.07 7.84 4.44 10.31 3.92ZM4.66 15.75H8.18C8.69 17.83 9.57 19.22 10.31 20.08C7.84 19.56 5.78 17.93 4.66 15.75ZM13.69 20.08C14.43 19.22 15.31 17.83 15.82 15.75H19.34C18.22 17.93 16.16 19.56 13.69 20.08ZM19.93 14.25H16.1C16.19 13.56 16.25 12.82 16.25 12C16.25 11.18 16.19 10.44 16.1 9.75H19.93C20.13 10.47 20.25 11.22 20.25 12C20.25 12.78 20.13 13.53 19.93 14.25Z" fill="#666666" className="icon_svg-fill_as_stroke"></path></svg>
                        </div>
                    </div>
                    <div className="add-question bg-[#cc322d] overflow-hidden rounded-full text-white font-semibold flex items-center gap-2 p-[2px]">
                        <div className="add-question-side py-1 pl-3">
                            <p className='text-xs'>Tambah pertanyaan</p>
                        </div>
                        <div className="information-side items-center justify-center flex bg-[#b32723] text-white p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
