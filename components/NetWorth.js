import OverviewCard from "./OverviewCard";
import Chart from "./Chart";
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
      <Chart title={"NET WORTH"} data={netWorth} chartType={"line"} />
    </div>
  );
};

export default NetWorth;
