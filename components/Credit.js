import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { data } from "../data/data";
import "../styles/styles.scss";

const Credit = () => {
  const currentMonth = data && data[data.length - 1];
  const currentBalances = [];
  let totalCreditLine = 0;
  let totalBalance = 0;
  let totalInterest = 0;

  const previousMonth = data && data[data.length - 2];
  let previousBalance = 0;

  for (let i = 0; i < currentMonth.accounts.length; i++) {
    currentBalances.push({
      account: currentMonth.accounts[i].name,
      currentBalance: currentMonth.accounts[i].newBalance,
      interest: currentMonth.accounts[i].interest,
      creditLine: currentMonth.accounts[i].creditLine
    });
    totalCreditLine += currentMonth.accounts[i].creditLine;
    totalBalance += currentMonth.accounts[i].newBalance;
    totalInterest += currentMonth.accounts[i].interest;
  }

  for (let i = 0; i < previousMonth.accounts.length; i++) {
    previousBalance += previousMonth.accounts[i].newBalance;
  }

  console.log(totalBalance);
  console.log(previousBalance);

  return (
    <div className="roboto">
      <h2 className="px4">Debt Tracker</h2>
      <div className="flex">
        <div>
          <div className="px4">
            <h2 className="m0">
              YOU OWE: $ {Math.round(totalBalance)} / $ {totalCreditLine}
            </h2>
            <div className="flex pb2">
              <p>
                {totalBalance - previousBalance > 0 ? "+ " : ""}${" "}
                {Math.round(totalBalance - previousBalance)}
              </p>
              <p className="pl2">
                [{totalBalance - previousBalance > 0 ? " + " : ""}
                {Math.round(
                  ((totalBalance - previousBalance) / totalBalance) * 100
                )}{" "}
                % ]
              </p>
            </div>
          </div>
          <BarChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 30000]} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="accounts[0].newBalance"
              name="amex"
              stackId="a"
              fill="#aaa"
            />
            <Bar
              dataKey="accounts[1].newBalance"
              name="chase"
              stackId="a"
              fill="#8884d8"
            />
            <Bar
              dataKey="accounts[2]newBalance"
              name="bestbuy"
              stackId="a"
              fill="#82ca9d"
            />
            <Bar
              dataKey="accounts[3].newBalance"
              name="capone"
              stackId="a"
              fill="#ffb3ba"
            />
          </BarChart>
        </div>
        <div className="col-12 mx4">
          <div>
            <h2 className="px2">Debt Summary</h2>
            <div className="flex border-top">
              <div className="col-6 p2 center border-bottom border-right pointer">
                1 Month
              </div>
              <div className="col-6 p2 center border-bottom pointer">
                12 Month
              </div>
            </div>
            <div className="px2">
              {currentBalances.map((account, idx) => {
                return (
                  <div key={idx + account}>
                    <div className="flex pt2 pb1">
                      <div className="flex col-6 m0">
                        <h3 className="uppercase">{account.account}:</h3>
                        <h3 className="normal flex-auto right-align">
                          {`$${Math.round(account.currentBalance)}`} / ${" "}
                          {account.creditLine}
                        </h3>
                      </div>
                      <h3 className="col-6 m0 right-align">
                        {Math.round(
                          100 * (account.currentBalance / account.creditLine)
                        )}
                        % Usage
                      </h3>
                    </div>
                    <div className="flex">
                      <h5 className="m0">$</h5>
                      <h5 className="m0">[%]</h5>
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
              <div className="col-6 p2 center border-bottom pointer">
                12 Month
              </div>
            </div>
            {currentBalances.map(account => {
              return (
                <h3 className="px2">{`${account.account}: $ ${
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
      </div>
    </div>
  );
};

export default Credit;
