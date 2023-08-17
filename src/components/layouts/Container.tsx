import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}



const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="container mx-auto h-full mb-8">
            <div className="container w-full lg:max-w-[1090px] h-full mx-auto mt-0 md:mt-5 sm:mt-5 lg:mt-5">
                <div className="content-wrappers lg:flex lg:gap-6">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Container