'use client'
export default function Container({children}: any) {
    return (
        <div className="sm:px-[10%] md:px[20%] 2xl:px-[30%] flex lg:flex-row flex-col justify-center h-full w-full ">
           {children}
        </div>
    )
}
