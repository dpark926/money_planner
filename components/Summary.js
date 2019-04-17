import { numWithCommas } from "../utils/functions";

const Summary = props => {
  const { currentBalances, totalInterest } = props;

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
        <h3 className="px2 pt2 mt0 mb2 normal">Interest Summary</h3>
        <div className="flex border-top">
          <p className="col-6 p1 m0 center border-bottom border-right pointer">
            1 Month
          </p>
          <p className="col-6 p1 m0 center border-bottom pointer">12 Month</p>
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
                <div className="flex pt2 pb1 px2">
                  <div className="col-4 m0 py2 justify-center">
                    <h4 className="uppercase m0 normal">{account.account}</h4>
                  </div>
                </div>
                <div className="flex flex-column items-center">
                  <div className="flex">
                    <div className="col-7 m0">
                      <h4 className="normal flex-auto right-align m0">
                        {`$${numWithCommas(
                          Math.round(account.currentBalance)
                        )}`}{" "}
                        / $
                        {numWithCommas(account.creditLine)}
                      </h4>
                      <div className="flex pt1 justify-end">
                        <h5 className="m0">$</h5>
                        <h5 className="m0">[%]</h5>
                      </div>
                    </div>
                    <h4 className="col-5 m0 normal">
                      {Math.round(
                        100 * (account.currentBalance / account.creditLine)
                      )}
                      % Usage
                    </h4>
                  </div>
                  <div className="flex col-11" style={{ height: "10px" }}>
                    <div
                      className="bg-red"
                      style={{
                        width:
                          Math.round(
                            100 * (account.currentBalance / account.creditLine)
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
