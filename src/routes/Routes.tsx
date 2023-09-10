import { Routes, Route } from "react-router-dom";
import { BASE_ROUTE } from "./constants";
import App from "../App";
import Accueil from "../pages/Accueil/Accueil";
import Layout from "./Layout";
import Profils from "../pages/Profils";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import CustomCV from "../pages/CV";
import Contacts from "../pages/Contacts";
import FormationForm from "../pages/CV/Formations/FormationForm";
import CreateForm from "../pages/CV/Formations/CreateForm";
import EditForm from "../pages/CV/Formations/EditForm";

const RouteGroups = () => {
  return (
    <Layout>
      <Routes>
        <Route path={BASE_ROUTE} element={<App />}>
          <Route path="" element={<Accueil />} />
          <Route path="home" element={<Accueil />} />
          <Route path="home/voir-plus" element={<Accueil />} />

          <Route path="profils" element={<Profils />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="cv" element={<CustomCV />} />
          <Route path="cv/formation" element={<FormationForm />}>
            <Route path="create" element={<CreateForm />} />
            <Route path="edit/:formation_id" element={<EditForm />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default RouteGroups;
