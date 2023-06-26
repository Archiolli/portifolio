'use client'
export default function Container(props : any) {
    return (
        <>
            <div className="w-full h-screen">{props.children}</div>
        </>


    )
}
