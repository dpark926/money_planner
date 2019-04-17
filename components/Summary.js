import { numWithCommas, formatMoney } from "../utils/functions";

const Summary = props => {
  const { currentBalances, totalInterest, interestSummaryTab } = props;

  return (
    <div className="box-shadow rounded ml3">
      <div>
        <div className="p2 light-gray border-bottom">
          <h3 className="black normal m0">Interest Summary</h3>
        </div>
        <div className="flex mt2 px2 pb1 justify-center">
          <div className="pr2">
            <p
              className={`m0 h5 ${interestSummaryTab === "1M" &&
                "border-bottom"} pointer`}
            >
              1M
            </p>
          </div>
          <div>
            <p
              className={`m0 h5 ${interestSummaryTab === "12M" &&
                "border-bottom"} pointer`}
            >
              12M
            </p>
          </div>
        </div>
        {currentBalances.map((account, idx) => {
          return (
            <div className="flex">
              <h4
                className="flex-auto px2 mx0 my1 normal"
                key={idx}
              >{`${account.account.toUpperCase()}`}</h4>
              <h4 className="pr2 mx0 my1 normal">{`$ ${account.interest}`}</h4>
            </div>
          );
        })}
        <div className="px2 right-align">
          <h4 className="mx0 my1 normal">Interest Paid Last Month:</h4>
          <h2 className="mx0 my1 normal">$ {totalInterest}</h2>
        </div>
      </div>
      <div>
        <div className="p2 light-gray border-bottom">
          <h3 className="black normal m0">Credit Cards</h3>
        </div>
        <div>
          {currentBalances.map((account, idx) => {
            return (
              <div key={idx + account}>
                <div className="flex p2">
                  <div className="col-4 m0 justify-center">
                    <h4 className="uppercase m0 normal">{account.account}</h4>
                  </div>
                </div>
                <div className="flex flex-column px2">
                  <div className="flex col-12 m0">
                    <h4 className="flex-auto normal m0">
                      <span className="h2">
                        {`$${numWithCommas(
                          Math.round(account.currentBalance)
                        )}`}{" "}
                      </span>
                      / $
                      {numWithCommas(account.creditLine)}
                    </h4>
                    <div
                      className={`flex pt1 pl2 ${
                        account.currentBalance - account.previousBalance > 0
                          ? "pink"
                          : "green"
                      }`}
                    >
                      <h5 className="m0 normal">
                        ${formatMoney(
                          account.currentBalance - account.previousBalance
                        )}
                      </h5>
                      <h5 className="m0 normal pl1">
                        [{" "}
                        {Math.round(
                          ((account.currentBalance - account.previousBalance) /
                            account.previousBalance) *
                            100
                        )}% ]
                      </h5>
                    </div>
                  </div>
                  <div className="flex py1 items-center">
                    <div className="flex col-8">
                      <div
                        className="bg-pink"
                        style={{
                          width:
                            Math.round(
                              100 *
                                (account.currentBalance / account.creditLine)
                            ) + "%",
                          height: "10px"
                        }}
                      />
                      <div
                        className={`${
                          Math.round(
                            100 * (account.currentBalance / account.creditLine)
                          ) === 0
                            ? "bg-green"
                            : "bg-light-gray"
                        } flex-auto`}
                        style={{ height: "10px" }}
                      />
                    </div>
                    <div className="col-4 right">
                      <h4 className="m0 normal nowrap right-align">
                        {Math.round(
                          100 * (account.currentBalance / account.creditLine)
                        )}
                        % Usage
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          TOTAL
        </div>
      </div>
    </div>
  );
};

export default Summary;
