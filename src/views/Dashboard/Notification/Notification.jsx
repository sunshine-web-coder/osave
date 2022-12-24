import React from "react";
import NotificationCSS from "./Notification.module.scss";
import { notificationData } from "../../../components/data";
import { MdDelete } from "react-icons/md";
import Pagination from "../../../components/Pagination/Pagination";

const Notification = () => {
  return (
    <div className={NotificationCSS.Notification}>
      <div className={NotificationCSS.inNotification}>
        <div className={NotificationCSS.header}>
          <div className={NotificationCSS.nTitle}>Archive Description</div>
          <div className={NotificationCSS.nTitle}>Date / Time</div>
        </div>
        {notificationData.map((nList, i) => (
          <div className={NotificationCSS.nContent} key={i}>
            <div className={NotificationCSS.left}>
              <div className={NotificationCSS.leftDetails}>
                <p className={NotificationCSS.nCTitle}>{nList.title}</p>
                <p className={NotificationCSS.nCDesc}>{nList.desc}</p>
              </div>
              <div className={NotificationCSS.leftDetails}>
                <p className={NotificationCSS.nCDate}>{nList.date}</p>
                <p className={NotificationCSS.nCTime}>{nList.time}</p>
              </div>
            </div>
            <div className={NotificationCSS.right}>
              <MdDelete className="deleteIcon"/>
            </div>
          </div>
        ))}

        <div className={NotificationCSS.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Notification;
