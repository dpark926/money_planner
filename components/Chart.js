import Title from "./Title";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Chart = props => {
  const { data, chartType, dataType, accountType, yAxisRange } = props;

  const COLORS = [
    "#84aad8",
    "#8884d8",
    "#b284d8",
    "#d88884",
    "#ffb3ba",
    "#82ca9d"
  ];

  let accntsArry = [];

  if (accountType === "debtAccounts") {
    accntsArry = data[data.length - 1].debtAccounts;
  } else if (accountType === "assetAccounts") {
    accntsArry = data[data.length - 1].assetAccounts;
  }

  return (
    <div className="border-divider rounded mr1 mb3 py3 px2 bg-white">
      <Title title={props.title} />
      {chartType === "line" && (
        <LineChart
          width={650}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: "gray", fontSize: 12 }} />
          <YAxis tick={{ fill: "gray", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="netWorth"
            stroke="#0088FE"
            dot={false}
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="totalAsset"
            stroke="#82ca9d"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="totalDebt"
            stroke="#ffb3ba"
            dot={false}
          />
        </LineChart>
      )}
      {chartType === "bar" && (
        <BarChart
          width={650}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: "gray", fontSize: 12 }} />
          <YAxis domain={yAxisRange} tick={{ fill: "gray", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          {data &&
            accntsArry.map((accnt, idx) => {
              return (
                <Bar
                  dataKey={`${accountType}[${idx}].${dataType}`}
                  name={accnt.name}
                  stackId="a"
                  fill={COLORS[idx]}
                />
              );
            })}
        </BarChart>
      )}
    </div>
  );
};

export default Chart;
