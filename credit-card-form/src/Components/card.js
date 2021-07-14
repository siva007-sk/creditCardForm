import chip from "../assets/images/chip.png";
import visa from "../assets/images/visa.png";
import visaBackground from "../assets/images/16.jpeg";
function Card() {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${visaBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="card card-container" style={cardStyle}>
      <div className="card-front">
        <div className="row">
          <img src={chip} alt="chip" className="chip" />
          <img src={visa} alt="visa" className="card-logo" />
        </div>
        <div className="row card-number">
          <p >####</p>
          <p >####</p>
          <p >####</p>
          <p >####</p>
        </div>
        <div className="name-expiry-container">
          <label className="card-holder-name">
            Card Holder
            <p>John Snow</p>
          </label>
          <label className="expiry">
            Expires
            <p>MM/YY</p>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Card;
