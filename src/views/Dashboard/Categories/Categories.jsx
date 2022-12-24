import React, { useState } from "react";
import DashboardCSS from "../Dashboard.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import { dataByCategories } from "../../../components/data";
import Document from "./Document";
import * as Unicons from "@iconscout/react-unicons";
import TabsMenu from "../../../components/TabComponent/TabsMenu";

const Categories = () => {
  const [filterData, setFilterData] = useState(dataByCategories);
  const filterResult = (catItem) => {
    const result = dataByCategories.filter((curData) => {
      return curData.category === catItem;
    });
    setFilterData(result);
  };
  return (
    <div className={DashboardCSS.categories}>
      <div className={DashboardCSS.file}>
        <div className={DashboardCSS.header}>
          <div className={DashboardCSS.left}>
            <h3>Categories</h3>
          </div>
          <div className={DashboardCSS.right}>
            <button>
              <Unicons.UilFilter className="icon" />
              FIlter
            </button>
          </div>
        </div>
      </div>
      <div className={DashboardCSS.file}>
        <div className={DashboardCSS.tabContent}>
          <TabsMenu
            filterResult={filterResult}
            setFilterData={setFilterData}
            dataByCategories={dataByCategories}
          />
          <div className={DashboardCSS.ddhdh}>
            <div className={DashboardCSS.inDdhdh}>
              <table>
                <tr>
                  <th>
                    <div className={DashboardCSS.tabTitle}>
                      File Description
                    </div>
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
                <Document filterData={filterData} />
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Categories;
