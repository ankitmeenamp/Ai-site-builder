
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import MyProject from "./pages/MyProject";
import Preview from "./pages/Preview";

import View from "./pages/View";
import Navbar from "./components/Navbar";
import Community from "./pages/Cummunity";
import { Toaster } from "sonner";
import Authpage from "./pages/auth/AuthPage";
import Settings from "./pages/Settings";
import Loading from "./pages/Loading";


function App() {

  const {pathname} = useLocation()

  const hideNavbar = pathname.startsWith('/projects/') && pathname !== '/projects' 
  || pathname.startsWith('/view/')
  || pathname.startsWith('/preview/')

  return (
    <div>
    <Toaster />
      {!hideNavbar && <Navbar />}
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<View />} />
        <Route path="/auth/:pathname" element={<Authpage />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
