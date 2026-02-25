import './PurchasedCard.css';
import '../../styles/layout.css';
import '../../styles/typography.css';
import '../../styles/tokens.css';

const PurchasedCard = ({ icon, title, description, onClick }) => {
    return (
        <button className="purchased-card" onClick={onClick}>
        <div className="purchased-icon">
            <span className="purchase-icon-content">
            {icon}
            </span>
        </div>  
        <div className="purchased-info">
            <h3 className="purchased-title">{title}</h3>
            <p className="purchased-description">{description}</p>  
        </div>
    </button>
    );
};

export default PurchasedCard;