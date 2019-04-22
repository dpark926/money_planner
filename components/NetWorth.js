import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import OverviewCard from "./OverviewCard";
import { numWithCommas } from "../utils/functions";
import { data } from "../data/data";

const NetWorth = props => {
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
      <div className="flex mb3">
        <OverviewCard
          header={"TOTAL ASSET"}
          currentValue={props.totalAsset}
          prevValue={netWorth[netWorth.length - 2].totalAsset}
        />
        <OverviewCard
          header={"TOTAL BALANCE"}
          currentValue={props.totalBalance}
          prevValue={props.previousBalance}
          invertColors
        />
        <OverviewCard
          header={"NET WORTH"}
          currentValue={netWorth[netWorth.length - 1].netWorth}
          prevValue={netWorth[netWorth.length - 2].netWorth}
        />
      </div>
      <div className="border-divider rounded mr1 py3 px2">
        <h3 className="normal">Net Worth</h3>
        <LineChart
          width={650}
          height={300}
          data={netWorth}
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
          <Line
            type="monotone"
            dataKey="netWorth"
            stroke="#0088FE"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="totalAsset" stroke="#82ca9d" />
          <Line type="monotone" dataKey="totalDebt" stroke="#ffb3ba" />
        </LineChart>
      </div>
    </div>
  );
};

export default NetWorth;
