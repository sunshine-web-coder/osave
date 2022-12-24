import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home/Home";
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/Register";
import ForgetPassword from "./views/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "./views/Auth/ResetPassword/ResetPassword";
import Dashboard from "./views/Dashboard/Dashboard";
import File from "./views/Dashboard/File/File";
import Categories from "./views/Dashboard/Categories/Categories";
import Archives from "./views/Dashboard/Archives/Archives";
import RecycleBin from "./views/Dashboard/RecycleBin/RecycleBin";
import { useState } from "react";
import AccountSettings from "./components/Auth/AccountSettings";
import Notification from "./views/Dashboard/Notification/Notification";
import useLocalStorage from "./components/localStorageHook";
import NotFound from "./views/NotFound/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('is-logged-in', false);
  const [uploadNewFile, setUploadNewFile] = useState(true);
  const [uploadNewFile2, setUploadNewFile2] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header
        isLoggedIn={isLoggedIn}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <Routes>
        {handleToggle ? (
          <Route path="/dashboard" element={ <Dashboard openMenu={openMenu} setOpenMenu={setOpenMenu} setIsLoggedIn={setIsLoggedIn} /> }>
            <Route path="files" exact element={<File />} />
            <Route path="categories" element={<Categories />} />
            <Route path="archives" element={ <Archives 
            uploadNewFile={uploadNewFile} setUploadNewFile={setUploadNewFile} 
            uploadNewFile2={uploadNewFile2} setUploadNewFile2={setUploadNewFile2}
            />}/>
            <Route path="recycle-bin" element={<RecycleBin />} />
            <Route path="account-settings" element={<AccountSettings />} />
            <Route path="notifications" element={<Notification />} />
          </Route>
        ) : null}
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
