const CreditModal = props => {
  return (
    <div
      className="fixed col-12 flex flex-column justify-center items-center bg-modal light-gray z1"
      style={{ height: "100%", top: 0, left: 0 }}
    >
      <div
        className="col-12 bg-white py4 px3 border-divider rounded z2"
        style={{ maxWidth: "250px" }}
      >
        <div className="center">
          <h2 className="gray">Credit Card</h2>
        </div>
        <form className="flex flex-column z2">
          <select className="my1 rounded border-divider">
            <option value="capone">Capital One</option>
            <option value="360checking">360 Checking</option>
            <option value="boa">Bank of America</option>
            <option value="savings">Savings</option>
            <option value="cash">Cash</option>
            <option value="new">Add New</option>
          </select>
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="Previous Balance"
          />
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="Payments"
          />
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="Spendings"
          />
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="Fees"
          />
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="Interest"
          />
          <input
            className="my1 p1 rounded border-divider"
            type="number"
            placeholder="New Balance"
          />
          <input
            className="white pointer bg-blue border-divider rounded hover my1 p1"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreditModal;
