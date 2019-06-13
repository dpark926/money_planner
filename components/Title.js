const Title = props => {
  const { padding = "px2" } = props;

  return (
    <div className="light-gray border-bottom pb1">
      <h4 className={`m0 h5 pb1 ${padding} gray lighter`}>
        {props.title.toUpperCase()}
      </h4>
    </div>
  );
};

export default Title;
