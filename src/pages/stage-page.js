/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * detail information of a specific stage
 *
 * @summary stage page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:48:43
 * Last modified  : 2022-12-29 02:11:44
 */

import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import ItemCost from "../components/item-cost";
import Item from "../components/item";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getHtml from "../utils/getHtml";

function StagePage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(`${getServer()}/stages/${id}`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <StageInnerPage data={data} />;
}

function StageInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();

  return (
    <>
      <Toolbar currentPage={data.name} />
      <div className="mdui-container">
        <div className="mdui-card mdui-m-t-4">
          <div className="mdui-card-primary">
            <div className="mdui-card-primary-title">{data.name}</div>
            <div className="mdui-card-primary-subtitle">{data.code}</div>
            <div className="mdui-typo">
              <div className="mdui-m-t-4">
                <img
                  src={`/asset/map/${data.id}.png`}
                  alt={data.id}
                  className="mdui-shadow-2"
                  style={{
                    border: "6px solid white",
                  }}
                />
              </div>

              <h4>掉落数据分析</h4>
              {data.drops.length === 0 ? (
                <button
                  className="mdui-btn mdui-btn-block mdui-ripple mdui-color-indigo"
                  disabled
                  onClick={() => navigate(`/drops/stages/${data.id}`)}
                  style={{
                    border: "solid 1px",
                  }}
                >
                  该关卡暂无掉落数据
                </button>
              ) : (
                <button
                  className="mdui-btn mdui-btn-block mdui-ripple mdui-color-indigo"
                  onClick={() => navigate(`/drops/stages/${data.id}`)}
                >
                  前往掉落数据分析
                </button>
              )}

              <div className="mdui-panel mdui-m-t-4" mdui-panel={1}>
                <div className="mdui-panel-item mdui-shadow-1 mdui-ripple">
                  <div className="mdui-panel-item-header">掉落物品</div>
                  <div className="mdui-panel-item-body">
                    {data.drops.map((drop, key) => {
                      return (
                        <Item
                          key={key}
                          id={drop.itemId}
                          mdui-tooltip={`{content: '${drop.item.name}', position: 'top'}`}
                          style={{
                            width: "80px",
                            height: "80px",
                          }}
                          onClick={() => navigate(`/items/${drop.item.id}`)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mdui-table-fluid mdui-shadow-0 mdui-m-t-4">
                <table className="mdui-table">
                  <thead>
                    <tr>
                      <th>推荐等级</th>
                      <th colSpan={5}>描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {data.dangerLevel === "-" ? (
                          <span className="tag mdui-color-red">
                            暂无推荐等级
                          </span>
                        ) : (
                          <span className="tag mdui-color-indigo">
                            {data.dangerLevel}
                          </span>
                        )}
                      </td>
                      <td colSpan={5}>
                        {getHtml(data.description.replaceAll("\\n", "<br>"))}
                      </td>
                    </tr>
                    <tr>
                      <th>理智消耗</th>
                      <th>演习券消耗</th>
                      <th>防御点</th>
                      <th>部署位</th>
                      <th>初始费用</th>
                      <th>最大费用</th>
                    </tr>
                    <tr>
                      <td>
                        <ItemCost
                          id={"AP_GAMEPLAY"}
                          count={data.apCost}
                          style={{ width: "40px", height: "40px" }}
                        />
                      </td>
                      <td>
                        {data.canPractice ? (
                          <ItemCost
                            id={"6001"}
                            count={data.practiceTicketCost}
                            style={{ width: "40px", height: "40px" }}
                          />
                        ) : (
                          <span className="tag mdui-color-red">无法演习</span>
                        )}
                      </td>
                      <td>
                        <span className="tag mdui-color-lime">
                          {data.maxLifePoint}
                        </span>
                      </td>
                      <td>{data.characterLimit}</td>
                      <td>{data.initialCost}</td>
                      <td>{data.maxCost}</td>
                    </tr>
                    {data.hard ? (
                      <>
                        <tr>
                          <th colSpan={6} className="mdui-text-center">
                            <span className="tag mdui-color-red">突袭模式</span>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <ItemCost
                              id={"AP_GAMEPLAY"}
                              count={data.hard.apCost}
                              style={{ width: "40px", height: "40px" }}
                            />
                          </td>
                          <td>
                            {data.hard.canPractice ? (
                              <ItemCost
                                id={"6001"}
                                count={data.hard.practiceTicketCost}
                                style={{ width: "40px", height: "40px" }}
                              />
                            ) : (
                              <span className="tag mdui-color-red">
                                无法演习
                              </span>
                            )}
                          </td>
                          <td>
                            <span className="tag mdui-color-lime">
                              {data.hard.maxLifePoint}
                            </span>
                          </td>
                          <td>{data.hard.characterLimit}</td>
                          <td>{data.hard.initialCost}</td>
                          <td>{data.hard.maxCost}</td>
                        </tr>
                      </>
                    ) : null}
                  </tbody>
                </table>
              </div>
              <h4>敌方情报</h4>
              <div className="mdui-table-fluid mdui-shadow-0 mdui-m-t-4">
                <table className="mdui-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>等级</th>
                      <th>级别</th>
                      <th>最大生命</th>
                      <th>攻击力</th>
                      <th>防御力</th>
                      <th>法术抗性</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.enemyInstances.map((inst, key) => {
                      const enemyInst = inst.enemyInstance;
                      const enemy = enemyInst.enemy;
                      return (
                        <tr key={key}>
                          <td>
                            <div className="mdui-valign mdui-ripple">
                              <img
                                className="mdui-list-item-avatar mdui-m-a-0"
                                src={`/asset/enemy/${enemy.id}.png`}
                                alt={enemy.name}
                                style={{ width: "40px", height: "40px" }}
                                onClick={() => navigate(`/enemies/${enemy.id}`)}
                              />
                              <span className="mdui-m-l-1">{enemy.name}</span>
                            </div>
                          </td>
                          <td>{enemyInst.level}</td>
                          <td>
                            {enemy.level === "NORMAL" ? (
                              <span className="tag mdui-color-grey">普通</span>
                            ) : enemy.level === "ELITE" ? (
                              <span className="tag mdui-color-indigo">
                                精英
                              </span>
                            ) : enemy.level === "BOSS" ? (
                              <span className="tag mdui-color-red">领袖</span>
                            ) : null}
                          </td>
                          <td>{enemyInst.maxHp}</td>
                          <td>{enemyInst.atk}</td>
                          <td>{enemyInst.def}</td>
                          <td>{enemyInst.magicResistance}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StagePage;
