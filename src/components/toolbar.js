/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a toolbar component, just show where the current page is
 *
 * @summary a toolbar
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:25:39 
 * Last modified  : 2022-12-29 22:06:59
 */

import { MenuIcon } from "./icons";

function Toolbar(props) {

  return (
    <div className="mdui-appbar">
      <div className="mdui-toolbar mdui-color-theme">
        {/* drawer control button */}
        <button
          className="mdui-btn mdui-btn-icon mdui-ripple"
          mdui-drawer="{target: '#left-drawer'}"
        >
          <MenuIcon />
        </button>

        {/* title content navigate to home
        <span className="mdui-typo-headline" onClick={() => navigate("/")}>
          PRTS
        </span> */}

        {/* show where are we now */}
        <span className="mdui-typo-headline">{props.currentPage}</span>

        {/* just space */}
        <div className="mdui-toolbar-spacer"></div>
      </div>
    </div>
  );
}

export default Toolbar;
