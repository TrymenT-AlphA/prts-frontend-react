/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all items with drop information
 *
 * @summary drops items page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:50:43
 * Last modified  : 2022-12-29 03:16:40
 */

import { useParams } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import ItemCost from "../components/item-cost";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getProfession from "../utils/getProfession";
import getSubProfession from "../utils/getSubProfession";
import getHtml from "../utils/getHtml";
import getSVG from "../utils/getSVG";

function RecruitPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/drops/items`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <RecruitInnerPage data={data} />;
}

function RecruitInnerPage(props) {
  const data = props.data;

  return (
    <>
      <Toolbar currentPage="公开招募计算器" />
    </>
  );
}

export default RecruitPage;
