import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdownMenus, title }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState([]);

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setValue(true);
    setShowSubMenu((prev) => {
      // console.log("running");
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      // console.log("running");
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <div
      onMouseEnter={() => {
        setValue(true);
      }}
      onMouseLeave={() => {
        setValue(false);
      }}
      className="dropdown"
    >
      <span>
        <div className="program-menu">
          <span>{title}</span> <i className="fa-solid fa-angle-down"></i>
        </div>
        {value && (
          <ul
            onMouseEnter={() => {
              setValue(true);
            }}
          >
            {dropdownMenus &&
              dropdownMenus.map((items, index) => {
                return (
                  <li
                    onMouseEnter={(event) =>
                      subMenuOnMouseEnterHandler(items.id)
                    }
                    onMouseLeave={(event) =>
                      subMenuOnMouseLeaveHandler(items.id)
                    }
                    key={index}
                  >
                    <Link to={items.path}>
                      {items.img && <img src={items.img} alt="" width={20} />}
                      {items.title}
                    </Link>
                    {items.children && showSubMenu[items.id] && (
                      <ul>
                        {items.children.map((subItems, index) => {
                          return (
                            <li
                              onMouseEnter={() =>
                                subMenuOnMouseEnterHandler(subItems.id)
                              }
                              onMouseLeave={() =>
                                subMenuOnMouseLeaveHandler(subItems.id)
                              }
                              key={index}
                            >
                              {subItems.title}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        )}
      </span>
    </div>
  );
};

export default Dropdown;

// const DropdownDiv = styled.div`
//   position: relative;
//   height: 100%;
//   /* background-color: #d4f3ff; */
//   a {
//     text-align: left;
//   }

//   span {
//     height: 100%;

//     .program-menu {
//       height: 100%;
//       display: flex;
//       align-items: flex-end;
//       justify-content: center;
//       /* width: 9rem; */
//       margin-right: 1.8rem;
//       padding-bottom: 0.5rem;
//       cursor: pointer;
//       span {
//         margin-right: 0.2rem;
//         display: flex;
//         align-items: flex-end;
//         justify-content: center;
//         white-space: nowrap;
//         font-weight: 500;
//       }
//     }

//     ul::before {
//       content: "";
//       width: 30px;
//       height: 30px;
//       position: absolute;
//       top: -0.5rem;
//       right: 6rem;
//       z-index: -1;
//       background-color: #fff;
//       clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//     }

//     ul {
//       background-color: #fff !important;
//       position: absolute;
//       right: -4.7rem;
//       top: 3rem;
//       background-color: white;
//       z-index: 13221;
//       display: flex;
//       flex-direction: column;
//       justify-content: flex-start;
//       align-items: flex-start;
//       width: 12rem;
//       height: auto;
//       list-style: none;
//       /* padding: 1rem; */
//       box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//         rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//       border-radius: 5px;
//       margin: 0;

//       li {
//         width: 100%;
//         height: 100%;
//         border-bottom: 1px solid rgba(128, 128, 128, 0.171);
//         border-left: 2px solid transparent;
//         position: relative;

//         a {
//           padding: 0.8rem 1rem;
//           text-decoration: none;
//           font-weight: 500;
//           color: black;
//           font-size: 1rem;
//           padding: 0.5rem 1rem;
//           height: 100%;
//           display: flex;
//           justify-content: flex-start;
//           align-items: center;
//           img {
//             margin-right: 0.5rem;
//           }
//         }
//         ul {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           background-color: #fff;
//           position: absolute;
//           right: -12rem;
//           top: 1rem;
//           width: 12rem;
//           height: 10rem;
//         }
//       }

//       li:hover {
//         /* background-color: #a9daff;
//         border-radius: 10px; */
//         border-left: 2px solid #030489;
//         transition: 200ms ease-in-out;
//         background-color: rgba(128, 128, 128, 0.171);
//       }
//     }
//   }

//   @media screen and (max-width: 1181px) {
//     .program-menu {
//       margin-right: 0.8rem !important;
//       font-size: 0.8rem !important;
//     }
//   }
// `;
