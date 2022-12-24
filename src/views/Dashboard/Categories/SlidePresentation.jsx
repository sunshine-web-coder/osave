import React, { useState } from "react";
import pdfExtImg from "../../../assets/docExt/pdf.png";
import TablePagination from "@mui/material/TablePagination";
import DashboardCSS from "../../Dashboard.module.scss";
import { data } from "../data";

const SlidePresentation = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={DashboardCSS.file}>
      <div className={DashboardCSS.header}>
        <div className={DashboardCSS.left}>
          <h3>Recent Files</h3>
        </div>
        <div className={DashboardCSS.right}>
          <button>
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3225 9.11266C18.2025 10.8527 16.8425 12.7526 14.1825 12.7526C12.9625 12.7526 12.3225 12.7526 12.3225 12.7526C11.8825 12.7526 11.5225 12.4127 11.5225 11.9727C11.5225 11.5327 11.8825 11.2127 12.3225 11.2127C12.3225 11.2127 12.9625 11.1727 14.1825 11.1727C15.8425 11.1727 16.6625 10.0526 16.7425 8.99264C16.8225 7.89264 16.1225 6.67268 14.4225 6.43268C14.2025 6.39268 14.0025 6.27264 13.8825 6.09264C13.7625 5.91264 13.7225 5.67265 13.7625 5.45265C13.9825 4.51265 13.7425 3.77268 13.1225 3.43268C12.6025 3.13268 11.7625 3.15266 11.0825 3.81266C10.9025 3.99266 10.6425 4.07268 10.4025 4.03268C10.1625 3.99268 9.94247 3.83266 9.82247 3.61266C8.66247 1.43266 6.88247 1.33264 5.70247 1.89264C4.56247 2.43264 3.66247 3.77267 4.36247 5.47267C4.44247 5.67267 4.44247 5.91266 4.34247 6.11266C4.24247 6.31266 4.06247 6.47268 3.86247 6.53268C1.48247 7.27268 1.52246 8.87268 1.60246 9.33268C1.74246 10.2127 2.44246 11.1127 3.52247 11.1127L6.02247 11.1327C6.46247 11.1327 6.82247 11.5126 6.82247 11.9526C6.82247 12.3926 6.46247 12.7926 6.02247 12.7926L3.54247 12.7327C1.78246 12.7327 0.322465 11.3726 0.0424648 9.55265C-0.177535 8.15265 0.422465 6.27267 2.66246 5.27267C2.14246 3.07267 3.38247 1.21268 5.06247 0.43268C6.78247 -0.38732 9.20247 -0.14733 10.8025 2.07267C11.8025 1.51267 12.9825 1.47268 13.9625 2.03268C14.8025 2.51268 15.5625 3.51266 15.4825 5.01266C17.5425 5.67266 18.4225 7.51266 18.3225 9.11266ZM11.9425 9.77267C12.1025 9.93267 12.3025 10.0127 12.5025 10.0127C12.7025 10.0127 12.9025 9.93267 13.0625 9.77267C13.3825 9.45267 13.3825 8.95268 13.0625 8.63268L9.68247 5.23268C9.52247 5.07268 9.32247 4.99264 9.12247 4.99264C8.90247 4.99264 8.70247 5.07268 8.56247 5.23268L5.18247 8.63268C4.86247 8.95268 4.86247 9.45267 5.18247 9.77267C5.50247 10.0927 6.00247 10.0927 6.32247 9.77267L8.34247 7.73268L8.36247 15.2127C8.36247 15.6527 8.72247 16.0127 9.16247 16.0127C9.60247 16.0127 9.96247 15.6527 9.96247 15.2127L9.94247 7.75265L11.9425 9.77267Z"
                fill="#4378DB"
              />
            </svg>
            Upload New File / Archive
          </button>
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4985 0.419995C17.3585 0.159995 17.0785 0 16.7985 0H0.778475C0.478475 0 0.218475 0.159995 0.0784748 0.419995C-0.0615252 0.679995 -0.00152031 0.99999 0.15848 1.23999L6.39847 10.4V16.46C6.39847 17.08 6.81848 17.6 7.45848 17.6H10.1385C10.7585 17.6 11.1985 17.1 11.1985 16.46V10.4L17.4385 1.23999C17.5785 0.99999 17.6385 0.679995 17.4985 0.419995ZM9.75848 9.71999C9.67848 9.85999 9.57847 10 9.57847 10.16V16H7.97847V10.16C7.97847 10 7.89847 9.83999 7.79847 9.71999L5.89847 6.93999C6.29847 6.81999 6.77847 6.69999 7.29847 6.71999C7.91847 6.71999 8.33847 6.84001 8.79847 6.96001C9.27847 7.08001 9.75848 7.19999 10.4385 7.21999C10.8385 7.21999 11.1985 7.20001 11.5185 7.16001L9.75848 9.71999ZM12.6785 5.43999C12.6585 5.43999 11.8185 5.82 10.4385 5.8C9.93848 5.8 9.55848 5.7 9.13848 5.58C8.65848 5.46 8.09847 5.32 7.29847 5.3C6.39847 5.3 5.59848 5.51999 5.05848 5.71999L2.25848 1.58H15.2785L12.6785 5.43999ZM11.0385 4.11999C10.8985 3.97999 10.7985 3.76001 10.7985 3.56001C10.7985 3.34001 10.8785 3.14 11.0385 3C11.1785 2.86 11.3985 2.76001 11.5985 2.76001C11.8185 2.76001 12.0185 2.84 12.1585 3C12.2985 3.16 12.3985 3.36001 12.3985 3.56001C12.3985 3.78001 12.3185 3.97999 12.1585 4.11999C11.9985 4.25999 11.7985 4.36001 11.5985 4.36001C11.3985 4.36001 11.1785 4.25999 11.0385 4.11999Z"
                fill="#4378DB"
              />
            </svg>
            FIlter
          </button>
        </div>
      </div>
      <div className={DashboardCSS.tabContent}>
        <table>
          <tr>
            <th>
              <div className={DashboardCSS.tabTitle}>File Description</div>
            </th>
            <th>
              <div className={DashboardCSS.tabTitle}>Archives</div>
            </th>
            <th>
              <div className={DashboardCSS.tabTitle}>Date / Time</div>
            </th>
            <th>
              <div className={DashboardCSS.tabTitle}>Share</div>
            </th>
            <th>
              <div className={DashboardCSS.tabTitle}>Download</div>
            </th>
            <th></th>
          </tr>

          {data.map((list, i) => (
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
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.175 0.545683L4.5425 1.09138H2.27125H0V2.18278V3.27417H9.2H18.4V2.18278V1.09138H16.1287H13.8575L13.225 0.545683L12.5925 -1.41896e-05H9.2H5.8075L5.175 0.545683Z"
                      fill="#4378DB"
                    />
                    <path
                      d="M1.32245 11.5567L1.36558 18.6386L1.76808 19.0752C1.99808 19.3298 2.42933 19.633 2.74558 19.7664C3.29183 20.0089 3.5362 20.021 9.4012 19.9846L15.4818 19.9483L15.9993 19.6087C16.3012 19.4147 16.6606 19.0509 16.8187 18.7962C17.0918 18.3354 17.1062 18.0686 17.1062 11.399V4.48684H9.19995H1.2937L1.32245 11.5567Z"
                      fill="#4378DB"
                    />
                  </svg>

                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                      fill="#263238"
                    />
                    <path
                      d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                      stroke="black"
                    />
                    <path
                      d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                      stroke="black"
                      stroke-opacity="0.2"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {data.map((listItem, i) => (
        <div className={DashboardCSS.mobileTabContent} key={i}>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.tabTitle}>File Description</div>
            <div className={DashboardCSS.mTCcontent}>
              <img src={listItem.img} alt={listItem.img} />
              <div className="fNameD">
                <p>{listItem.name}</p>
                <p>{listItem.title}</p>
              </div>
            </div>
          </div>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.tabTitle}>Archives</div>
            <div className={DashboardCSS.fileArchives}>
              <p>{listItem.archiveName}</p>
            </div>
          </div>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.tabTitle}>Date / Time</div>
            <div className={DashboardCSS.fileDateTime}>
              <p>{listItem.date}</p>
              <p>{listItem.time}</p>
            </div>
          </div>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.tabTitle}>Share</div>
            <div className={DashboardCSS.fileShare}>
              <button>Share</button>
            </div>
          </div>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.tabTitle}>Download</div>
            <div className={DashboardCSS.fileDownload}>
              <button>Download</button>
            </div>
          </div>
          <div className={DashboardCSS.box}>
            <div className={DashboardCSS.fileDeleteOption}>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.175 0.545683L4.5425 1.09138H2.27125H0V2.18278V3.27417H9.2H18.4V2.18278V1.09138H16.1287H13.8575L13.225 0.545683L12.5925 -1.41896e-05H9.2H5.8075L5.175 0.545683Z"
                  fill="#4378DB"
                />
                <path
                  d="M1.32245 11.5567L1.36558 18.6386L1.76808 19.0752C1.99808 19.3298 2.42933 19.633 2.74558 19.7664C3.29183 20.0089 3.5362 20.021 9.4012 19.9846L15.4818 19.9483L15.9993 19.6087C16.3012 19.4147 16.6606 19.0509 16.8187 18.7962C17.0918 18.3354 17.1062 18.0686 17.1062 11.399V4.48684H9.19995H1.2937L1.32245 11.5567Z"
                  fill="#4378DB"
                />
              </svg>

              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                  fill="#263238"
                />
                <path
                  d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                  stroke="black"
                />
                <path
                  d="M3.5 2C3.5 2.82386 2.82386 3.5 2 3.5C1.17614 3.5 0.5 2.82386 0.5 2C0.5 1.17614 1.17614 0.5 2 0.5C2.82386 0.5 3.5 1.17614 3.5 2ZM0.5 8C0.5 7.17614 1.17614 6.5 2 6.5C2.82386 6.5 3.5 7.17614 3.5 8C3.5 8.82386 2.82386 9.5 2 9.5C1.17614 9.5 0.5 8.82386 0.5 8ZM0.5 14C0.5 13.1761 1.17614 12.5 2 12.5C2.82386 12.5 3.5 13.1761 3.5 14C3.5 14.8239 2.82386 15.5 2 15.5C1.17614 15.5 0.5 14.8239 0.5 14Z"
                  stroke="black"
                  stroke-opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default SlidePresentation;
