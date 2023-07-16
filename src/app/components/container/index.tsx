'use client'
export default function Container(props: any) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="container mx-auto px-4">{props.children}</div>
        </div>
    )
}
