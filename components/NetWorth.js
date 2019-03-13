import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { data } from "../data/data";

const NetWorth = () => {
  let netWorth = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const debtsArr = data[i].debtAccounts;
      const assetsArr = data[i].assetAccounts;
      let monthlyDebt = 0;
      let monthlyAsset = 0;

      for (let j = 0; j < debtsArr.length; j++) {
        monthlyDebt += debtsArr[j].newBalance;
      }

      for (let j = 0; j < assetsArr.length; j++) {
        monthlyAsset += assetsArr[j].amount;
      }
      netWorth.push({
        month: data[i].month,
        totalAsset: Math.round(monthlyAsset),
        totalDebt: Math.round(monthlyDebt),
        netWorth: Math.round(monthlyAsset - monthlyDebt)
      });
    }
  }

  return (
    <div>
      <h2 className="px4">Net Worth</h2>
      <LineChart
        width={700}
        height={400}
        data={netWorth}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="netWorth"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="totalAsset" stroke="#82ca9d" />
        <Line type="monotone" dataKey="totalDebt" stroke="#ffb3ba" />
      </LineChart>
    </div>
  );
};

export default NetWorth;
