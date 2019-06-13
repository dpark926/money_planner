import Header from "../components/Header";

function Layout(props) {
  return (
    <div className="roboto" style={{ background: "#f6f6f6" }}>
      <Header />
      <div className="mx-auto py3" style={{ width: "1024px" }}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
