import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Chart from "./Chart";
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
      <Chart
        title={"Spendings"}
        data={data}
        chartType={"bar"}
        accountType={"debtAccounts"}
        dataType="spendings"
      />
      <Chart
        title={"Debt"}
        data={data}
        chartType={"bar"}
        accountType={"debtAccounts"}
        dataType="newBalance"
        yAxisRange={[0, 40000]}
      />
      <Chart
        title={"Interest"}
        data={data}
        chartType={"bar"}
        accountType={"debtAccounts"}
        dataType="interest"
        yAxisRange={[0, 600]}
      />
      <Chart
        title={"Assets"}
        data={data}
        chartType={"bar"}
        accountType={"assetAccounts"}
        dataType="amount"
      />
    </div>
  );
};

export default Debt;
