import "../styles/review.css";

const themes = [
    { cover: "#fde7ef", accent: "#d94c7c", tagBg: "#1f5fff", icon: "🍰" },
    { cover: "#e7f0fb", accent: "#4f81d0", tagBg: "#0b74ff", icon: "🍣" },
    { cover: "#fff3dc", accent: "#d5851c", tagBg: "#f2994a", icon: "🍜" },
];

const emojiForTitle = (title = "") => {
    const lower = title.toLowerCase();
    if (lower.includes("케이크") || lower.includes("빵")) return "🍰";
    if (lower.includes("초밥") || lower.includes("회")) return "🍣";
    if (lower.includes("국") || lower.includes("탕") || lower.includes("면")) return "🍜";
    return "🍴";
};

const renderStars = (ratingValue = 0) => {
    const score = Math.max(0, Math.min(5, Math.round(Number(ratingValue) || 0)));
    return Array.from({ length: 5 }, (_, idx) => (
        <span key={idx} className={idx >= score ? "dim" : ""}>
            ★
        </span>
    ));
};

const formatDate = (value) => {
    if (!value) return "날짜 미정";
    const parsed = new Date(value);
    if (Number.isNaN(parsed)) return "날짜 미정";
    return parsed.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
};

export default function ReviewCard({ review, index = 0, onDelete }) {
    const theme = themes[index % themes.length];
    const coverTitle = review?.title || "맛있는 이야기";
    const heading = review?.title || "맛집 리뷰";
    const description = review?.content || "내용이 아직 작성되지 않았어요.";
    const tagLabel = review?.tag || "맛집";
    const place = review?.author || "작성자 미입력";
    const hasImage = Boolean(review?.image_url);

    const coverStyle = hasImage
        ? {
              backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15)), url(${review.image_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
          }
        : { background: theme.cover, color: theme.accent };

    return (
        <article className="review-card">
            <button className="close-btn" aria-label="리뷰 삭제" onClick={() => onDelete(review.id)}>
                ✕
            </button>

            <div className="review-cover" style={coverStyle}>
                <span className="cover-icon">{theme.icon || emojiForTitle(coverTitle)}</span>
                <span className="cover-title">{coverTitle}</span>
            </div>

            <div className="review-body">
                <div className="stars">{renderStars(review?.rating)}</div>
                <h3>{heading}</h3>

                <div className="meta">
                    <div className="place">
                        <span className="dot" style={{ background: theme.accent }} />
                        <span>{place}</span>
                    </div>
                    <span className="tag" style={{ background: theme.tagBg }}>{tagLabel}</span>
                </div>

                <p className="description">{description}</p>
            </div>

            <div className="review-footer">
                <span>{formatDate(review?.created_at)}</span>
            </div>
        </article>
    );
}
