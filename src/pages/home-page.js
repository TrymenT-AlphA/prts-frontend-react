/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * home page
 *
 * @summary home page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:32:29
 * Last modified  : 2023-02-28 01:06:52
 */

import Toolbar from "../components/toolbar";
import { useEffect } from "react";
import DameDaneParticle from "../utils/damedane";

function HomePage() {
  useEffect(() => {
    var canvas = document.getElementById("akCanvas");
    var damedane = new DameDaneParticle(canvas, {
      src: "./logo/island.png",
      renderX: 100,
      renderY: 100,
      w: 300,
      size: 1,
      spacing: 2,
      validColor: {
        min: 300,
        max: 765,
        invert: false,
      },
      effectParticleMode: "repulsion",
      Thickness: 25,
    });
  }, []);

  return (
    <>
      <Toolbar currentPage={`首页`} />
      <div id="akCanvasContainer">
        <canvas id="akCanvas" />
      </div>
    </>
  );
}

export default HomePage;
