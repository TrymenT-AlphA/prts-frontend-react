/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all stages page
 *
 * @summary stages page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:49:46
 * Last modified  : 2022-12-29 03:11:54
 */

import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getChapter from "../utils/getChapter";

function StagesMainPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/stages/main`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <StagesMainInnerPage data={data} />;
}

function StagesMainInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  // 主线
  // const GUIDE = data.filter((stage) => stage.type === "GUIDE");
  const MAIN = data.filter((stage) => stage.type === "MAIN");
  const SUB = data.filter((stage) => stage.type === "SUB");
  const SPECIAL_STORY = data.filter((stage) => stage.type === "SPECIAL_STORY");

  return (
    <>
      <Toolbar currentPage="关卡总览（主线关卡）" />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-typo">
          {[
            "main_0",
            "main_1",
            "main_2",
            "main_3",
            "main_4",
            "main_5",
            "main_6",
            "main_7",
            "main_8",
            "main_9",
            "main_10",
            "main_11",
          ].map((zoneId, key) => {
            return (
              <div key={key} className="mdui-panel" mdui-panel={1}>
                <div
                  className={[
                    "mdui-panel-item",
                    key ? "" : "mdui-panel-item-open",
                  ].join(" ")}
                >
                  <div className="mdui-panel-item-header">
                    {getChapter(zoneId)}
                  </div>
                  <div className="mdui-panel-item-body">
                    <div className="mdui-table-fluid mdui-shadow-0">
                      <table className="mdui-table">
                        <tbody>
                          <tr>
                            <th>
                              <span className="tag mdui-color-indigo">
                                主线
                              </span>
                            </th>
                            <td>
                              {MAIN.filter(
                                (stage) => stage.zoneId === zoneId
                              ).map((stage, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="mdui-chip"
                                    onClick={() =>
                                      navigate(`/stages/${stage.id}`)
                                    }
                                  >
                                    <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span className="tag mdui-color-lime">支线</span>
                            </th>
                            <td>
                              {SUB.filter(
                                (stage) => stage.zoneId === zoneId
                              ).map((stage, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="mdui-chip"
                                    onClick={() =>
                                      navigate(`/stages/${stage.id}`)
                                    }
                                  >
                                    <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span className="tag mdui-color-red">特殊</span>
                            </th>
                            <td>
                              {SPECIAL_STORY.filter(
                                (stage) => stage.zoneId === zoneId
                              ).map((stage, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="mdui-chip"
                                    onClick={() =>
                                      navigate(`/stages/${stage.id}`)
                                    }
                                  >
                                    <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StagesMainPage;
