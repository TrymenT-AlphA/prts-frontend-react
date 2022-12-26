/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a drawer navigation on the left side
 *
 * @summary left side drawer navigation
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:24:47 
 * Last modified  : 2022-12-27 00:25:20
 */

import { useNavigate } from "react-router-dom";
import * as Icons from "./icons";
import useMdui from "../hooks/useMdui";

function LeftDrawer() {
  const navigate = useNavigate();
  useMdui();

  return (
    <div id="left-drawer" className="mdui-drawer">
      <ul className="mdui-list" mdui-collapse="{accordion: true}">
        {/* navigate to "/" */}
        <li
          className="mdui-list-item mdui-ripple"
          onClick={() => navigate("/")}
        >
          <Icons.HomeIcon className="mdui-list-item-icon" />
          <div className="mdui-list-item-content">首页</div>
        </li>

        {/* navigate to "/characters" */}
        <li
          className="mdui-list-item mdui-ripple"
          onClick={() => navigate("/characters")}
        >
          <Icons.CharIcon className="mdui-list-item-icon" />
          <div className="mdui-list-item-content">干员总览</div>
        </li>

        {/* navigate to "/enemies" */}
        <li
          className="mdui-list-item mdui-ripple"
          onClick={() => navigate("/enemies")}
        >
          <Icons.EnemyIcon className="mdui-list-item-icon" />
          <div className="mdui-list-item-content">敌人总览</div>
        </li>

        {/* navigate to "/items" */}
        <li
          className="mdui-list-item mdui-ripple"
          onClick={() => navigate("/items")}
        >
          <Icons.ItemIcon className="mdui-list-item-icon" />
          <div className="mdui-list-item-content">道具总览</div>
        </li>

        {/* navigate to "/stages" */}
        <li
          className="mdui-list-item mdui-ripple"
          onClick={() => navigate("/stages")}
        >
          <Icons.StageIcon className="mdui-list-item-icon" />
          <div className="mdui-list-item-content">关卡总览</div>
        </li>

        <li className="mdui-collapse-item mdui-collapse-item-open">
          <div className="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <Icons.DropIcon className="mdui-list-item-icon" />
            <div className="mdui-list-item-content">掉落数据</div>
            <Icons.ArrowIcon className="mdui-collapse-item-arrow" />
          </div>
          <ul className="mdui-collapse-item-body mdui-list">
            {/* navigate to "/drops/items" */}
            <li
              className="mdui-list-item mdui-ripple"
              onClick={() => navigate("/drops/items")}
            >
              <div className="mdui-list-item-content">按道具</div>
              <Icons.ItemIcon className="mdui-list-item-icon" />
            </li>

            {/* navigate to "/drops/stages" */}
            <li
              className="mdui-list-item mdui-ripple"
              onClick={() => navigate("/drops/stages")}
            >
              <div className="mdui-list-item-content">按关卡</div>
              <Icons.StageIcon className="mdui-list-item-icon" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LeftDrawer;