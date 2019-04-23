import Title from "./Title";
import { numWithCommas, changePercent, shouldInvert } from "../utils/functions";

const OverviewCard = props => {
  const { header, currentValue, prevValue, invertColors } = props;

  return (
    <div className="col-4 center">
      <div className="border-divider rounded mr1 py3 px2 bg-white">
        <Title title={header} />
        <h2 className="mx0 my1 lighter pt1">
          ${numWithCommas(Math.round(currentValue))}
        </h2>
        <div className="flex justify-center">
          <h4
            className={`m0 h5 lighter ${
              shouldInvert(invertColors, currentValue - prevValue > 0)
                ? "green"
                : "pink"
            }`}
          >
            {currentValue - prevValue > 0 ? "+" : ""}$
            {numWithCommas(Math.round(currentValue - prevValue))}
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
