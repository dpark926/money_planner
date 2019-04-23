import Title from "./Title";
import ProgressBar from "./ProgressBar";
import { numWithCommas, formatMoney, changePercent } from "../utils/functions";

const CreditCardSummary = props => {
  const {
    currentBalances,
    totalBalance,
    previousBalance,
    totalCreditLine
  } = props;

  return (
    <div className="mr1 py3 px2">
      <Title title={"Credit Cards"} />
      <div className="py1">
        <div className="flex px2">
          <div>
            <h4 className="h5 uppercase mx0 my1 lighter">TOTAL</h4>
          </div>
          <div className="flex-auto right-align">
            <h4 className="lighter m0">
              <span className="h2">
                {`$${numWithCommas(Math.round(totalBalance))}`}{" "}
              </span>
              / $
              {numWithCommas(totalCreditLine)}
            </h4>
            <div
              className={`flex pt1 right ${
                totalBalance - previousBalance > 0 ? "pink" : "green"
              }`}
            >
              <h5 className="m0 lighter">
                ${formatMoney(totalBalance - previousBalance)}
              </h5>
              <h5 className="m0 lighter pl1">
                [{" "}
                {previousBalance === 0
                  ? Math.round(100 * (totalBalance / totalCreditLine))
                  : changePercent(totalBalance, previousBalance)}
                % ]
              </h5>
            </div>
          </div>
        </div>
        <ProgressBar
          currentBalance={totalBalance}
          creditLine={totalCreditLine}
        />
      </div>
      {props.currentBalances.map((account, idx) => {
        return (
          <div className="py1" key={idx + account}>
            <div className="flex px2">
              <div>
                <h4 className="h5 uppercase mx0 my1 lighter">
                  {account.account}
                </h4>
              </div>
              <div className="flex-auto right-align">
                <h4 className="lighter m0">
                  <span className="h2">
                    {`$${numWithCommas(Math.round(account.currentBalance))}`}{" "}
                  </span>
                  / $
                  {numWithCommas(account.creditLine)}
                </h4>
                <div
                  className={`flex pt1 right ${
                    account.currentBalance - account.previousBalance > 0
                      ? "pink"
                      : "green"
                  }`}
                >
                  <h5 className="m0 lighter">
                    ${formatMoney(
                      account.currentBalance - account.previousBalance
                    )}
                  </h5>
                  <h5 className="m0 lighter pl1">
                    [{" "}
                    {account.previousBalance === 0
                      ? Math.round(
                          100 * (account.currentBalance / account.creditLine)
                        )
                      : changePercent(
                          account.currentBalance,
                          account.previousBalance
                        )}
                    % ]
                  </h5>
                </div>
              </div>
            </div>
            <ProgressBar
              currentBalance={account.currentBalance}
              creditLine={account.creditLine}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CreditCardSummary;
