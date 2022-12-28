/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * entry of the web app, all routes here
 *
 * @summary routes
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:33:10
 * Last modified  : 2022-12-29 01:19:07
 */

import { Route, Routes } from "react-router-dom";
import LeftDrawer from "./components/left-drawer";
import useMdui from "./hooks/useMdui";
import HomePage from "./pages/home-page";
import CharactersPage from "./pages/characters-page";
import CharacterPage from "./pages/character-page";
import EnemiesPage from "./pages/enemies-page";
import EnemyPage from "./pages/enemy-page";
import ItemsPage from "./pages/items-page";
import ItemPage from "./pages/item-page";
import StagesMainPage from "./pages/stages-main-page";
import StagesPermPage from "./pages/stages-perm-page";
import StagesActiPage from "./pages/stages-acti-page";
import StagePage from "./pages/stage-page";
import DropsItemsPage from "./pages/drops-items-page";
import DropsItemPage from "./pages/drops-item-page";
import DropsStagesPage from "./pages/drops-stages-page";
import DropsStagePage from "./pages/drops-stage-page";
import RecruitPage from "./pages/recruit-page"

function App() {
  useMdui([]);

  return (
    <>
      <LeftDrawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/enemies" element={<EnemiesPage />} />
        <Route path="/enemies/:id" element={<EnemyPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        <Route path="/stages/main" element={<StagesMainPage />} />
        <Route path="/stages/perm" element={<StagesPermPage />} />
        <Route path="/stages/acti" element={<StagesActiPage />} />
        <Route path="/stages/:id" element={<StagePage />} />
        <Route path="/drops/items" element={<DropsItemsPage />} />
        <Route path="/drops/stages" element={<DropsStagesPage />} />
        <Route path="/drops/items/:id" element={<DropsItemPage />} />
        <Route path="/drops/stages/:id" element={<DropsStagePage />} />
        <Route path="/recruit" element={<RecruitPage />}/>
      </Routes>
    </>
  );
}

export default App;
