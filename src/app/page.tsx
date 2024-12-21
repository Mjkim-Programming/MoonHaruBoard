import Link from "next/link";


/**
 * @todo HTML Form을 이용해서 메세지 저장할 수 있도록 하기
 */
export default function Home() {
    return(
        <div className="align-middle" style={{width: 100+'%'}}>
            <h1>Happy Birthday!</h1>
            <Link href="/messages">메세지 확인하기</Link>
            <br/>
            <Link href="/post">메세지 남기기</Link>
        </div>
    )
};