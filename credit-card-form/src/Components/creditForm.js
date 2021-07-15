import React from "react";
import { DEFAULT_CVC_LENGTH, getCardType } from "../utils/cardTypes";
import Card from "./card";

class CreditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      cardName: "",
      expiryMonth: "MM",
      expiryYear: "YYYY",
      cvv: "",
      cardType: "",
      show: "front",
      focussed: "",
    };
  }
  // month array to show in the select dropdown
  monthList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  
  // year list to display in the select dropdown
  yearList = [
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];

  // event handler to handle change in values of the form fields
  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "cardNumber") {
      if (value.match(/^[0-9]+$/) || value === "") {
        this.setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
            cardType: getCardType(value),
          };
        });
      }
    } else if (name === "cvv") {
      if (value.match(/^[0-9]+$/) || value === "") {
        this.setState((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      }
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  // event handler to handle change in focus of the form fields
  handleFocus = (event) => {
    const { name } = event.target;
    if (name === "cvv") {
      this.setState((prevState) => {
        return {
          ...prevState,
          show: "back",
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          focussed: name,
        };
      });
    }
  };

  // event handler to handle blur events on form fields
  handleBlur = (event) => {
    const { name } = event.target;
    if (name === "cvv") {
      this.setState((prevState) => {
        return {
          ...prevState,
          show: "front",
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          focussed: "",
        };
      });
    }
  };

  render() {
    return (
      <>
        <div className="form-container card">
          <Card data={this.state} />
          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              maxLength="16"
            />
          </label>
          <label>
            Card Holders
            <input
              type="text"
              name="cardName"
              value={this.state.cardName}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </label>
          <span>
            <label className="expiration-date-conatiner">
              Experiation Date
              <div>
                <select
                  style={{ marginRight: "1em" }}
                  name="expiryMonth"
                  value={this.state.expiryMonth}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                >
                  <option value="MM" hidden disabled>
                    Month
                  </option>
                  {this.monthList.map((month) => {
                    return (
                      <option value={month} key={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="expiryYear"
                  value={this.state.expiryYear}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                >
                  <option value="YYYY" disabled hidden>
                    Year
                  </option>
                  {this.yearList.map((year) => {
                    return (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </label>
            <label className="cvv-container">
              CVV
              <input
                type="text"
                name="cvv"
                value={this.state.cvv}
                onChange={this.handleChange}
                maxLength={DEFAULT_CVC_LENGTH}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            </label>
          </span>
          <button className="btn-active">Submit</button>
        </div>
      </>
    );
  }
}

export default CreditForm;
