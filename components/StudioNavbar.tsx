import Link from "next/link"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#62A4F1] flex items-center">
                    {/* <ArrowUturnLeftIcon className="h-6 w-6 text-[#62A4F1] mr-2" /> */}
                    返回首頁
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

