import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="layout__side">
        <img src={logo} className="layout__side--logo mt--32"></img>
        <div className="title mt--32">Tasks</div>
        <button className="btn btn--primary btn--m mt--32">Tasks</button>
      </div>
    </div>
  );
};

export default Sidebar;
