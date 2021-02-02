import React from "react";
import "./styles.css";
import myAvatar from "../../img/Me.png";

const ACTIVEPAGE = {
  me: 0,
  skill: 1,
  pj_history: 2,
};

const PAGELIST = [
  {
    id: ACTIVEPAGE.me,
    name: "Me",
  },
  {
    id: ACTIVEPAGE.pj_history,
    name: "Project History",
  },
];

const Menubar = ({ activePage, handleClick }) => {
  return (
    <div className="menubar">
      <img className="avatar" alt="avatar" src={myAvatar} />
      <div className="groupbtn">
        {PAGELIST.map(({ id, name }, index) => {
          return (
            <div
              onClick={() => {
                handleClick(id);
              }}
              key={id}
              className={`btn__menu ${
                id === activePage ? "btn__menu--active" : ""
              }`}
            >
              {name}
            </div>
          );
        })}
        {/* <div className="btn__menu">Me</div>
        <div className="btn__menu">Skill</div>
        <div className="btn__menu">Project History</div> */}
      </div>
    </div>
  );
};

export default Menubar;
