/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * home page
 *
 * @summary home page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:32:29
 * Last modified  : 2022-12-27 19:50:47
 */

import Toolbar from "../components/toolbar";

function HomePage() {
  return (
    <>
      <Toolbar currentPage={`首页`} />
      <div className="mdui-container">
        <div className="mdui-typo-display-4 mdui-text-center">PRTS 终端</div>
      </div>
    </>
  );
}

export default HomePage;
