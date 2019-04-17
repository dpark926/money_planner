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

  return (
    <div>
      <div className="flex mb3">
        <div className="col-4 center">
          <div className="border-divider rounded rounded mr1 py3 px2">
            <h3 className="m0 normal">TOTAL ASSET</h3>
            <h1 className="mx0 my1 normal">
              ${numWithCommas(Math.round(props.totalAsset))}
            </h1>
            <div className="flex pb2 justify-center">
              <h4
                className={`m0 normal ${
                  props.totalAsset - netWorth[netWorth.length - 2].totalAsset >
                  0
                    ? "green"
                    : "pink"
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
                className={`m0 pl1 normal ${
                  props.totalAsset - netWorth[netWorth.length - 2].totalAsset
                    ? "pink"
                    : "green"
                }`}
              >
                [{" "}
                {props.totalAsset - netWorth[netWorth.length - 2].totalAsset
                  ? ""
                  : "+"}
                {Math.round(
                  ((props.totalAsset -
                    netWorth[netWorth.length - 2].totalAsset) /
                    netWorth[netWorth.length - 2].totalAsset) *
                    100
                )}
                % ]
              </h4>
            </div>
          </div>
        </div>
        <div className="col-4 center">
          <div className="border-divider rounded mx1 py3 px2">
            <h3 className="m0 normal">TOTAL BALANCE</h3>
            <h1 className="mx0 my1 normal">
              ${numWithCommas(Math.round(props.totalBalance))}
            </h1>
            <div className="flex pb2 justify-center">
              <h4
                className={`m0 normal ${
                  props.totalBalance - props.previousBalance > 0
                    ? "pink"
                    : "green"
                }`}
              >
                {props.totalBalance - props.previousBalance > 0 ? "+" : ""}$
                {numWithCommas(
                  Math.round(props.totalBalance - props.previousBalance)
                )}
              </h4>
              <h4
                className={`m0 pl1 normal ${
                  props.totalBalance - props.previousBalance > 0
                    ? "pink"
                    : "green"
                }`}
              >
                [ {props.totalBalance - props.previousBalance > 0 ? "+" : ""}
                {Math.round(
                  ((props.totalBalance - props.previousBalance) /
                    props.totalBalance) *
                    100
                )}
                % ]
              </h4>
            </div>
          </div>
        </div>
        <div className="col-4 center">
          <div className="border-divider rounded ml1 py3 px2">
            <h3 className="m0 normal">NET WORTH</h3>
            <h1 className="mx0 my1 normal">
              ${numWithCommas(
                Math.round(netWorth[netWorth.length - 1].netWorth)
              )}
            </h1>
            <div className="flex pb2 justify-center">
              <h4
                className={`m0 normal ${
                  netWorth[netWorth.length - 1].netWorth -
                    netWorth[netWorth.length - 2].netWorth >
                  0
                    ? "green"
                    : "pink"
                }`}
              >
                {netWorth[netWorth.length - 1].netWorth -
                  netWorth[netWorth.length - 2].netWorth >
                0
                  ? "+"
                  : ""}$
                {numWithCommas(
                  Math.round(
                    netWorth[netWorth.length - 1].netWorth -
                      netWorth[netWorth.length - 2].netWorth
                  )
                )}
              </h4>
              <h4
                className={`m0 pl1 normal ${
                  netWorth[netWorth.length - 1].netWorth -
                  netWorth[netWorth.length - 2].netWorth
                    ? "pink"
                    : "green"
                }`}
              >
                [{" "}
                {netWorth[netWorth.length - 1].netWorth -
                netWorth[netWorth.length - 2].netWorth
                  ? ""
                  : "+"}
                {Math.round(
                  ((netWorth[netWorth.length - 1].netWorth -
                    netWorth[netWorth.length - 2].netWorth) /
                    netWorth[netWorth.length - 2].netWorth) *
                    100
                )}
                % ]
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="normal">Net Worth</h3>
        <LineChart
          width={700}
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
