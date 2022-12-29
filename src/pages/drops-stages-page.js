/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all stages with drop information
 *
 * @summary drops stages page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:52:36
 * Last modified  : 2022-12-29 09:32:28
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import SearchBar from "../components/search-bar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";

function DropsStagesPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/drops/stages`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <DropsStagesInnerPage data={data} />;
}

function DropsStagesInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  const [search, setSearch] = useState(null);

  return (
    <>
      <Toolbar currentPage="掉落数据（按关卡）" />

      <div className="mdui-container">
        {/* search */}
        <SearchBar
          className="mdui-m-t-4 mdui-textfield-expanded"
          placeholder="搜索关卡代号/名称"
          onChange={(e) => {
            var content = e.target.value;
            if (content === "") {
              setSearch(null);
            }
            setSearch(content);
          }}
          onClick={() => {
            setSearch(null);
          }}
        />

        <div className="mdui-m-t-4">
          {search !== null && search !== "" && search !== " " ? null : (
            <span className="tag mdui-color-red">无搜索结果</span>
          )}
          {data.map((stage, key) => {
            return (
              <div
                key={key}
                className={[
                  "mdui-chip",
                  search !== null &&
                  search !== "" &&
                  search !== " " &&
                  `${stage.code} ${stage.name}`.includes(search)
                    ? ""
                    : "mdui-hidden",
                ].join(" ")}
                onClick={() => navigate(`/drops/stages/${stage.id}`)}
              >
                <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DropsStagesPage;
