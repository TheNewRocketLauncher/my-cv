import React from "react";
import "./styles.css";

const INFO= {
  userData: {
    name: "Huỳnh Đỗ Tấn Phát",
    email: "huynhdotanphat1510@gmail.com",
    phone: "0944851250",
    school: "University of Science",
    graduate: "Planing to graduate on August 2021",
    introduce:
      "Hardworking student seeking employment. Willingness to learn new skills and work in a corporate environment. Planing to become Junior Developer in 4 years",
  },
  skill: [
    "JavaScripts",
    "React Native",
    "React JS",
    "C#",
    "HTML, CSS",
    "PHP",
    "NodeJS",
  ],
}

const Info = () => {


  return (
    <div className="info">
      <p className="info__head __header">Huỳnh Đỗ Tấn Phát</p>

      <p className="info__head --c-blue">Basic Info</p>
      <p className="content">{INFO.userData.email}</p>
      <p className="content">{INFO.userData.phone}</p>
      <p className="content">{INFO.userData.school}</p>
      <p className="content">{INFO.userData.introduce}</p>

      <p className="info__head --c-blue">Skill</p>
      {INFO.skill.map(({}, index) => {
        return(
          <p className="content"key={index} >{INFO.skill[index]}</p>
        )
      })}
    </div>
  );
};

export default Info;
