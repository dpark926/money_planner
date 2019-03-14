import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { numWithCommas } from "../utils/functions";
import "../styles/styles.scss";

const Debt = props => {
  const { data, totalBalance, totalCreditLine, previousBalance } = props;

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
              YOU OWE: ${numWithCommas(Math.round(totalBalance))} / $
              {numWithCommas(totalCreditLine)}
            </h2>
            <div className="flex pb2">
              <p>
                {totalBalance - previousBalance > 0 ? "+ " : ""}$
                {numWithCommas(Math.round(totalBalance - previousBalance))}
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
      </div>
    </div>
  );
};

export default Debt;
