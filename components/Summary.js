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
        <h3 className="px2 normal">Credit Cards</h3>
        <div className="flex border-top">
          <p className="col-6 p1 m0 center border-bottom border-right pointer">
            1 Month
          </p>
          <p className="col-6 p1 m0 center border-bottom pointer">12 Month</p>
        </div>
        <div>
          {currentBalances.map((account, idx) => {
            return (
              <div key={idx + account}>
                <div className="flex pt2 pb1 px2">
                  <div className="col-4 m0 py2 justify-center">
                    <h4 className="uppercase m0 normal">{account.account}</h4>
                  </div>
                  <div className="col-3 flex flex-column items-center">
                    <PieChart width={60} height={50}>
                      <Pie
                        data={pieData[idx]}
                        cx={23}
                        cy={20}
                        startAngle={0}
                        endAngle={360}
                        innerRadius={15}
                        outerRadius={25}
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
                    <div className="center">
                      <h4 className="mt1 mb0 normal">
                        {Math.round(
                          100 * (account.currentBalance / account.creditLine)
                        )}
                        %
                      </h4>
                      <h4 className="m0 normal">Usage</h4>
                    </div>
                  </div>
                  <div className="col-5 m0 py2">
                    <h4 className="normal flex-auto right-align m0">
                      {`$${numWithCommas(Math.round(account.currentBalance))}`}{" "}
                      / $
                      {numWithCommas(account.creditLine)}
                    </h4>
                    <div className="flex pt1 justify-end">
                      <h5 className="m0">$</h5>
                      <h5 className="m0">[%]</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
