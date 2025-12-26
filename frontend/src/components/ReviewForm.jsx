import { useState } from "react";
import { createReview } from "../api/reviewApi";

export default function ReviewForm({ onSuccess }) {
    const [form, setForm] = useState({
        title: "",
        content: "",
        rating: 5,
        author: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createReview(form);
        setForm({ title: "", content: "", rating: 5, author: "" });
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>리뷰 작성</h2>
        <input
            name="title"
            placeholder="제목"
            onChange={handleChange}
            value={form.title}
        />
        <input
            name="author"
            placeholder="작성자"
            onChange={handleChange}
            value={form.author}
        />
        <textarea
            name="content"
            placeholder="내용"
            onChange={handleChange}
            value={form.content}
        />
        <input
            name="rating"
            type="number"
            min="1"
            max="5"
            onChange={handleChange}
            value={form.rating}
        />
        <button type="submit">등록</button>
        </form>
    );
}
