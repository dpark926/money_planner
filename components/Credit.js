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

const Credit = () => {
  return (
    <div>
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
        <XAxis dataKey="name" />
        <YAxis domain={[0, 30000]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="amex.newBalance" name="amex" stackId="a" fill="#aaa" />
        <Bar
          dataKey="chase.newBalance"
          name="chase"
          stackId="a"
          fill="#8884d8"
        />
        <Bar
          dataKey="bestbuy.newBalance"
          name="bestbuy"
          stackId="a"
          fill="#82ca9d"
        />
        <Bar
          dataKey="capone.newBalance"
          name="capone"
          stackId="a"
          fill="#ffb3ba"
        />
      </BarChart>
      <div>
        <h2>Credit Debt Summary</h2>
      </div>
    </div>
  );
};

export default Credit;
