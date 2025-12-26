const API_BASE = 'http://localhost:3000/api/reviews';
const UPLOAD_BASE = 'http://localhost:3000/api/uploads';

export const fetchReviews = async () => {
    const res = await fetch(API_BASE);
    return res.json();
};

export const createReview = async (data) => {
    const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteReview = async (id) => {
    await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
    });
};

export const uploadReviewImage = async (file) => {
    const form = new FormData();
    form.append('image', file);

    const res = await fetch(`${UPLOAD_BASE}/review-image`, {
        method: 'POST',
        body: form,
    });

    if (!res.ok) {
        throw new Error('이미지 업로드에 실패했습니다.');
    }

    const data = await res.json();
    return data.url;
};
