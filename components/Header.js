import Link from "next/link";

const Header = () => {
  return (
    <div className="flex px4 border-bottom light-gray bg-white">
      <div className="flex-auto py2">
        <Link href="/">
          <a className="h2 black lighter green">Debt Tracker</a>
        </Link>
      </div>
      <div className="py2">
        <Link href="/accounts">
          <a className="gray" style={{ lineHeight: 2 }}>
            Accounts
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
