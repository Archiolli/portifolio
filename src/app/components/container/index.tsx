'use client'
export default function Container({children}: any) {
    return (
        <div className="flex md:flex-row flex-col justify-center h-full w-screen">
           {children}
        </div>
    )
}
