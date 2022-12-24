import React from "react";
import { MdDelete } from "react-icons/md";
import * as Unicons from "@iconscout/react-unicons";
import DashboardCSS from "../Dashboard.module.scss";

const Document = ({ filterData }) => {
  return (
    <>
      {filterData.map((list, i) => (
        <tr key={i}>
          <td className={DashboardCSS.fileDescription}>
            <img src={list.img} alt={list.img} />
            <div className="fNameD">
              <p>{list.name}</p>
              <p>{list.title}</p>
            </div>
          </td>
          <td>
            <div className={DashboardCSS.fileArchives}>
              <p>{list.archiveName}</p>
            </div>
          </td>
          <td>
            <div className={DashboardCSS.fileDateTime}>
              <p>{list.date}</p>
              <p>{list.time}</p>
            </div>
          </td>
          <td>
            <div className={DashboardCSS.fileShare}>
              <button>Share</button>
            </div>
          </td>
          <td>
            <div className={DashboardCSS.fileDownload}>
              <button>Download</button>
            </div>
          </td>
          <td>
            <div className={DashboardCSS.fileDeleteOption}>
              <MdDelete className="deleteIcon" />
              <Unicons.UilEllipsisV />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Document;
