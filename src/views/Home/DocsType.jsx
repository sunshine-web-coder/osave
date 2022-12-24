import docsFolder from "../../assets/svgFolderIcon/word.svg";
import imageFolder from "../../assets/svgFolderIcon/image.svg";
import pdfFolder from "../../assets/svgFolderIcon/pdf.svg";
import presentationSlideFolder from "../../assets/svgFolderIcon/presentation-slide.svg";
import spreadsheetFolder from "../../assets/svgFolderIcon/spreadsheet.svg";
import DocsTypeCss from "./Home.module.scss";

const DocsType = () => {
  const list = [
    {
      icon: docsFolder,
      fname: "Word Documents",
      ext: ".doc",
    },
    {
      icon: imageFolder,
      fname: "Images",
      ext: "Jpg, Png e.t.c",
    },
    {
      icon: pdfFolder,
      fname: "PDF",
      ext: ".pdf",
    },
    {
      icon: presentationSlideFolder,
      fname: "Presentatin Slides",
      ext: ".ppt e.t.c.",
    },
    {
      icon: spreadsheetFolder,
      fname: "Spread Sheet",
      ext: ".xl, spss e.t.c.",
    },
  ];

  return (
    <div className={DocsTypeCss.docsType}>
      <div className={DocsTypeCss.inDocsType}>
        <div className={DocsTypeCss.top}>
          <div className={DocsTypeCss.subtitle}>
            <h3>Save your documents online</h3>
          </div>
          <div className={DocsTypeCss.desc}>
            <p>Document Type</p>
          </div>
        </div>
        <div className={DocsTypeCss.bottom}>
          {list.map((fList, i) => (
            <div className={DocsTypeCss.box} key={i}>
              <div className={DocsTypeCss.fIcon}>
                <img src={fList.icon} alt="docsImg" />
              </div>
              <div className={DocsTypeCss.fname}>
                <p>
                  {fList.fname}
                  <br />
                  <span>{fList.ext}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocsType;
