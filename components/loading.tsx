import Image from "next/image";

export default function Loading (){
    return <div className="d-flex align-items-center justify-content-center">
        <Image src="/images/loading.gif" width={200} height={200} alt="loading"/>
    </div>
}