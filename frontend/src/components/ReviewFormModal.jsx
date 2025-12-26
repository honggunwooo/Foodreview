import { useState } from "react";
import "../styles/review.css";

const initialState = {
    title: "",
    content: "",
    rating: 5,
    author: "",
};

export default function ReviewFormModal({ onClose, onSubmit, loading }) {
    const [form, setForm] = useState(initialState);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const clearImage = () => {
        setImageFile(null);
        setImagePreview("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({
            ...form,
            rating: Number(form.rating) || 0,
            imageFile,
        });
        setForm(initialState);
        clearImage();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal__header">
                    <div>
                        <p className="modal__eyebrow">새로운 리뷰</p>
                        <h2>맛있는 기록 남기기</h2>
                        <span>최근에 먹은 음식 경험을 공유해보세요.</span>
                    </div>
                    <button className="modal__close" aria-label="모달 닫기" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form className="modal__body" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <label className="field">
                            <span>제목</span>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="예: 신선한 회와 초밥"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>작성자</span>
                            <input
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                                placeholder="예: 소시 오야카케"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>별점</span>
                            <div className="rating-select">
                                {[1, 2, 3, 4, 5].map((score) => (
                                    <label key={score} className="rating-pill">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={score}
                                            checked={Number(form.rating) === score}
                                            onChange={handleChange}
                                        />
                                        <span>{"★".repeat(score)}</span>
                                    </label>
                                ))}
                            </div>
                        </label>

                        <label className="field field--full">
                            <span>사진</span>
                            <div className="upload-box">
                                <div className="upload-actions">
                                    <label className="primary-btn upload-btn">
                                        이미지 선택
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    {imagePreview && (
                                        <button type="button" className="ghost-btn" onClick={clearImage}>
                                            선택 취소
                                        </button>
                                    )}
                                </div>
                                <p className="upload-hint">
                                    음식 사진을 선택하면 카드 상단에 예쁘게 보여줄게요.
                                </p>
                                {imagePreview && (
                                    <div className="upload-preview">
                                        <img src={imagePreview} alt="선택한 이미지 미리보기" />
                                    </div>
                                )}
                            </div>
                        </label>

                        <label className="field field--full">
                            <span>내용</span>
                            <textarea
                                name="content"
                                value={form.content}
                                onChange={handleChange}
                                rows="4"
                                placeholder="리뷰 내용을 입력하세요."
                                required
                            />
                        </label>
                    </div>

                    <div className="modal__footer">
                        <button type="button" className="ghost-btn" onClick={onClose}>
                            취소
                        </button>
                        <button type="submit" className="primary-btn" disabled={loading}>
                            {loading ? "등록 중..." : "리뷰 등록"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
