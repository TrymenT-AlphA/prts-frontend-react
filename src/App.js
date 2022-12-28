/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * entry of the web app, all routes here
 *
 * @summary routes
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:33:10
 * Last modified  : 2022-12-28 22:56:22
 */

import * as RRD from "react-router-dom";
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

function App() {
  useMdui([]);

  return (
    <>
      <LeftDrawer />
      <RRD.Routes>
        <RRD.Route path="/" element={<HomePage />} />
        <RRD.Route path="/characters" element={<CharactersPage />} />
        <RRD.Route path="/characters/:id" element={<CharacterPage />} />
        <RRD.Route path="/enemies" element={<EnemiesPage />} />
        <RRD.Route path="/enemies/:id" element={<EnemyPage />} />
        <RRD.Route path="/items" element={<ItemsPage />} />
        <RRD.Route path="/items/:id" element={<ItemPage />} />
        <RRD.Route path="/stages/main" element={<StagesMainPage />} />
        <RRD.Route path="/stages/perm" element={<StagesPermPage />} />
        <RRD.Route path="/stages/acti" element={<StagesActiPage />} />
        <RRD.Route path="/stages/:id" element={<StagePage />} />
        <RRD.Route path="/drops/items" element={<DropsItemsPage />} />
        <RRD.Route path="/drops/stages" element={<DropsStagesPage />} />
        <RRD.Route path="/drops/items/:id" element={<DropsItemPage />} />
        <RRD.Route path="/drops/stages/:id" element={<DropsStagePage />} />
      </RRD.Routes>
    </>
  );
}

export default App;
