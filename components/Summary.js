import { numWithCommas, formatMoney } from "../utils/functions";

const Summary = props => {
  const { currentBalances, totalInterest, interestSummaryTab } = props;

  console.log(currentBalances);

  const pieData = currentBalances.map((accnt, idx) => {
    return [
      { amt: accnt.currentBalance },
      { amt: accnt.creditLine - accnt.currentBalance }
    ];
  });

  const COLORS = ["#FF8042", "#0088FE"];

  return (
    <div className="box-shadow ml3">
      <div>
        <h3 className="p2 border-bottom normal">Interest Summary</h3>
        <div className="flex px2 pb1">
          <div className="pr1">
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
          <div className="flex-auto" />
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
        <h3 className="p2 m0 border-bottom normal">Credit Cards</h3>
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
                    <div className="flex pt1 pl2">
                      <h5 className="m0 normal">
                        ${formatMoney(
                          account.currentBalance - account.previousBalance
                        )}
                      </h5>
                      <h5 className="m0 normal pl1">
                        [{" "}
                        {Math.round(
                          ((account.currentBalance - account.previousBalance) /
                            account.currentBalance) *
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
