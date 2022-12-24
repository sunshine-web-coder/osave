import React, { useState } from "react";
import { dataByCategories } from "../../views/Dashboard/Categories/data";
import Document from "../../views/Dashboard/Categories/Document";
import TabsCSS from "./TabComponent.module.scss";

const TabComponent = ({ filterData, filterResult}) => {
    
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Document",
      content: <Document />,
    },
    {
      id: 2,
      tabTitle: "Slide Presentation",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "PDF",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "SpreadSheet",
      content: "Contenido de tab 4.",
    },
    {
      id: 5,
      tabTitle: "Image",
      content: "Contenido de tab 5.",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className={TabsCSS.tabContainer}>
      <div className={TabsCSS.tabs}>
        {tabs.map((tab, i) => (
          <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={TabsCSS.tabsContent}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
