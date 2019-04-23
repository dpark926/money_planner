const ProgressBar = props => {
  const { currentBalance, creditLine } = props;

  return (
    <div className="flex py1 px2 items-center border-bottom light-gray">
      <div className="flex col-8">
        <div
          className="bg-pink rounded"
          style={{
            width: Math.round(100 * (currentBalance / creditLine)) + "%",
            height: "10px"
          }}
        />
        <div
          className={`rounded ${
            Math.round(100 * (currentBalance / creditLine)) === 0
              ? "bg-green"
              : "bg-light-gray"
          } flex-auto`}
          style={{ height: "10px" }}
        />
      </div>
      <div className="col-4 right">
        <h4 className="m0 h5 lighter nowrap gray right-align">
          {Math.round(100 * (currentBalance / creditLine))}
          % Usage
        </h4>
      </div>
    </div>
  );
};

export default ProgressBar;
