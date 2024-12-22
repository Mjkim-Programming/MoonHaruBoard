import Link from "next/link";
import type { Metadata } from "next";

export const metadata:  Metadata = {
    title: 'MoonHaruBoard',
};


/**
 * HTML Form을 이용해서 메세지 저장할 수 있도록 하기
 * 메세지 저장 후 메세지 확인 페이지로 이동하기
 *  메세지를 저장하는 API ROUTE 만들기
 */
export default function Home() {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height: 100+'vh'}}>
            <h1>Happy Birthday!</h1>
            <Link href="/messages" className="btn btn-primary mt-2">메세지 확인하기</Link>
            <Link href="/post" className="btn btn-primary mt-2">메세지 남기기</Link>
        </div>
    )
};