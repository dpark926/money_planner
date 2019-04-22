import { numWithCommas, changePercent, shouldInvert } from "../utils/functions";

const OverviewCard = props => {
  const { header, currentValue, prevValue, invertColors } = props;

  return (
    <div className="col-4 center">
      <div className="border-divider rounded mr1 py3 px2">
        <h4 className="m0 h5 pb1 gray normal border-bottom">{header}</h4>
        <h2 className="mx0 my1 lighter">
          ${numWithCommas(Math.round(currentValue))}
        </h2>
        <div className="flex justify-center">
          <h4
            className={`m0 h5 normal ${
              shouldInvert(invertColors, currentValue - prevValue > 0)
                ? "green"
                : "pink"
            }`}
          >
            {currentValue - prevValue > 0 ? "+" : ""}$
            {numWithCommas(Math.round(currentValue - prevValue))}
          </h4>
          <h4
            className={`m0 pl1 h5 normal ${
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
