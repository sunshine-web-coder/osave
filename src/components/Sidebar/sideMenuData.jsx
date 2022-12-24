import fileImg from "../../assets/sidebar/list/file.png"
import catImg from "../../assets/sidebar/list/categories.png"
import archImg from "../../assets/sidebar/list/archives.png"
import recyImg from "../../assets/sidebar/list/recyclebin.png"

export const sideBarMenu = [
  {
    img: fileImg,
    label: "Files",
    slug: "/dashboard/files",
  },
  {
    img: catImg,
    label: "Categories",
    slug: "/dashboard/categories",
  },
  {
    img: archImg,
    label: "Archives",
    slug: "/dashboard/archives",
  },
  {
    img: recyImg,
    label: "Recycle BIN",
    slug: "/dashboard/recycle-bin",
  },
];
