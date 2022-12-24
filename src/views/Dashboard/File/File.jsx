import React from "react";
import TablePagination from "@mui/material/TablePagination";
import DashboardCSS from "../Dashboard.module.scss";
import { data } from "../../../components/data";
import { MdDelete } from "react-icons/md";
import * as Unicons from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const File = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();

  const navigateToArchiveTab = () => {
    navigate("/dashboard/archives");
  };

  return (
    <div className={DashboardCSS.file}>
      <div className={DashboardCSS.header}>
        <div className={DashboardCSS.left}>
          <h3>Recent Files</h3>
        </div>
        <div className={DashboardCSS.right}>
          <button onClick={navigateToArchiveTab}>
            <Unicons.UilCloudUpload className="icon" />
            Upload New File / Archive
          </button>
          <button>
            <Unicons.UilFilter className="icon" />
            FIlter
          </button>
        </div>
      </div>
      <div className={DashboardCSS.tabContent}>
        <div className={DashboardCSS.ddhdh}>
          <div className={DashboardCSS.inDdhdh}>
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
                      <MdDelete className="deleteIcon" />
                      <Unicons.UilEllipsisV />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
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

export default File;
