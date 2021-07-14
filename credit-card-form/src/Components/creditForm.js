function CreditForm() {
  const monthList = [
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
  const yearList = [
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
  return (
    <div className="form-container card">
      <label>
        Card Number
        <input type="text" />
      </label>
      <label>
        Card Holders
        <input type="text" />
      </label>
      <span>
        <label className="expiration-date-conatiner">
          Experiation Date
          <div>
            <select style={{ marginRight: "1em" }}>
              <option value="00" selected hidden disabled>
                Month
              </option>
              {monthList.map((month) => {
                return (
                  <option value={month} key={month}>
                    {month}
                  </option>
                );
              })}
            </select>
            <select>
              <option value="00" selected hidden>
                Year
              </option>
              {yearList.map((year) => {
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
          <input type="text" />
        </label>
      </span>
      <button className="btn-active">Submit</button>
    </div>
  );
}

export default CreditForm;
