/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * detail information of a specific character
 *
 * @summary character page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:44:41
 * Last modified  : 2022-12-28 14:04:41
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

function CharacterPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(`${getServer()}/characters/${id}`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <CharacterPageInner data={data} />;
}

function CharacterPageInner(props) {
  const data = props.data;
  const potentialList = JSON.parse(data.potentialList);

  return (
    <>
      <Toolbar currentPage={data.name} />
      <div className="mdui-container">
        <div className="mdui-card mdui-m-t-4">
          {/* card header */}
          <div className="mdui-card-header">
            <img
              src={`/asset/avatar/${data.id}.png`}
              alt={data.name}
              className="mdui-card-header-avatar"
            />
            <div className="mdui-card-header-title">{data.name}</div>
            <div className="mdui-card-header-subtitle">
              {getSubProfession(data.subProfessionId)}
            </div>
          </div>

          {/* card body */}
          <div className="mdui-card-primary" style={{ marginTop: "-24px" }}>
            <div className="mdui-typo">
              <hr />
            </div>
            {/* tabs */}
            <div className="mdui-tab" mdui-tab={1}>
              <a href="#char-tab1" className="mdui-tab-active mdui-ripple">
                基本信息
              </a>
              <a href="#char-tab2" className="mdui-ripple">
                天赋 & 潜能
              </a>
              <a href="#char-tab3" className="mdui-ripple">
                基建技能 & 技能
              </a>
              <a href="#char-tab4" className="mdui-ripple">
                培养素材
              </a>
            </div>

            {/* tab 1 基本信息 */}
            <div id="char-tab1" className="mdui-p-a-2">
              <div className="mdui-typo">
                <h4>描述</h4>
                <p>{data.itemDesc}</p>
                <h4>分支</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      <tr>
                        <th>
                          <span className="tag mdui-color-red-600">
                            {getProfession(data.profession)}
                          </span>
                          <span className="tag mdui-color-purple-600">
                            {getSubProfession(data.subProfessionId)}
                          </span>
                        </th>
                        <th>
                          {getHtml(data.description.replaceAll("\\n", "<br>"))}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h4>基本属性</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>生命上限</th>
                        <th>攻击</th>
                        <th>防御</th>
                        <th>法术抗性</th>
                        <th>再部署</th>
                        <th>部署费用</th>
                        <th>阻挡数</th>
                        <th>攻击间隔</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.characterInstances.map((inst, key) => {
                        if (inst.phase !== 0 && inst.level === 1) {
                          return null;
                        }

                        return (
                          <tr key={key}>
                            <th>
                              <span className="tag mdui-color-indigo">
                                {`精英${inst.phase + 1}`}
                              </span>
                              <span className="tag mdui-color-cyan">
                                {`等级${inst.level}`}
                              </span>
                            </th>
                            <td>{inst.maxHp}</td>
                            <td>{inst.atk}</td>
                            <td>{inst.def}</td>
                            <td>{inst.magicResistance}</td>
                            <td>{inst.respawnTime}</td>
                            <td>{inst.cost}</td>
                            <td>{inst.blockCnt}</td>
                            <td>{inst.baseAttackTime}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <h4>攻击范围</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <thead>
                      <tr>
                        {data.characterInstances.map((inst, key) => {
                          if (inst.phase !== 0 && inst.level === 1) {
                            return null;
                          }

                          return (
                            <th key={key} className="mdui-text-center">
                              <span className="tag mdui-color-indigo">
                                {`精英${inst.phase + 1}`}
                              </span>
                              <span className="tag mdui-color-cyan">
                                {`等级${inst.level}`}
                              </span>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {data.characterInstances.map((inst, key) => {
                          if (inst.phase !== 0 && inst.level === 1) {
                            return null;
                          }

                          return (
                            <td key={key} className="mdui-text-center">
                              {getSVG(inst.rangeId)}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* tab2 天赋 & 潜能 */}
            <div id="char-tab2" className="mdui-p-a-2">
              <div className="mdui-typo">
                <h4>天赋提升</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {data.talents.map((talent, key) => {
                        return (
                          <tr key={key}>
                            <th>
                              <span className="tag mdui-color-teal">
                                {`天赋${talent.prefabKey}`}
                              </span>
                              <span className="tag mdui-color-lime">
                                {`潜能${talent.potentialRank}`}
                              </span>
                              <span className="tag mdui-color-indigo">
                                {`精英${talent.phase}`}
                              </span>
                              <span className="tag mdui-color-cyan">
                                {`等级${talent.level}`}
                              </span>
                            </th>
                            <td>
                              <span className="tag mdui-color-deep-orange">
                                {talent.name}
                              </span>
                            </td>
                            <td>
                              {getHtml(
                                talent.description.replaceAll("\\n", "<br>")
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <h4>潜能提升</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {potentialList.map((potential, key) => {
                        return (
                          <tr key={key}>
                            <th>
                              <span className="tag mdui-color-lime">
                                {`潜能${key + 1}`}
                              </span>
                            </th>
                            <td>{potential.description}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* tab3 基建技能 & 技能 */}
            <div id="char-tab3" className="mdui-p-a-2">
              <div className="mdui-typo">
                <h4>基建技能</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {data.buildingSkills.map((c_bs, key) => {
                        const buildingSkill = c_bs.buildingSkill;

                        return (
                          <tr key={key}>
                            <th>
                              <div className="mdui-valign">
                                <img
                                  src={`/asset/building_skill/${buildingSkill.name}.png`}
                                  alt={buildingSkill.icon}
                                  className="mdui-list-item-avatar mdui-m-a-0"
                                />
                              </div>
                            </th>
                            <td>
                              <span className="tag mdui-color-deep-orange">
                                {buildingSkill.icon}
                              </span>
                            </td>
                            <td>
                              {getHtml(
                                buildingSkill.description.replaceAll(
                                  "\\n",
                                  "<br>"
                                )
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <h4>技能</h4>
                {data.skills
                  .sort((c_s1, c_s2) => {
                    var lastChar1 = c_s1.skill.id.charAt(
                      c_s1.skill.id.length - 1
                    );
                    var lastChar2 = c_s2.skill.id.charAt(
                      c_s2.skill.id.length - 1
                    );
                    if (lastChar1 === "1") {
                      return -1;
                    } else if (lastChar2 === "1") {
                      return 1;
                    } else if (lastChar1 === "2" && lastChar2 === "3") {
                      return -1;
                    } else if (lastChar1 === "3" && lastChar2 === "2") {
                      return 1;
                    } else if (lastChar1 !== "2" && lastChar1 !== "3") {
                      return -1;
                    } else if (lastChar2 !== "2" && lastChar2 !== "3") {
                      return 1;
                    } else {
                      return c_s1.skill.id < c_s2.skill.id ? -1 : 1;
                    }
                  })
                  .map((c_s, key) => {
                    const skill = c_s.skill;
                    return (
                      <div
                        key={key}
                        className={[
                          "mdui-table-fluid mdui-shadow-0",
                          key ? "mdui-m-t-4" : "",
                        ].join(" ")}
                      >
                        <table className="mdui-table">
                          <thead>
                            <tr>
                              <td rowSpan={2}>
                                <div className="mdui-valign">
                                  <img
                                    src={`/asset/skill/skill_icon_${skill.iconId}.png`}
                                    alt={skill.iconId}
                                    className="mdui-list-item-avatar mdui-m-a-0"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="tag mdui-color-deep-orange">
                                  {skill.skillInstances[0].name}
                                </span>
                              </td>
                              <td rowSpan={2}>
                                {skill.skillInstances[0].rangeId ===
                                "" ? null : (
                                  <div>
                                    {getSVG(skill.skillInstances[0].rangeId)}
                                  </div>
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {skill.skillInstances[0].spType === 1 ? (
                                  <span className="tag mdui-color-lime">
                                    自然回复
                                  </span>
                                ) : skill.skillInstances[0].spType === 2 ? (
                                  <span className="tag mdui-color-red">
                                    攻击回复
                                  </span>
                                ) : skill.skillInstances[0].spType === 4 ? (
                                  <span className="tag mdui-color-yellow">
                                    受击回复
                                  </span>
                                ) : skill.skillInstances[0].spType ===
                                  8 ? null : null}
                                <span className="tag mdui-color-grey">
                                  {skill.skillInstances[0].type === 0
                                    ? "被动"
                                    : skill.skillInstances[0].type === 1
                                    ? "手动触发"
                                    : skill.skillInstances[0].type === 2
                                    ? "自动触发"
                                    : null}
                                </span>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {skill.skillInstances.map((inst, key) => {
                              return (
                                <tr key={key}>
                                  <td>
                                    {key + 1 <= 7 ? (
                                      <span className="tag mdui-color-indigo">
                                        {`等级${inst.level + 1}`}
                                      </span>
                                    ) : (
                                      <span className="tag mdui-color-red">
                                        {`专精${"I".repeat(key + 1 - 7)}`}
                                      </span>
                                    )}
                                  </td>
                                  <td>
                                    {getHtml(
                                      inst.description.replaceAll("\\n", "<br>")
                                    )}
                                  </td>
                                  <td>
                                    <span className="tag mdui-color-grey-600">{`▶  初始：${inst.initSp}`}</span>
                                    <br />
                                    <span className="tag mdui-color-lime">{`⚡ 消耗：${inst.spCost}`}</span>
                                    <br />
                                    <span className="tag mdui-color-grey-500">{`⏲ 持续：${inst.duration}`}</span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* 培养素材 */}
            <div id="char-tab4" className="mdui-p-a-2">
              <div className="mdui-typo">
                <h4>进阶素材</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {data.characterInstances.map((inst, key) => {
                        if (inst.level !== 1) {
                          return null;
                        }
                        if (inst.evolveCost === "") {
                          return null;
                        }

                        const evolveCost = JSON.parse(inst.evolveCost);
                        return (
                          <tr key={key}>
                            <td>
                              <span className="tag mdui-color-indigo">
                                {`精英化${inst.phase}`}
                              </span>
                            </td>
                            {evolveCost.map((each, key) => {
                              return (
                                <td key={key}>
                                  <ItemCost
                                    id={each.id}
                                    count={each.count}
                                    style={{ width: "40px", height: "40px" }}
                                  />
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <h4>技能升级素材</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {JSON.parse(data.allSkillLvlupList).map(
                        (costCond, key) => {
                          return (
                            <tr key={key}>
                              <th>
                                <span className="tag mdui-color-indigo">
                                  {`等级${key + 1} » 等级${key + 2}`}
                                </span>
                              </th>
                              {costCond.lvlUpCost.map((each, key) => {
                                return (
                                  <td key={key}>
                                    <ItemCost
                                      id={each.id}
                                      count={each.count}
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                      }}
                                    />
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
                <h4>技能专精素材</h4>
                <div className="mdui-table-fluid mdui-shadow-0">
                  <table className="mdui-table">
                    <tbody>
                      {data.skills
                        .sort((c_s1, c_s2) => {
                          var lastChar1 = c_s1.skill.id.charAt(
                            c_s1.skill.id.length - 1
                          );
                          var lastChar2 = c_s2.skill.id.charAt(
                            c_s2.skill.id.length - 1
                          );
                          if (lastChar1 === "1") {
                            return -1;
                          } else if (lastChar2 === "1") {
                            return 1;
                          } else if (lastChar1 === "2" && lastChar2 === "3") {
                            return -1;
                          } else if (lastChar1 === "3" && lastChar2 === "2") {
                            return 1;
                          } else if (lastChar1 !== "2" && lastChar1 !== "3") {
                            return -1;
                          } else if (lastChar2 !== "2" && lastChar2 !== "3") {
                            return 1;
                          } else {
                            return c_s1.skill.id < c_s2.skill.id ? -1 : 1;
                          }
                        })
                        .map((c_s, skillIndex) => {
                          const lvlupCostCond = JSON.parse(c_s.lvlupCostCond);

                          return lvlupCostCond.map((costCond, lvlupIndex) => {
                            return (
                              <tr key={`${skillIndex} ${lvlupIndex}`}>
                                {lvlupIndex === 0 ? (
                                  <th rowSpan={3}>
                                    <span className="tag mdui-color-deep-orange">
                                      {`技能${skillIndex + 1}`}
                                    </span>
                                  </th>
                                ) : null}
                                <th>
                                  <span className="tag mdui-color-red">
                                    {`专精${"I".repeat(lvlupIndex + 1)}`}
                                  </span>
                                </th>
                                {costCond.levelUpCost.map((each, key) => {
                                  return (
                                    <td key={key}>
                                      <ItemCost
                                        id={each.id}
                                        count={each.count}
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                        }}
                                      />
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          });
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterPage;
