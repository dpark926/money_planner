import { PieChart, Pie, Sector, Cell } from "recharts";
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
    <div className="col-12 mx4">
      <div>
        <h2 className="px2">Debt Summary</h2>
        <div className="flex border-top">
          <div className="col-6 p2 center border-bottom border-right pointer">
            1 Month
          </div>
          <div className="col-6 p2 center border-bottom pointer">12 Month</div>
        </div>
        <div className="px2">
          {currentBalances.map((account, idx) => {
            return (
              <div key={idx + account}>
                <div className="flex pt2 pb1">
                  <div className="col-8 m0 py2 justify-center">
                    <div className="flex">
                      <h3 className="uppercase m0">{account.account}:</h3>
                      <h3 className="normal flex-auto right-align m0">
                        {`$${numWithCommas(
                          Math.round(account.currentBalance)
                        )}`}{" "}
                        / $
                        {numWithCommas(account.creditLine)}
                      </h3>
                    </div>
                    <div className="flex pt2">
                      <h5 className="m0">$</h5>
                      <h5 className="m0">[%]</h5>
                    </div>
                  </div>
                  <div className="col-4 flex flex-column items-center">
                    <PieChart width={80} height={80}>
                      <Pie
                        data={pieData[idx]}
                        cx={35}
                        cy={35}
                        startAngle={0}
                        endAngle={360}
                        innerRadius={25}
                        outerRadius={40}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="amt"
                      >
                        {pieData[idx].map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                    <div>
                      <h3 className="m0">
                        {Math.round(
                          100 * (account.currentBalance / account.creditLine)
                        )}
                        % Usage
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt3">
        <h2 className="px2">Interest Summary</h2>
        <div className="flex border-top">
          <div className="col-6 p2 center border-bottom border-right pointer">
            1 Month
          </div>
          <div className="col-6 p2 center border-bottom pointer">12 Month</div>
        </div>
        {currentBalances.map((account, idx) => {
          return (
            <h3 className="px2" key={idx}>{`${account.account}: $ ${
              account.interest
            }`}</h3>
          );
        })}
        <div className="px2 right-align">
          <h3>Interest Paid Last Month:</h3>
          <h2>$ {totalInterest}</h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;
