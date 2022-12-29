/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all stages page
 *
 * @summary stages page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:49:46
 * Last modified  : 2022-12-29 22:07:27
 */

import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";

function StagesActiPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/stages/acti`);

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
  const navigate = useNavigate();

  return (
    <>
      <Toolbar currentPage="关卡总览（活动关卡）" />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-typo">
          {[
            "act10d5",
            "act11d7",
            "act13d0",
            "act13d2",
            "act14d7",
            "act15d5",
            "act17d0",
            "act17d5",
            "act7mini",
            "act5sre",
            "act1lock",
            "act8mini",
            "act6sre",
            "act7sre",
            "act9mini",
            "act8sre",
            "act9sre",
            "act15side",
            "act10mini",
            "act16side",
            "act10sre",
            // "act3fun",
            "act17side",
            "act11sre",
            "act18side",
            "act19side",
            "act11mini",
            "act12sre",
            "act20side",
            "act1bossrush",
            "act12mini",
            "act13mini",
            "act13sre",
            "act21side",
            "act14sre",
          ].map((activity, key) => {
            const actiStages = data
              .filter((stage) => stage.activity === activity)
              .sort((stage1, stage2) => {
                return stage1.id < stage2.id ? -1 : 1;
              });

            return (
              <div key={key} className="mdui-panel" mdui-panel={1}>
                <div
                  className={[
                    "mdui-panel-item",
                    key ? "" : "mdui-panel-item-open",
                  ].join(" ")}
                >
                  <div className="mdui-panel-item-header">
                    {actiStages[0].activityName}
                  </div>
                  <div className="mdui-panel-item-body">
                    <div className="mdui-table-fluid mdui-shadow-0">
                      <table className="mdui-table">
                        <tbody>
                          {[
                            "_zone1",
                            "_zone2",
                            "_zone3",
                            "_zone4",
                            "_zone5",
                          ].map((zoneId, key) => {
                            const zoneStages = actiStages.filter(
                              (stage) =>
                                stage.zoneId === stage.activity + zoneId
                            );

                            if (!zoneStages.length) {
                              return null;
                            }

                            return (
                              <tr>
                                <th>
                                  <span className="tag mdui-color-indigo">
                                    {`区域${key + 1}`}
                                  </span>
                                </th>
                                <td>
                                  {zoneStages.map((stage, key) => {
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
                            );
                          })}
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

export default StagesActiPage;
