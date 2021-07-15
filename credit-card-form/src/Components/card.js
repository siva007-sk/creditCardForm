function Card(props) {
  const chip =
    window.location.origin + "/creditCardForm/assets/images/chip.png";

  
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${setLogo(props.data.cardType).background}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="card card-container" style={cardStyle}>
      <div
        className="card-front"
        style={{ display: `${props.data.show === "front" ? "block" : "none"}` }}
      >
        <div className="row">
          <img src={chip} alt="chip" className="chip" />
          <img src={setLogo(props.data.cardType).logo} alt="visa" className="card-logo" />
        </div>
        <div className="row card-number">
          {formatCardNumber(props.data.cardNumber).map((numberChunk) => {
            return <p>{numberChunk}</p>;
          })}
        </div>
        <div className="name-expiry-container">
          <label className="card-holder-name">
            Card Holder
            <p>{`${props.data.cardName?props.data.cardName:"FULL NAME"}`}</p>
          </label>
          <label className="expiry">
            Expires
            <p>{`${props.data.expiryMonth}/${props.data.expiryYear.slice(
              2,
              4
            )}`}</p>
          </label>
        </div>
      </div>
      <div
        className="card-back"
        style={{ display: `${props.data.show === "back" ? "block" : "none"}` }}
      >
        <div className="balck-strip"></div>
        <div style={{ margin: "1em 0em" }}>
          <label className="cvv-label">cvv</label>
          <input
            type="text"
            style={{ textAlign: "right" }}
            value={props.data.cvv}
          />
        </div>
        <img src={setLogo(props.data.cardType).logo} alt="visa" className="card-logo-alt" />
      </div>
    </div>
  );
}
function formatCardNumber(number) {
  const numberSize = number.length;
  if (numberSize < 16) {
    for (let i = numberSize; i < 16; i++) {
      number += "#";
    }
  }
  return [
    number.slice(0, 4),
    number.slice(4, 8),
    number.slice(8, 12),
    number.slice(12, 16),
  ];
}
function setLogo(cardType) {
  if (cardType === "AMEX") {
    return {
      logo: window.location.origin + "/creditCardForm/assets/images/amex.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/2.jpeg",
    };
  } else if (cardType === "DINERSCLUB") {
    return {
      logo:
        window.location.origin + "/creditCardForm/assets/images/dinersclub.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/7.jpeg",
    };
  } else if (cardType === "DISCOVER") {
    return {
      logo:
        window.location.origin + "/creditCardForm/assets/images/discover.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/14.jpeg",
    };
  } else if (cardType === "JCB") {
    return {
      logo: window.location.origin + "/creditCardForm/assets/images/jcb.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/10.jpeg",
    };
  } else if (cardType === "MASTERCARD") {
    return {
      logo:
        window.location.origin + "/creditCardForm/assets/images/mastercard.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/9.jpeg",
    };
  } else if (cardType === "TROY") {
    return {
      logo: window.location.origin + "/creditCardForm/assets/images/troy.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/3.jpeg",
    };
  } else if (cardType === "UNIONPAY") {
    return {
      logo:
        window.location.origin + "/creditCardForm/assets/images/unionpay.png",
      background:
        window.location.origin + "/creditCardForm/assets/images/4.jpeg",
    };
  }
  return {
    logo: window.location.origin + "/creditCardForm/assets/images/visa.png",
    background:
      window.location.origin + "/creditCardForm/assets/images/16.jpeg",
  };
}
export default Card;
