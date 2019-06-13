import Title from "./Title";
import AttachMoney from "rmdi/lib/AttachMoney";
import CreditCard from "rmdi/lib/CreditCard";
import TrendingUp from "rmdi/lib/TrendingUp";
import {
  numWithCommas,
  formatMoney,
  changePercent,
  shouldInvert
} from "../utils/functions";

const OverviewCard = props => {
  const { header, currentValue, prevValue, invertColors } = props;
  let color = "#EEE";
  let icon = <AttachMoney size={32} color="white" />;
  switch (header) {
    case "TOTAL ASSET":
      color = "#82ca9d";
      icon = <AttachMoney size={32} color="white" />;
      break;
    case "TOTAL BALANCE":
      color = "#ffb3ba";
      icon = <CreditCard size={32} color="white" />;
      break;
    case "NET WORTH":
      color = "#84aad8";
      icon = <TrendingUp size={32} color="white" />;
      break;
    default:
      return;
  }

  return (
    <div className="col-4 center">
      <div
        className="absolute p2 mx2 rounded box-shadow"
        style={{ background: color }}
      >
        {icon}
      </div>
      <div className="border-divider rounded mr1 mt2 py3 px2 bg-white right-align">
        <Title title={header} padding={"p0"} />
        <h2 className="mx0 my1 lighter pt1">
          ${numWithCommas(Math.round(currentValue))}
        </h2>
        <div className="flex justify-end">
          <h4
            className={`m0 h5 lighter ${
              shouldInvert(invertColors, currentValue - prevValue > 0)
                ? "green"
                : "pink"
            }`}
          >
            {currentValue - prevValue > 0 ? "+" : ""}$
            {numWithCommas(formatMoney(Math.round(currentValue - prevValue)))}
          </h4>
          <h4
            className={`m0 pl1 h5 lighter ${
              shouldInvert(invertColors, currentValue - prevValue > 0)
                ? "green"
                : "pink"
            }`}
          >
            [ {currentValue - prevValue > 0 ? "+" : ""}
            {changePercent(currentValue, prevValue)}
            % ]
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
