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
      <div>
        <h3 className="normal">Spendings</h3>
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
            fill="#84aad8"
          />
          <Bar
            dataKey="debtAccounts[1].spendings"
            name="chase"
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            dataKey="debtAccounts[2].spendings"
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
      <div>
        <h3 className="normal">Debt</h3>
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
            fill="#84aad8"
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
      <div>
        <h3 className="normal">Interest</h3>
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
          <YAxis domain={[0, 350]} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="debtAccounts[0].interest"
            name="amex"
            stackId="a"
            fill="#84aad8"
          />
          <Bar
            dataKey="debtAccounts[1].interest"
            name="chase"
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            dataKey="debtAccounts[2].interest"
            name="bestbuy"
            stackId="a"
            fill="#82ca9d"
          />
          <Bar
            dataKey="debtAccounts[3].interest"
            name="capone"
            stackId="a"
            fill="#ffb3ba"
          />
        </BarChart>
      </div>
      <div>
        <h3 className="normal">Asset Tracker</h3>
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
            fill="#84aad8"
          />
          <Bar
            dataKey="assetAccounts[1].amount"
            name="360"
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            dataKey="assetAccounts[2].amount"
            name="cash"
            stackId="a"
            fill="#82ca9d"
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Debt;
