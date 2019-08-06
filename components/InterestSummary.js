import { useState } from "react";
import Title from "./Title";
import { formatMoney, numWithCommas } from "../utils/functions";

const InterestSummary = props => {
  const { currentBalances, totalInterest, data } = props;
  const [interestSummaryTab, setinterestSummaryTab] = useState("1M");
  const year = data.slice(Math.max(data.length - 13, 1));

  const toggleMonth = type => {
    setinterestSummaryTab(type);
  };

  let lastYearInterestSummary = {};
  let lastYearTotalInterst = 0;

  for (let i = 0; i < year.length; i++) {
    const month = year[i];
    for (let j = 0; j < month.debtAccounts.length; j++) {
      const account = month.debtAccounts[j];
      if (lastYearInterestSummary[account.name]) {
        lastYearInterestSummary[account.name] += account.interest;
        lastYearTotalInterst += account.interest;
      } else {
        lastYearInterestSummary[account.name] = account.interest;
        lastYearTotalInterst += account.interest;
      }
    }
  }

  return (
    <div className="mr1 pt3 px2">
      <Title title={"Interest Summary"} />
      <div className="flex mt2 px2 pb1 justify-center">
        <div className="pr2">
          <p
            className={`m0 h5 ${
              interestSummaryTab === "1M" ? "border-bottom black" : "gray"
            } pointer`}
            onClick={() => toggleMonth("1M")}
          >
            1M
          </p>
        </div>
        <div>
          <p
            className={`m0 h5 ${
              interestSummaryTab === "12M" ? "border-bottom black" : "gray"
            } pointer`}
            onClick={() => toggleMonth("12M")}
          >
            12M
          </p>
        </div>
      </div>
      {interestSummaryTab === "1M"
        ? currentBalances.map((account, idx) => {
            return (
              <div className="flex">
                <h4
                  className="h5 uppercase flex-auto px2 mx0 my1 lighter"
                  key={idx}
                >{`${account.account}`}</h4>
                <h4 className="h5 pr2 mx0 my1 lighter">{`$ ${numWithCommas(
                  formatMoney(account.interest)
                )}`}</h4>
              </div>
            );
          })
        : Object.keys(lastYearInterestSummary).map((account, idx) => {
            return (
              <div className="flex">
                <h4
                  className="h5 uppercase flex-auto px2 mx0 my1 lighter"
                  key={idx}
                >{`${account}`}</h4>
                <h4 className="h5 pr2 mx0 my1 lighter">{`$ ${numWithCommas(
                  formatMoney(lastYearInterestSummary[account])
                )}`}</h4>
              </div>
            );
          })}
      <div className="px2 right-align">
        <h4 className="h5 gray mx0 my1 lighter">
          Interest Paid Last{" "}
          {interestSummaryTab === "1M" ? "Month" : "12 Months"}:
        </h4>
        <h2 className="mx0 my1 lighter">
          ${" "}
          {interestSummaryTab === "1M"
            ? numWithCommas(formatMoney(totalInterest))
            : numWithCommas(formatMoney(lastYearTotalInterst))}
        </h2>
      </div>
    </div>
  );
};

export default InterestSummary;
