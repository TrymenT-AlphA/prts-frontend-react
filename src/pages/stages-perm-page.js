/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all stages page
 *
 * @summary stages page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:49:46
 * Last modified  : 2022-12-29 03:12:08
 */

import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";

function StagesPermPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/stages/perm`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <StagesPermInnerPage data={data} />;
}

function StagesPermInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  // 常驻
  const DAILY = data.filter((stage) => stage.type === "DAILY");
  const weekly_1 = DAILY.filter((stage) => stage.zoneId === "weekly_1");
  const weekly_2 = DAILY.filter((stage) => stage.zoneId === "weekly_2");
  const weekly_3 = DAILY.filter((stage) => stage.zoneId === "weekly_3");
  const weekly_4 = DAILY.filter((stage) => stage.zoneId === "weekly_4");
  const weekly_5 = DAILY.filter((stage) => stage.zoneId === "weekly_5");
  const weekly_6 = DAILY.filter((stage) => stage.zoneId === "weekly_6");
  const weekly_7 = DAILY.filter((stage) => stage.zoneId === "weekly_7");
  const weekly_8 = DAILY.filter((stage) => stage.zoneId === "weekly_8");
  const weekly_9 = DAILY.filter((stage) => stage.zoneId === "weekly_9");
  const CAMPAIGN = data.filter((stage) => stage.type === "CAMPAIGN");
  // const CLIMB_TOWER = data.filter((stage) => stage.type === "CLIMB_TOWER");
  // const tower_n_01 = data.filter((stage) => stage.zoneId === "tower_n_01");
  // const tower_n_02 = data.filter((stage) => stage.zoneId === "tower_n_02");
  // const tower_n_03 = data.filter((stage) => stage.zoneId === "tower_n_03");
  // const tower_n_04 = data.filter((stage) => stage.zoneId === "tower_n_04");
  // const tower_tr_01 = data.filter((stage) => stage.zoneId === "tower_tr_01");
  // const tower_tr_02 = data.filter((stage) => stage.zoneId === "tower_tr_02");
  // const tower_tr_03 = data.filter((stage) => stage.zoneId === "tower_tr_03");
  return (
    <>
      <Toolbar currentPage="关卡总览（常驻关卡）" />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-typo">
          <h4>资源收集</h4>
          <div className="mdui-panel" mdui-panel={1}>
            <div className="mdui-panel-item mdui-panel-item-open">
              <div className="mdui-panel-item-header mdui-text-color-blue-gray">
                芯片收集
              </div>

              <div className="mdui-panel-item-body">
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      <tr>
                        <th>
                          <span className="tag mdui-color-indigo">
                            重装芯片
                          </span>
                          <span className="tag mdui-color-indigo">
                            医疗芯片
                          </span>
                        </th>
                        <td>
                          {weekly_1.map((stage, key) => {
                            return (
                              <div
                                key={key}
                                className="mdui-chip"
                                onClick={() => navigate(`/stages/${stage.id}`)}
                              >
                                <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <span className="tag mdui-color-indigo">
                            狙击芯片
                          </span>
                          <span className="tag mdui-color-indigo">
                            术师芯片
                          </span>
                        </th>
                        <td>
                          {weekly_2.map((stage, key) => {
                            return (
                              <div
                                key={key}
                                className="mdui-chip"
                                onClick={() => navigate(`/stages/${stage.id}`)}
                              >
                                <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <span className="tag mdui-color-indigo">
                            先锋芯片
                          </span>
                          <span className="tag mdui-color-indigo">
                            辅助芯片
                          </span>
                        </th>
                        <td>
                          {weekly_3.map((stage, key) => {
                            return (
                              <div
                                key={key}
                                className="mdui-chip"
                                onClick={() => navigate(`/stages/${stage.id}`)}
                              >
                                <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <span className="tag mdui-color-indigo">
                            近卫芯片
                          </span>
                          <span className="tag mdui-color-indigo">
                            特种芯片
                          </span>
                        </th>
                        <td>
                          {weekly_4.map((stage, key) => {
                            return (
                              <div
                                key={key}
                                className="mdui-chip"
                                onClick={() => navigate(`/stages/${stage.id}`)}
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

            <div className="mdui-panel-item">
              <div className="mdui-panel-item-header mdui-text-color-red">
                采购凭证
              </div>
              <div className="mdui-panel-item-body">
                {weekly_5.map((stage, key) => {
                  return (
                    <div
                      key={key}
                      className="mdui-chip"
                      onClick={() => navigate(`/stages/${stage.id}`)}
                    >
                      <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mdui-panel-item">
              <div className="mdui-panel-item-header  mdui-text-color-indigo">
                技巧概要
              </div>
              <div className="mdui-panel-item-body">
                {weekly_6.map((stage, key) => {
                  return (
                    <div
                      key={key}
                      className="mdui-chip"
                      onClick={() => navigate(`/stages/${stage.id}`)}
                    >
                      <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mdui-panel-item">
              <div className="mdui-panel-item-header mdui-text-color-amber">
                作战记录
              </div>
              <div className="mdui-panel-item-body">
                {weekly_7.map((stage, key) => {
                  return (
                    <div
                      key={key}
                      className="mdui-chip"
                      onClick={() => navigate(`/stages/${stage.id}`)}
                    >
                      <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mdui-panel-item">
              <div className="mdui-panel-item-header">基建素材</div>
              <div className="mdui-panel-item-body">
                {weekly_8.map((stage, key) => {
                  return (
                    <div
                      key={key}
                      className="mdui-chip"
                      onClick={() => navigate(`/stages/${stage.id}`)}
                    >
                      <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mdui-panel-item">
              <div className="mdui-panel-item-header mdui-text-color-light-blue">
                龙门币
              </div>
              <div className="mdui-panel-item-body">
                {weekly_9.map((stage, key) => {
                  return (
                    <div
                      key={key}
                      className="mdui-chip"
                      onClick={() => navigate(`/stages/${stage.id}`)}
                    >
                      <span className="mdui-chip-title">{`${stage.code} ${stage.name}`}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h4>剿灭作战</h4>
          <div className="mdui-table-fluid">
            <table className="mdui-table">
              <tbody>
                {CAMPAIGN.sort((stage1, stage2) => {
                  return stage1.id < stage2.id ? -1 : 1;
                }).map((stage, key) => {
                  return (
                    <tr key={key}>
                      <th>{stage.code}</th>
                      <td>
                        <div
                          key={key}
                          className="mdui-chip"
                          onClick={() => navigate(`/stages/${stage.id}`)}
                        >
                          <span className="mdui-chip-title">{`${stage.name}`}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <h4>保全派驻</h4> */}
          {/* 数据已过时 */}
        </div>
      </div>
    </>
  );
}

export default StagesPermPage;
