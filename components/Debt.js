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

  const COLORS = [
    "#84aad8",
    "#8884d8",
    "#b284d8",
    "#d88884",
    "#ffb3ba",
    "#82ca9d"
  ];

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
          {data &&
            data[data.length - 1].debtAccounts.map((accnt, idx) => {
              return (
                <Bar
                  dataKey={`debtAccounts[${idx}].spendings`}
                  name={accnt.name}
                  stackId="a"
                  fill={COLORS[idx]}
                />
              );
            })}
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
          <YAxis domain={[0, 40000]} />
          <Tooltip />
          <Legend />
          {data &&
            data[data.length - 1].debtAccounts.map((accnt, idx) => {
              return (
                <Bar
                  dataKey={`debtAccounts[${idx}].newBalance`}
                  name={accnt.name}
                  stackId="a"
                  fill={COLORS[idx]}
                />
              );
            })}
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
          <YAxis domain={[0, 600]} />
          <Tooltip />
          <Legend />
          {data &&
            data[data.length - 1].debtAccounts.map((accnt, idx) => {
              return (
                <Bar
                  dataKey={`debtAccounts[${idx}].interest`}
                  name={accnt.name}
                  stackId="a"
                  fill={COLORS[idx]}
                />
              );
            })}
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="assetAccounts[0].amount"
            name="capone"
            stackId="a"
            fill="#8884d8"
          />
          <Bar
            dataKey="assetAccounts[1].amount"
            name="360"
            stackId="a"
            fill="#84aad8"
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
