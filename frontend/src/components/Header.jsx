import "../styles/header.css";

export default function Header({ onWriteClick = () => {} }) {
    return (
        <header className="header">
            <div className="header__content">
                <div className="brand">
                    <span className="brand__icon">🍴</span>
                    <div className="brand__text">
                        <h1>맛있는 기록</h1>
                        <p>나만의 음식 이야기를 기록하세요</p>
                    </div>
                </div>
                <button className="write-btn" onClick={onWriteClick}>
                    <span className="write-btn__icon">＋</span>
                    리뷰 쓰기
                </button>
            </div>
        </header>
    );
}
