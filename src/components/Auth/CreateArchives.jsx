import React from "react";
import DashboardCSS from "../../views/Dashboard/Dashboard.module.scss";
import { TiFolderOpen } from "react-icons/ti";
import CreateArchivesCSS from "./Form.module.scss";

const CreateArchives = ({ setUploadNewFile }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className={DashboardCSS.file}>
      <div className={`${DashboardCSS.header} ${CreateArchivesCSS.header}`}>
        <div className={DashboardCSS.left}>
          <h3>Create Archive</h3>
        </div>
      </div>
      <div className={CreateArchivesCSS.createArchiveContainer}>
        <h4>Create Archive and Upload your files inside it</h4>
        <form onSubmit={handleSubmit}>
          <div className={CreateArchivesCSS.form_field}>
            <label htmlFor="Archive name">Archive name</label>
            <br />
            <input type="text" name="archiveName" />
          </div>
          <div className={CreateArchivesCSS.form_field}>
            <label htmlFor="Archive Description">Archive Description</label>
            <br />
            <textarea name="" />
          </div>
          <div className={CreateArchivesCSS.fCreateArchive}>
            <button onClick={() => setUploadNewFile(true)}>Cancel</button>
            <button>
              <TiFolderOpen className="folderOpenIcon" />
              Create New Archive
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateArchives;
