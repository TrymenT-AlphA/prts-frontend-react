/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all stages page
 *
 * @summary stages page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:49:46
 * Last modified  : 2022-12-29 03:11:46
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import DataTable from "../components/data-table";
import Checkbtn from "../components/checkbtn";
import CheckbtnGroup from "../components/checkbtn-group";
import SearchBar from "../components/search-bar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getProfession from "../utils/getProfession";
import getSubProfession from "../utils/getSubProfession";
import getHtml from "../utils/getHtml";

function StagesActiPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/stages`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <StagesActiInnerPage data={data} />;
}

function StagesActiInnerPage(props) {
  const data = props.data;
  console.log(data);
  // 主线
  const GUIDE = data.filter((stage) => stage.type === "GUIDE");
  const MAIN = data.filter((stage) => stage.type === "MAIN");
  const SUB = data.filter((stage) => stage.type === "SUB");
  const SPECIAL_STORY = data.filter((stage) => stage.type === "SPECIAL_STORY");
  console.log(MAIN);
  // 常驻
  const CAMPAIGN = data.filter((stage) => stage.type === "CAMPAIGN");
  const CLIMB_TOWER = data.filter((stage) => stage.type === "CLIMB_TOWER");
  const DAILY = data.filter((stage) => stage.type === "DAILY");
  // 活动
  const ACTIVITY = data.filter((stage) => stage.type === "ACTIVITY");
  // 隐藏
  return (
    <>
      <Toolbar currentPage="关卡总览（活动关卡）" />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-typo">
        </div>
      </div>
    </>
  );
}

export default StagesActiPage;
