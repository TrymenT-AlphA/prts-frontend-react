/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all items with drop information
 *
 * @summary drops items page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:50:43
 * Last modified  : 2023-03-11 14:11:33
 */

import { useState } from "react";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import { InfoIcon } from "../components/icons";
import Checkbtn from "../components/checkbtn";
import LimitedCheckbtnGroup from "../components/limited-checkbtn-group";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getProfession from "../utils/getProfession";
import getHtml from "../utils/getHtml";
import getCombine from "../utils/getCombine";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RecruitPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/characters`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <RecruitInnerPage data={data} />;
}

function RecruitInnerPage(props) {
  const recruitInfo =
    "<@rc.em>※稀有职业需求招募说明※</>\n<@rc.em>当职业需求包含高级资深干员，且招募时限为9小时时，招募必得6星干员</>\n<@rc.em>当职业需求包含资深干员同时不包含高级资深干员，且招募时限为9小时，则该次招募必得5星干员</>\n\n<@rc.subtitle>※全部可能出现的干员※</>\n<@rc.eml>绿色高亮的不可寻访干员，可以在此招募</>\n\n★\\n<@rc.eml>Lancet-2</> / <@rc.eml>Castle-3</> / <@rc.eml>THRM-EX</> / <@rc.eml>正义骑士号</>\n--------------------\n★★\\n<@rc.eml>夜刀</> / <@rc.eml>黑角</> / <@rc.eml>巡林者</> / <@rc.eml>杜林</> / <@rc.eml>12F</>\n--------------------\n★★★\\n<@rc.eml>安德切尔</> / 芬 / 香草 / 翎羽 / 玫兰莎 / 米格鲁 / 克洛丝 / 炎熔 / 芙蓉 / 安赛尔 / 史都华德 / 梓兰 / 空爆 / 月见夜 / 泡普卡 / 斑点\n--------------------\n★★★★\\n<@rc.eml>艾丝黛尔</> / <@rc.eml>清流</> / 夜烟 / 远山 / 杰西卡 / 流星 / 白雪 / 清道夫 / 红豆 / 杜宾 / 缠丸 / 霜叶 / 慕斯 / 砾 / 暗索 / 末药 / 调香师 / 角峰 / 蛇屠箱 / 古米 / 地灵 / 阿消 / 猎蜂 / 格雷伊 / 苏苏洛 / 桃金娘 / 红云 / 梅 / 安比尔 / 宴 / 刻刀\n--------------------\n★★★★★\\n<@rc.eml>因陀罗</> / <@rc.eml>火神</> / 白面鸮 / 凛冬 / 德克萨斯 / 幽灵鲨 / 蓝毒 / 白金 / 陨星 / 梅尔 / 赫默 / 华法琳 / 临光 / 红 / 雷蛇 / 可颂 / 普罗旺斯 / 守林人 / 崖心 / 初雪 / 真理 / 狮蝎 / 食铁兽 / 夜魔 / 诗怀雅 / 格劳克斯 / 星极 / 送葬人 / 槐琥 / 灰喉 / 苇草 / 布洛卡 / 吽 / 惊蛰 / 慑砂 / 巫恋 / 极境 / 石棉 / 月禾\n--------------------\n★★★★★★\\n能天使 / 推进之王 / 伊芙利特 / 闪灵 / 夜莺 / 星熊 / 塞雷娅 / 银灰 / 斯卡蒂 / 陈 / 黑 / 赫拉格 / 麦哲伦 / 莫斯提马 / 煌 / 阿 / 刻俄柏 / 风笛 / 傀影 / 温蒂".replaceAll(
      "\\n",
      "\n"
    );
  const data = props.data
    .filter((char) => {
      const re1 = new RegExp(`[\\s](<@rc.eml>)?${char.name}(</>)?[\\s]`);
      const re2 = new RegExp(`/[\\s](<@rc.eml>)?${char.name}(</>)?$`);
      return re1.test(recruitInfo) || re2.test(recruitInfo);
    })
    .map((char) => {
      return {
        id: char.id,
        name: char.name,
        level: char.rarity + 1,
        tags: JSON.parse(char.tagList)
          .concat([
            char.sex === "男"
              ? "男性干员"
              : char.sex === "女"
              ? "女性干员"
              : null,
          ])
          .concat([getProfession(char.profession)])
          .concat([
            char.position === "RANGE"
              ? "远程位"
              : char.position === "ALL" || char.position === "MELEE"
              ? "近战位"
              : null,
          ])
          .concat([
            char.rarity === 5
              ? "高级资深干员"
              : char.rarity === 4
              ? "资深干员"
              : char.rarity === 1
              ? "新手"
              : char.rarity === 0
              ? "支援机械"
              : null,
          ]),
      };
    });
  // const navigate = useNavigate();
  const [tagCount, setTagCount] = useState(0);
  const [timeFilter, setTimeFilter] = useState({
    "1:00~3:50": false,
    "4:00~7:30": false,
    "7:40~9:00": true,
  });
  const timeFilterTooltipContent = {
    "1:00~3:50": [1, 2, 3, 4]
      .map((star) => `<span class="tag mdui-color-blue">${star}⭐</span>`)
      .reduce((total, sub) => `${total}${sub}`),
    "4:00~7:30": [2, 3, 4, 5]
      .map((star) => `<span class="tag mdui-color-blue">${star}⭐</span>`)
      .reduce((total, sub) => `${total}${sub}`),
    "7:40~9:00": [3, 4, 5]
      .map((star) => `<span class="tag mdui-color-blue">${star}⭐</span>`)
      .reduce((total, sub) => `${total}${sub}`),
  };
  const [levelFilter, setLevelFilter] = useState({
    高级资深干员: false,
    资深干员: false,
    新手: false,
    支援机械: false,
  });
  const [professionFilter, setProfessionFilter] = useState({
    近卫干员: false,
    狙击干员: false,
    重装干员: false,
    医疗干员: false,
    辅助干员: false,
    术师干员: false,
    特种干员: false,
    先锋干员: false,
  });
  const [sexFilter, setSexFilter] = useState({
    男性干员: false,
    女性干员: false,
  });
  const [positionFilter, setPositionFilter] = useState({
    近战位: false,
    远程位: false,
  });
  const [tagFilter, setTagFilter] = useState({
    控场: false,
    爆发: false,
    治疗: false,
    支援: false,
    费用回复: false,
    输出: false,
    生存: false,
    群攻: false,
    防护: false,
    减速: false,
    削弱: false,
    快速复活: false,
    位移: false,
    召唤: false,
  });
  const getStarFilter = {
    "1⭐": () => timeFilter["1:00~3:50"],
    "2⭐": () => timeFilter["1:00~3:50"] || timeFilter["4:00~7:30"],
    "3⭐": () =>
      timeFilter["1:00~3:50"] ||
      timeFilter["4:00~7:30"] ||
      timeFilter["7:40~9:00"],
    "4⭐": () =>
      timeFilter["1:00~3:50"] ||
      timeFilter["4:00~7:30"] ||
      timeFilter["7:40~9:00"],
    "5⭐": () =>
      levelFilter["高级资深干员"] ||
      levelFilter["资深干员"] ||
      timeFilter["4:00~7:30"] ||
      timeFilter["7:40~9:00"],
    "6⭐": () => levelFilter["高级资深干员"],
  };
  const [strategies, setStrategies] = useState([]);

  return (
    <>
      <Toolbar currentPage="公开招募计算器" />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        {/* recruit info */}
        <div className="mdui-row">
          <div className="mdui-col-lg-12">
            <div className="mdui-panel" mdui-panel={1}>
              <div className="mdui-panel-item">
                <div className="mdui-panel-item-header">
                  <span>公开招募说明</span>
                  <InfoIcon
                    className="mdui-m-x-1"
                    mdui-tooltip="{content: '公开招募计算以下方说明为准，不保证计算规则处于最新状态', position: 'right'}"
                  />
                </div>
                <div className="mdui-panel-item-body">
                  {getHtml(recruitInfo.replaceAll("\n", "<br>"))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* time filter and star aviliablity */}
        <div className="mdui-row mdui-m-t-4">
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <label className="mdui-textfield-label">招募时间</label>
            {Object.keys(timeFilter).map((key) => {
              return (
                <label
                  key={key}
                  className={[
                    "mdui-btn mdui-btn-dense mdui-ripple mdui-color-red-800",
                    timeFilter[key] ? "" : "opacity-3",
                  ].join(" ")}
                  style={{ minWidth: 0, margin: 1 }}
                >
                  <input
                    type="checkbox"
                    style={{ display: "none" }}
                    checked={timeFilter[key] ? 1 : 0}
                    mdui-tooltip={`{content: '${timeFilterTooltipContent[key]}', position: 'top'}`}
                    onChange={() => {
                      setTimeFilter({
                        ...{
                          "1:00~3:50": false,
                          "4:00~7:30": false,
                          "7:40~9:00": false,
                        },
                        [key]: true,
                      });
                    }}
                  />
                  {key}
                </label>
              );
            })}
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <label className="mdui-textfield-label">可获得的干员</label>
            {Object.keys(getStarFilter).map((key) => {
              return (
                <label
                  key={key}
                  className={[
                    "mdui-btn mdui-btn-dense",
                    key === "6⭐"
                      ? "mdui-color-deep-orange"
                      : key === "5⭐"
                      ? "mdui-color-yellow"
                      : "mdui-color-blue",
                    getStarFilter[key]() ? "" : "opacity-3",
                  ].join(" ")}
                  style={{ minWidth: 0, margin: 1 }}
                >
                  {key}
                </label>
              );
            })}
          </div>
        </div>

        {/*  */}
        <div className="mdui-row">
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <LimitedCheckbtnGroup
              title={`资质`}
              titleClass={`mdui-text-color-red-800`}
              groupState={levelFilter}
              setGroupState={setLevelFilter}
              count={tagCount}
              maxCount={5}
              setCount={setTagCount}
              dialogContent={`至多只能选择5个标签`}
            >
              {Object.keys(levelFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </LimitedCheckbtnGroup>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <LimitedCheckbtnGroup
              title={`职业`}
              titleClass={`mdui-text-color-red-800`}
              groupState={professionFilter}
              setGroupState={setProfessionFilter}
              count={tagCount}
              maxCount={5}
              setCount={setTagCount}
              dialogContent={`至多只能选择5个标签`}
            >
              {Object.keys(professionFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </LimitedCheckbtnGroup>
          </div>
        </div>

        {/*  */}
        <div className="mdui-row">
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <LimitedCheckbtnGroup
              title={`性别`}
              titleClass={`mdui-text-color-red-800`}
              groupState={sexFilter}
              setGroupState={setSexFilter}
              count={tagCount}
              maxCount={5}
              setCount={setTagCount}
              dialogContent={`至多只能选择5个标签`}
            >
              {Object.keys(sexFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </LimitedCheckbtnGroup>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-6">
            <LimitedCheckbtnGroup
              title={`位置`}
              titleClass={`mdui-text-color-red-800`}
              groupState={positionFilter}
              setGroupState={setPositionFilter}
              count={tagCount}
              maxCount={5}
              setCount={setTagCount}
              dialogContent={`至多只能选择5个标签`}
            >
              {Object.keys(positionFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </LimitedCheckbtnGroup>
          </div>
        </div>

        <div className="mdui-row">
          <div className="mdui-col-lg-12">
            <LimitedCheckbtnGroup
              title={`能力`}
              titleClass={`mdui-text-color-red-800`}
              groupState={tagFilter}
              setGroupState={setTagFilter}
              count={tagCount}
              maxCount={5}
              setCount={setTagCount}
              dialogContent={`至多只能选择5个标签`}
            >
              {Object.keys(tagFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </LimitedCheckbtnGroup>
          </div>
        </div>

        {/* recruit tip */}
        <div className="mdui-chip-group mdui-m-t-4">
          {levelFilter["高级资深干员"] ? (
            <div className="mdui-chip">
              <span className="mdui-chip-icon mdui-color-red">
                <i className="mdui-icon material-icons">priority_high</i>
              </span>
              <span className="mdui-chip-title mdui-text-truncate">
                <span className="tag mdui-color-blue">高级资深干员</span>
                将招募时间设置为 9 小时
              </span>
            </div>
          ) : null}
          {levelFilter["资深干员"] ? (
            <div className="mdui-chip">
              <span className="mdui-chip-icon mdui-color-red">
                <i className="mdui-icon material-icons">priority_high</i>
              </span>
              <span className="mdui-chip-title mdui-text-truncate">
                <span className="tag mdui-color-blue">资深干员</span>
                将招募时间设置为 9 小时
              </span>
            </div>
          ) : null}
          {levelFilter["支援机械"] ? (
            <div className="mdui-chip">
              <span className="mdui-chip-icon mdui-color-red">
                <i className="mdui-icon material-icons">priority_high</i>
              </span>
              <span className="mdui-chip-title mdui-text-truncate">
                <span className="tag mdui-color-blue">支援机械</span>
                招募时间不要超过 3:50
              </span>
            </div>
          ) : null}
        </div>

        <div className="mdui-m-t-4">
          <button
            className="mdui-btn mdui-btn-block mdui-ripple mdui-color-indigo"
            onClick={() => {
              const selected = [
                levelFilter,
                professionFilter,
                sexFilter,
                positionFilter,
                tagFilter,
              ]
                .map((filter) => {
                  return Object.keys(filter).filter((key) => filter[key]);
                })
                .reduce((totoal, subset) => totoal.concat(subset));
              const filteredChars = data.filter((char) => {
                if (char.level === 1 && getStarFilter["1⭐"]()) {
                  return true;
                }
                if (char.level === 2 && getStarFilter["2⭐"]()) {
                  return true;
                }
                if (char.level === 3 && getStarFilter["3⭐"]()) {
                  return true;
                }
                if (char.level === 4 && getStarFilter["4⭐"]()) {
                  return true;
                }
                if (char.level === 5 && getStarFilter["5⭐"]()) {
                  return true;
                }
                if (char.level === 6 && getStarFilter["6⭐"]()) {
                  return true;
                }
                return false;
              });
              setStrategies(
                getCombine(selected, Math.min(tagCount, 3))
                  .map((combine) => {
                    if (combine.length === 0) {
                      return null;
                    }
                    const chars = filteredChars
                      .filter((char) =>
                        combine.every((tag) => char.tags.includes(tag))
                      )
                      .sort((char1, char2) =>
                        char1.level < char2.level ? -1 : 1
                      );
                    if (chars.length === 0) {
                      return null;
                    }
                    const minLevel = Math.min(
                      ...chars.map((char) => char.level)
                    );
                    return {
                      combine: combine,
                      minLevel: minLevel,
                      chars: chars,
                    };
                  })
                  .filter((strategy) => strategy !== null)
                  .sort((strategy1, strategy2) => {
                    if (strategy1.minLevel === strategy2.minLevel) {
                      return strategy1.chars.length < strategy2.chars.length
                        ? -1
                        : 1;
                    } else {
                      return strategy1.minLevel > strategy2.minLevel ? -1 : 1;
                    }
                  })
              );
            }}
          >
            开始计算
          </button>
        </div>

        <div className="mdui-m-t-4">
          <div className="mdui-table-fluid">
            <table className="mdui-table">
              <thead>
                <tr>
                  <th>词条</th>
                  <th>保底</th>
                  <th>可能出现的干员</th>
                </tr>
              </thead>
              <tbody>
                {strategies.map((strategy, key) => {
                  return (
                    <tr key={key}>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {strategy.combine.map((tag, key) => (
                          <span key={key} className="tag mdui-color-red-800">
                            {tag}
                          </span>
                        ))}
                      </td>
                      <td>
                        {strategy.minLevel === 6 ? (
                          <span
                            key={key}
                            className="tag mdui-color-deep-orange"
                          >
                            {strategy.minLevel}⭐
                          </span>
                        ) : strategy.minLevel === 1 ? (
                          <span key={key} className="tag mdui-color-lime">
                            {strategy.minLevel}⭐
                          </span>
                        ) : strategy.minLevel === 5 ? (
                          <span key={key} className="tag mdui-color-yellow">
                            {strategy.minLevel}⭐
                          </span>
                        ) : (
                          <span key={key} className="tag mdui-color-blue">
                            {strategy.minLevel}⭐
                          </span>
                        )}
                      </td>
                      <td className="mdui-typo">
                        {strategy.chars.map((char, key) => {
                          return (
                              <LazyLoadImage
                                key={key}
                                className="mdui-img-circle"
                                src={`/asset/avatar/${char.id}.png`}
                                alt={char.id}
                                style={{ width: "40px", height: "40px" }}
                                mdui-tooltip={`{content: '${char.name}', position: 'top'}`}
                                // onClick={() => navigate(`/characters/${char.id}`)}
                              />
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
    </>
  );
}

export default RecruitPage;
