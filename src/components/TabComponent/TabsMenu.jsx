import { useState } from "react";
import tabMenuCSS from "./TabComponent.module.scss";

const TabsMenu = ({ filterResult, setFilterData, dataByCategories }) => {
    const [active, setActive] = useState("a");

  return (
    <div className={tabMenuCSS.tabMenu}>
        <button className={`${active === "a" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        setFilterData(dataByCategories);
        setActive("a");
        }}>All</button>

        <button className={`${active === "b" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        filterResult("docx");
        setActive("b");
        }}>Document</button>

        <button className={`${active === "c" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        filterResult("pptx");
        setActive("c");
        }}>Slide Presentation</button>

        <button className={`${active === "d" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        filterResult("pdf");
        setActive("d");
        }}>PDF</button>

        <button className={`${active === "e" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        filterResult("xlsx");
        setActive("e");
        }}>SpreadSheet</button>

        <button className={`${active === "f" ? tabMenuCSS.activeButton : ""}`} 
        onClick={() => {
        filterResult("image");
        setActive("f");
        }}>Image</button>
    </div>
  )
}

export default TabsMenu