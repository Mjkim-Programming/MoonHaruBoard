'use client';

import { redirect } from "next/navigation";
import { useState } from "react"

export default function PostMessage() {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");

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
            alert("메세지가 성공적으로 저장되었습니다.");
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
                <label htmlFor="title">제목</label>
                <input
                    required
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="writer">글쓴이</label>
                <input
                    required
                    type="text"
                    name="writer"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                />
                <label htmlFor="content">내용</label>
                <textarea
                    required
                    name="message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input type="submit" value="메시지 남기기" style={{marginTop: 1+'rem'}}/>
            </form>
        </div>
    )
}