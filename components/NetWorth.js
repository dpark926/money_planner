import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
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

  console.log(netWorth);

  return (
    <div>
      <div className="flex">
        <div className="col-4">
          <h3 className="m0">TOTAL BALANCE</h3>
          <h1 className="mx0 my1">
            ${numWithCommas(Math.round(props.totalBalance))}
            <span className="m0 ml2 h4 light-gray">
              / ${numWithCommas(props.totalCreditLine)}
            </span>
          </h1>
          <div className="flex pb2">
            <h4
              className={`m0 ${
                props.totalBalance - props.previousBalance > 0 ? "red" : "green"
              }`}
            >
              {props.totalBalance - props.previousBalance > 0 ? "+" : ""}$
              {numWithCommas(
                Math.round(props.totalBalance - props.previousBalance)
              )}
            </h4>
            <h4
              className={`m0 pl1 ${
                props.totalBalance - props.previousBalance > 0 ? "red" : "green"
              }`}
            >
              [{props.totalBalance - props.previousBalance > 0 ? "+" : ""}
              {Math.round(
                ((props.totalBalance - props.previousBalance) /
                  props.totalBalance) *
                  100
              )}
              %]
            </h4>
          </div>
        </div>
        <div className="col-4">
          <h3 className="m0">TOTAL ASSET</h3>
          <h1 className="mx0 my1">
            ${numWithCommas(Math.round(props.totalAsset))}
          </h1>
          <div className="flex pb2">
            <h4
              className={`m0 ${
                props.totalAsset - netWorth[netWorth.length - 2].totalAsset > 0
                  ? "green"
                  : "red"
              }`}
            >
              {props.totalAsset - netWorth[netWorth.length - 2].totalAsset > 0
                ? "+"
                : ""}$
              {numWithCommas(
                Math.round(
                  props.totalAsset - netWorth[netWorth.length - 2].totalAsset
                )
              )}
            </h4>
            <h4
              className={`m0 pl1 ${
                props.totalAsset - netWorth[netWorth.length - 2].totalAsset
                  ? "red"
                  : "green"
              }`}
            >
              [{props.totalAsset - netWorth[netWorth.length - 2].totalAsset
                ? ""
                : "+"}
              {Math.round(
                ((props.totalAsset - netWorth[netWorth.length - 2].totalAsset) /
                  netWorth[netWorth.length - 2].totalAsset) *
                  100
              )}
              %]
            </h4>
          </div>
        </div>
        <div className="col-4">
          <h3 className="m0">NET WORTH</h3>
          <h1 className="mx0 my1">
            ${numWithCommas(Math.round(netWorth[netWorth.length - 1].netWorth))}
          </h1>
        </div>
      </div>
      <h2>Net Worth</h2>
      <LineChart
        width={700}
        height={400}
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
