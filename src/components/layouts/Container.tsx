import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}



const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className="container mx-auto h-full">
            <div className="container max-w-[1090px] h-full mx-auto mt-5">
                <div className="content-wrappers flex gap-6">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Container