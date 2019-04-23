import Title from "./Title";
import { formatMoney } from "../utils/functions";

const InterestSummary = props => {
  const {
    currentBalances,
    totalInterest,
    interestSummaryTab,
    toggleMonth
  } = props;

  return (
    <div className="mr1 py3 px2">
      <Title title={"Interest Summary"} />
      <div className="flex mt2 px2 pb1 justify-center">
        <div className="pr2">
          <p
            className={`m0 h5 ${interestSummaryTab === "1M" &&
              "border-bottom"} pointer`}
            onClick={() => toggleMonth("1M")}
          >
            1M
          </p>
        </div>
        <div>
          <p
            className={`m0 h5 ${interestSummaryTab === "12M" &&
              "border-bottom"} pointer`}
            onClick={() => toggleMonth("12M")}
          >
            12M
          </p>
        </div>
      </div>
      {currentBalances.map((account, idx) => {
        return (
          <div className="flex">
            <h4
              className="h5 uppercase flex-auto px2 mx0 my1 lighter"
              key={idx}
            >{`${account.account}`}</h4>
            <h4 className="h5 pr2 mx0 my1 lighter">{`$ ${formatMoney(
              account.interest
            )}`}</h4>
          </div>
        );
      })}
      <div className="px2 right-align">
        <h4 className="h5 gray mx0 my1 lighter">Interest Paid Last Month:</h4>
        <h2 className="mx0 my1 lighter">$ {totalInterest}</h2>
      </div>
    </div>
  );
};

export default InterestSummary;
