import { useEffect, useState } from "react";
import Header from "../components/Header";
import ReviewList from "../components/ReviewList";
import ReviewFormModal from "../components/ReviewFormModal";
import { createReview, deleteReview, fetchReviews, uploadReviewImage } from "../api/reviewApi";

export default function Home() {
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const loadReviews = async () => {
        const data = await fetchReviews();
        setReviews(data);
    };

    const handleDelete = async (id) => {
        await deleteReview(id);
        loadReviews();
    };

    const handleSubmit = async (payload) => {
        try {
            setIsSubmitting(true);
            let imageUrl;

            if (payload.imageFile) {
                imageUrl = await uploadReviewImage(payload.imageFile);
            }

            await createReview({
                title: payload.title,
                content: payload.content,
                rating: payload.rating,
                author: payload.author,
                image_url: imageUrl,
            });
            await loadReviews();
            setIsModalOpen(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        loadReviews();
    }, []);

    return (
        <>
            <Header onWriteClick={() => setIsModalOpen(true)} />
            <ReviewList reviews={reviews} onDelete={handleDelete} />
            {isModalOpen && (
                <ReviewFormModal
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleSubmit}
                    loading={isSubmitting}
                />
            )}
        </>
    );
}
