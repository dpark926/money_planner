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

const Debt = () => {
  const currentMonth = data && data[data.length - 1];
  const currentBalances = [];
  let totalCreditLine = 0;
  let totalBalance = 0;
  let totalInterest = 0;

  const previousMonth = data && data[data.length - 2];
  let previousBalance = 0;

  let totalAsset = 0;

  for (let i = 0; i < currentMonth.debtAccounts.length; i++) {
    currentBalances.push({
      account: currentMonth.debtAccounts[i].name,
      currentBalance: currentMonth.debtAccounts[i].newBalance,
      interest: currentMonth.debtAccounts[i].interest,
      creditLine: currentMonth.debtAccounts[i].creditLine
    });
    totalCreditLine += currentMonth.debtAccounts[i].creditLine;
    totalBalance += currentMonth.debtAccounts[i].newBalance;
    totalInterest += currentMonth.debtAccounts[i].interest;
  }

  for (let i = 0; i < previousMonth.debtAccounts.length; i++) {
    previousBalance += previousMonth.debtAccounts[i].newBalance;
  }

  for (let i = 0; i < currentMonth.assetAccounts.length; i++) {
    totalAsset += currentMonth.assetAccounts[i].amount;
  }

  return (
    <div>
      <div>
        <h2 className="px4">Asset Tracker</h2>
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
          <YAxis domain={[0, 100000]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="assetAccounts[0].amount"
            name="capone"
            stackId="a"
            fill="#aaa"
          />
          <Bar
            dataKey="assetAccounts[1].amount"
            name="360"
            stackId="a"
            fill="#8884d8"
          />
        </BarChart>
      </div>
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
              dataKey="debtAccounts[0].newBalance"
              name="amex"
              stackId="a"
              fill="#aaa"
            />
            <Bar
              dataKey="debtAccounts[1].newBalance"
              name="chase"
              stackId="a"
              fill="#8884d8"
            />
            <Bar
              dataKey="debtAccounts[2]newBalance"
              name="bestbuy"
              stackId="a"
              fill="#82ca9d"
            />
            <Bar
              dataKey="debtAccounts[3].newBalance"
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
      </div>
    </div>
  );
};

export default Debt;
