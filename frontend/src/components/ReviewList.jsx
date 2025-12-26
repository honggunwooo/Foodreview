import ReviewCard from './ReviewCard';
import '../styles/review.css';

export default function ReviewList({ reviews = [], onDelete }) {
    return (
        <section className="review-grid">
            {reviews.map((r, index) => (
                <ReviewCard key={r.id} review={r} index={index} onDelete={onDelete} />
            ))}
        </section>
    );
}
