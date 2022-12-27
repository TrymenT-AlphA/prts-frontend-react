/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a place holder when the page is loading
 *
 * @summary loading page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 11:00:50
 * Last modified  : 2022-12-27 19:50:58
 */

import Toolbar from "../components/toolbar";

function LoadingPage() {
  return (
    <>
      <Toolbar currentPage={`加载中`} />
      <div className="mdui-container">
        <div className="mdui-m-t-1 mdui-center mdui-spinner" />
      </div>
    </>
  );
}

export default LoadingPage;
