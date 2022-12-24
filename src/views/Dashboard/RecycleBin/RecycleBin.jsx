import React from "react";
import ArchivesCSS from "../Archives/Archives.module.scss";
import { recycleBin } from "../../../components/data";
import { MdDelete } from "react-icons/md";
import * as Unicons from "@iconscout/react-unicons";
import DashboardCSS from "../Dashboard.module.scss";
import Pagination from "../../../components/Pagination/Pagination";

const RecycleBin = () => {
  return (
    <div className={`${DashboardCSS.file} ${ArchivesCSS.file}`}>
      <div className={DashboardCSS.file}>
        <div className={DashboardCSS.tabContent}>
          <div className={DashboardCSS.ddhdh}>
            <div className={`${DashboardCSS.inDdhdh} ${ArchivesCSS.inDdhdh}`}>
              <table>
                <tr>
                  <th>
                    <div
                      className={`${DashboardCSS.tabTitle} ${ArchivesCSS.tabTitle}`}
                    >
                      File Description
                    </div>
                  </th>
                  <th>
                    <div
                      className={`${DashboardCSS.tabTitle} ${ArchivesCSS.tabTitle}`}
                    >
                      Archives
                    </div>
                  </th>
                  <th>
                    <div
                      className={`${DashboardCSS.tabTitle} ${ArchivesCSS.tabTitle}`}
                    >
                      Date / Time
                    </div>
                  </th>
                  <th>
                    <div
                      className={`${DashboardCSS.tabTitle} ${ArchivesCSS.tabTitle2} ${ArchivesCSS.tabTitleBin}`}
                    >
                      Restore
                    </div>
                  </th>
                </tr>
                {recycleBin.map((list, i) => (
                  <tr key={i}>
                    <td className={DashboardCSS.fileDescription}>
                      {list.archiveFolderImg ? (
                        <img src={list.archiveFolderImg} alt={list.archiveFolderImg} className={DashboardCSS.archiveFolderImg} />
                      ) : (
                        <img src={list.img} alt={list.img} />
                      )}
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
                      <div
                        className={`${DashboardCSS.fileDownload} ${ArchivesCSS.fileDownload}`}
                      >
                        <button>Restore</button>
                        <div className={DashboardCSS.fileDeleteOption}>
                          <MdDelete className="deleteIcon" />
                          <Unicons.UilEllipsisV />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default RecycleBin;
