'use client'
export default function Container(props : any) {
    return (
        <>
            <div className="w-screen h-screen">{props.children}</div>
        </>


    )
}
