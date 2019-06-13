import MonetizationOn from "rmdi/lib/MonetizationOn";
import CreditCard from "rmdi/lib/CreditCard";
import Close from "rmdi/lib/Close";

const Modal = props => {
  console.log(props.accnt);
  return (
    <div
      className="fixed col-12 flex flex-column justify-center items-center bg-modal light-gray z1"
      style={{ height: "100%", top: 0, left: 0 }}
    >
      <div
        className="relative col-12 bg-white pt4 pb3 px3 border-divider rounded z2"
        style={{ maxWidth: "300px" }}
      >
        <Close
          className="absolute pointer hover"
          size={24}
          color="gray"
          style={{ top: "20px", right: "20px" }}
          onClick={props.toggleModal}
        />
        {props.modalType === "assets" && (
          <div>
            <div className="center">
              <MonetizationOn size={64} color="gray" />
              <h2 className="gray">Asset</h2>
            </div>
            <form className="flex flex-column z2" onSubmit={props.toggleModal}>
              {!props.accnt && (
                <select className="my1 rounded border-divider">
                  <option value="capone">Capital One</option>
                  <option value="360checking">360 Checking</option>
                  <option value="boa">Bank of America</option>
                  <option value="savings">Savings</option>
                  <option value="cash">Cash</option>
                  <option value="new">Add New</option>
                </select>
              )}
              {props.accnt && (
                <h4 className="my1 gray uppercase">{props.accnt.name}</h4>
              )}
              <input
                className="my1 p1 rounded border-divider"
                type="number"
                placeholder={props.accnt ? props.accnt.amount : "Amount"}
              />
              <input
                className="white pointer bg-blue border-divider rounded hover my1 p1"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        )}
        {props.modalType === "credit" && (
          <div>
            <div className="center">
              <CreditCard size={64} color="gray" />
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
        )}
      </div>
    </div>
  );
};

export default Modal;
