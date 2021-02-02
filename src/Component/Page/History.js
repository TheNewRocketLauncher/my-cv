import React from "react";
import "./styles.css";

const INFO = {
  pj_history: [
    {
      date: "JANUARY 2021",
      project: [
        {
          projectName: "React Native mobile app: Learn online course",
          decription: [
            "View course recommendations for users (Top Rated, Top Selling, Newest) in the Home page",
            "View and register for courses",
            "Watch videos of online lessons (mp4 and youtube)",
            "Like the course and see the user's likes list",
            "Search for a course",
            "Download courses",
          ],
        },
      ],
    },
    {
      date: "AUGUST 2020",
      project: [
        {
          projectName:
            "Make a plugin for moodle that managerment education program (PHP)",
          decription: [
            "The training program is built according to CDIO standards with output goal, the subjects are allocated to meet these output goal (according to the subject's objectives of the subject) and arranged into knowledge blocks, thereby determining the compulsory or elective subjects (according to the number of subjects or the minimum total number of credits) in the same knowledge block.",
            "Each school year will add a new one by copying the previous year, the Plugin will support the management of these training years. Training programs are similarly managed.",
            "Support opening courses with information on the training program such as opening a series, opening some specific subjects into courses on moodle.",
            "Lets see the standard output matrix of the board of directors and the subjects in that training program.",
          ],
        },
      ],
    },
    {
      date: "2019 OR EARLIER",
      project: [
        {
          projectName: "Game with Unity Engine: 2D RPG game",
          decription: [
            "Player control a character to explore an 2D world.",
            "Player can collect weapon, skill in the map.",
            "Combat with enemy, mob and boss.",
            "Explore new map.",
          ],
        },
        {
          projectName: "WPF C#: Store managerment application ",
          decription: [
            "Selling product, discount for customer, manager iscount validity period.",
            "Import and export product in stock.",
            "Manager user, user role (admin, manager, employee).",
            "Local SQL Database.",
          ],
        },
      ],
    },
  ],
};

const Info = () => {
  return (
    <div className="info">
      <p className="info__head __header">School project</p>
      {INFO.pj_history.map(({ date, project }, i) => {
        return (
          <div key={i} className="project ">
            <p className="date --c-gray_dark">{date}</p>
            {project.map(({ projectName, decription }, j) => {
              return (
                <div key={j}>
                  <p className="project_name --c-white">{projectName}</p>

                  <ul>
                    {decription.map(({}, m) => {
                      return (
                        <li key={m} className="date --c-gray_light">
                          {decription[m]}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Info;
