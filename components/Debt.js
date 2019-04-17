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
  const { data } = props;

  return (
    <div>
      <div className="flex">
        <div className="mt2">
          <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="debtAccounts[0].spendings"
              name="amex"
              stackId="a"
              fill="#aaa"
            />
            <Bar
              dataKey="debtAccounts[1].spendings"
              name="chase"
              stackId="a"
              fill="#8884d8"
            />
            <Bar
              dataKey="debtAccounts[2]spendings"
              name="bestbuy"
              stackId="a"
              fill="#82ca9d"
            />
            <Bar
              dataKey="debtAccounts[3].spendings"
              name="capone"
              stackId="a"
              fill="#ffb3ba"
            />
          </BarChart>
        </div>
      </div>
      <div className="flex">
        <div className="mt2">
          <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
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
      <div>
        <h2>Asset Tracker</h2>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
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
    </div>
  );
};

export default Debt;
