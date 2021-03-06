import Title from "./Title";
import InterestSummary from "./InterestSummary";
import CreditCardSummary from "./CreditCardSummary";
import { numWithCommas, formatMoney } from "../utils/functions";

const Summary = props => {
  const {
    currentBalances,
    totalBalance,
    previousBalance,
    totalCreditLine,
    totalInterest,
    data
  } = props;

  return (
    <div className="border-divider bg-white rounded ml3 mt2">
      <InterestSummary
        currentBalances={currentBalances}
        totalInterest={totalInterest}
        data={data}
      />
      <CreditCardSummary
        currentBalances={currentBalances}
        totalBalance={totalBalance}
        previousBalance={previousBalance}
        totalCreditLine={totalCreditLine}
      />
    </div>
  );
};

export default Summary;
