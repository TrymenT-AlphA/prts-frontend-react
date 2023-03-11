/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * detail information of a specific enemy
 *
 * @summary enemy page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:46:05
 * Last modified  : 2023-03-11 14:11:31
 */

import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getHtml from "../utils/getHtml";
import { LazyLoadImage } from "react-lazy-load-image-component";

function EnemyPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(`${getServer()}/enemies/${id}`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <EnemyInnerPage data={data} />;
}

function EnemyInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();

  return (
    <>
      <Toolbar currentPage={data.name} />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-card">
          {/* card header */}
          <div className="mdui-card-header">
              <LazyLoadImage
                src={`/asset/enemy/${data.id}.png`}
                alt={data.name}
                className="mdui-card-header-avatar"
              />
            <div className="mdui-card-header-title">{data.name}</div>
            <div className="mdui-card-header-subtitle">
              {data.level === "NORMAL"
                ? "普通"
                : data.level === "ELITE"
                ? "精英"
                : data.level === "BOSS"
                ? "领袖"
                : null}
              {` ${data.race}`}
            </div>
          </div>

          {/* card body */}
          <div className="mdui-card-primary" style={{ marginTop: "-24px" }}>
            <div className="mdui-typo">
              <hr />
              <h4>描述</h4>
              <p>{data.description}</p>
              <h4>特殊能力</h4>
              <p>
                {data.ability
                  ? getHtml(data.ability.replaceAll("\\n", "<br>"))
                  : "无特殊能力"}
              </p>
              <h4>基本属性</h4>
              <div className="mdui-table-fluid mdui-shadow-0">
                <table className="mdui-table">
                  <thead>
                    <tr>
                      <th>级别</th>
                      <th>种族</th>
                      <th>攻击方式</th>
                      <th>耐久</th>
                      <th>攻击</th>
                      <th>防御</th>
                      <th>法术抗性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {data.level === "NORMAL" ? (
                          <span className="tag mdui-color-grey">普通</span>
                        ) : data.level === "ELITE" ? (
                          <span className="tag mdui-color-indigo">精英</span>
                        ) : data.level === "BOSS" ? (
                          <span className="tag mdui-color-red">领袖</span>
                        ) : null}
                      </td>
                      <td>
                        <span className="tag mdui-color-lime">
                          {data.race ? data.race : "无种族"}
                        </span>
                      </td>
                      <td>
                        <span className="tag mdui-color-red">
                          {data.attackType}
                        </span>
                      </td>
                      <td>
                        <span className="tag mdui-color-orange">
                          {data.endure}
                        </span>
                      </td>
                      <td>
                        <span className="tag mdui-color-orange">
                          {data.attack}
                        </span>
                      </td>
                      <td>
                        <span className="tag mdui-color-orange">
                          {data.defence}
                        </span>
                      </td>
                      <td>
                        <span className="tag mdui-color-orange">
                          {data.resistance}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>数值</h4>
              {data.enemyInstances.map((inst, key) => {
                return (
                  <div key={key}>
                    <h5>Level {inst.level}</h5>
                    <div className="mdui-table-fluid mdui-shadow-0">
                      <table className="mdui-table">
                        <thead>
                          <tr>
                            <th>最大生命值</th>
                            <th>攻击力</th>
                            <th>防御力</th>
                            <th>法术抗性</th>
                            <th>移动速度</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{inst.maxHp}</td>
                            <td>{inst.atk}</td>
                            <td>{inst.def}</td>
                            <td>{inst.magicResistance}</td>
                            <td>{inst.moveSpeed}</td>
                          </tr>
                          <tr>
                            <th>基础攻击间隔</th>
                            <th>攻击速度</th>
                            <th>生命恢复速度</th>
                            <th>重量等级</th>
                            <th>防御点消耗</th>
                          </tr>
                          <tr>
                            <td>{inst.baseAttackTime}</td>
                            <td>{inst.attackSpeed}</td>
                            <td>{inst.hpRecoveryPerSec}</td>
                            <td>{inst.massLevel}</td>
                            <td>{inst.lifePointReduce}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5>抗性列表</h5>
                    <div className="mdui-table-fluid mdui-shadow-0">
                      <table className="mdui-table">
                        <thead>
                          <tr>
                            <td>沉默抗性</td>
                            <td>眩晕抗性</td>
                            <td>睡眠抗性</td>
                            <td>冻结抗性</td>
                            <td>浮空抗性</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {inst.silenceImmune ? (
                                <span className="tag mdui-color-red">有</span>
                              ) : (
                                <span className="tag mdui-color-lime">无</span>
                              )}
                            </td>
                            <td>
                              {inst.stunImmune ? (
                                <span className="tag mdui-color-red">有</span>
                              ) : (
                                <span className="tag mdui-color-lime">无</span>
                              )}
                            </td>
                            <td>
                              {inst.sleepImmune ? (
                                <span className="tag mdui-color-red">有</span>
                              ) : (
                                <span className="tag mdui-color-lime">无</span>
                              )}
                            </td>
                            <td>
                              {inst.frozenImmune ? (
                                <span className="tag mdui-color-red">有</span>
                              ) : (
                                <span className="tag mdui-color-lime">无</span>
                              )}
                            </td>
                            <td>
                              {inst.levitateImmune ? (
                                <span className="tag mdui-color-red">有</span>
                              ) : (
                                <span className="tag mdui-color-lime">无</span>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mdui-panel" mdui-panel={1}>
                      <div className="mdui-panel-item mdui-shadow-1 mdui-ripple">
                        <div className="mdui-panel-item-header">出场关卡</div>
                        <div className="mdui-panel-item-body">
                          {inst.stages.map((e_s, key) => {
                            const stage = e_s.stage;
                            if (!stage.name || !stage.code) {
                              return null;
                            }

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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnemyPage;
