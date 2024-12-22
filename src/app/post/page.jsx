'use client';

import { redirect } from "next/navigation";
import { useState } from "react"
import Swal from "sweetalert2";

export default function PostMessage() {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");

    const Success = () => Swal.fire({
        icon: 'success',
        title: '메세지가 성공적으로 저장되었습니다.',
        text: '성공!'
    });
    const Fail  = () => Swal.fire({
        icon: 'error',
        title: '메세지 저장에 실패했습니다.',
        text: '실패!'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            title: title,
            writer: writer,
            message: content
        }
        let response = await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if(response.ok){
            Success();
            setTitle("");
            setWriter("");
            setContent("");
            redirect("/messages");
        }
    }
    return(
        <div className="d-flex flex-column">
            <form className="d-flex flex-column" style={{width: 50+'%', margin: 2+'rem'}} 
                onSubmit={handleSubmit} method="POST" action="/api/messages">
                <h3>글 작성하기</h3>
                <div className="form-floating mb-3">
                    <label htmlFor="title">제목</label>
                    <input
                        className="form-control"
                        required
                        type="text"
                        name="title"
                        value={title}
                        placeholder="TITLE"
                        onChange={(e) => setTitle(e.target.value)}
                    />                    
                </div>
                <div className="form-floating mb-3">
                    <label htmlFor="writer">글쓴이</label>
                    <input
                        className="form-control"
                        required
                        type="text"
                        name="writer"
                        value={writer}
                        placeholder="WRITER"
                        onChange={(e) => setWriter(e.target.value)}
                    />                    
                </div>
                <div className="form-floating">
                    <label htmlFor="content">내용</label>
                    <textarea
                        className="form-control"
                        required
                        name="message"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <input
                    type="submit" 
                    value="메시지 남기기"
                    className="btn btn-primary" 
                    style={{marginTop: 1+'rem'}}/>
            </form>
        </div>
    )
}