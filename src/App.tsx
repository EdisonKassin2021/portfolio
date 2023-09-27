import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { token, username } from "./configs/github";
import { useAppDispatch } from "./redux/app/hooks";
import { fetchGithubRealisation } from "./redux/features/realisations/RealisationSlice";
import _ from "lodash";
import { BASE_ROUTE } from "./routes/constants";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      // Configurer l'en-tête d'autorisation si vous avez un token d'accès GitHub
      const headers = token ? { Authorization: `token ${token}` } : {};

      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        { headers }
      );

      // Filtrer les référentiels qui commencent par "PROJECT-"
      const filteredRepositories = response.data.filter((repo: any) =>
        repo.name.startsWith("PROJECT-")
      );

      if (response.status === 200) {
        dispatch(
          fetchGithubRealisation({
            data: filteredRepositories,
            realisations: _.map(filteredRepositories, (repo: any) => ({
              name: _.split(repo.name, "---")[1],
              id: repo.id,
              git_url: repo.git_url,
              description: repo.description,
              archived: repo.archived,
              created_at: repo.created_at,
              edited_at: repo.edited_at,
              download_path: repo.download_url,
              languages_url: repo.languages_url,
              size: repo.size,
              visibility: repo.visibility,
              url: repo.url,
            })),
          })
        );
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full w-full">
      {/* //TODO: A supprimer qd tout seras okey ligne 56*/}
      <Navigate to={`${BASE_ROUTE}/maintenance`} />
      <Outlet />
    </div>
  );
}

export default App;
