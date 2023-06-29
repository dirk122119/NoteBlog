import Image from "next/image"
export default function Logo(props:any){
    const {renderDefault,title} = props
    return (
        <div className="flex items-center space-x-2">
            <Image
            className="rounded-full"
            width={50}
            height={50}
            src="/logo.png"
            alt="LOGO"/>
            {renderDefault &&<>{renderDefault(props)}</>}
        </div>
    )

}