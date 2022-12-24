import React from "react";
import ArchivesCSS from "./Archives.module.scss";
import { archivesData } from "../../../components/data";
import DashboardCSS from "../Dashboard.module.scss";
import CreateArchives from "../../../components/Auth/CreateArchives";
import { MdDelete } from "react-icons/md";
import { TiFolderOpen } from "react-icons/ti";
import * as Unicons from "@iconscout/react-unicons";
import UploadArchiveFile from "../../../components/Auth/UploadArchiveFile";
import Pagination from "../../../components/Pagination/Pagination";

const Archives = ({
  archivesPageSwitch,
  setArchivesPageSwitch,
  archivesPageSwitch2,
  setArchivesPageSwitch2,
}) => {
  return (
    <div className={`${DashboardCSS.file} ${ArchivesCSS.file}`}>
      {archivesPageSwitch ? (
        <>
          <div className={DashboardCSS.header}>
            <div className={DashboardCSS.left}>
              <h3>Archive</h3>
            </div>
            <div className={DashboardCSS.right}>
              <button onClick={() => setArchivesPageSwitch(false)}>
                <TiFolderOpen className="folderOpenIcon" style={{marginBottom: 7}}  />
                Create New Archive
              </button>
              <button>
                <Unicons.UilCloudUpload className="icon" />
                Upload New File / Archive
              </button>
              <button>
                <Unicons.UilFilter className="icon" />
                FIlter
              </button>
            </div>
          </div>
          <div className={DashboardCSS.file}>
            <div className={DashboardCSS.tabContent}>
              <div className={DashboardCSS.ddhdh}>
                <div
                  className={`${DashboardCSS.inDdhdh} ${ArchivesCSS.inDdhdh}`}
                >
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
                          Date / Time
                        </div>
                      </th>
                      <th>
                        <div
                          className={`${DashboardCSS.tabTitle} ${ArchivesCSS.tabTitle2}`}
                        >
                          Download
                        </div>
                      </th>
                    </tr>
                    {archivesData.map((list, i) => (
                      <tr key={i}>
                        <td
                          className={`${DashboardCSS.fileDescription} ${ArchivesCSS.fileDescription}`}
                        >
                          <img src={list.img} alt={list.img} />
                          <div className="fNameD">
                            <p>{list.name}</p>
                            <p>{list.title}</p>
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
                            <button>Download</button>
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
        </>
      ) : (
        <CreateArchives setArchivesPageSwitch={setArchivesPageSwitch} />
        // <UploadArchiveFile setArchivesPageSwitch={setArchivesPageSwitch} />
      )}
    </div>
  );
};

export default Archives;
