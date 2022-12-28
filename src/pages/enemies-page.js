/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all enemies page
 *
 * @summary enemies page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:45:25
 * Last modified  : 2022-12-29 00:09:40
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import Checkbtn from "../components/checkbtn";
import CheckbtnGroup from "../components/checkbtn-group";
import SearchBar from "../components/search-bar";
import DataTable from "../components/data-table";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getHtml from "../utils/getHtml";

function EnemiesPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/enemies`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <EnemiesInnerPage data={data} />;
}

function EnemiesInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  const [levelFilter, setLevelFilter] = useState({
    普通: true,
    精英: true,
    领袖: true,
  });
  const [raceFilter, setRaceFilter] = useState({
    无种族: true,
    法术造物: true,
    感染生物: true,
    海怪: true,
    化物: true,
    机械: true,
    萨卡兹: true,
    宿主: true,
    无人机: true,
  });
  const [endureFilter, setEndureFilter] = useState({
    "S+": true,
    S: true,
    A: true,
    B: true,
    C: true,
    D: true,
  });
  const [attackFilter, setAttackFilter] = useState({
    "S+": true,
    S: true,
    A: true,
    B: true,
    C: true,
    D: true,
  });
  const [defenceFilter, setDefenceFilter] = useState({
    "S+": true,
    S: true,
    A: true,
    B: true,
    C: true,
    D: true,
  });
  const [resistanceFilter, setResistanceFilter] = useState({
    "S+": true,
    S: true,
    A: true,
    B: true,
    C: true,
    D: true,
  });
  const [search, setSearch] = useState(null);
  const tableHead = [
    "#",
    "种族",
    "级别",
    "耐久",
    "攻击",
    "防御",
    "法术抗性",
    "特殊能力",
  ];
  const tableData = data.map((enemy) => {
    return [
      {
        value: enemy.name,
        element: (
          <div
            className="mdui-valign mdui-ripple"
            onClick={() => {
              navigate(`/enemies/${enemy.id}`);
            }}
          >
            <img
              className="mdui-list-item-avatar mdui-m-a-0"
              src={`/asset/enemy/${enemy.id}.png`}
              alt={enemy.id}
              style={{ width: "40px", height: "40px" }}
            />
            <span className="mdui-m-l-1">{enemy.name}</span>
          </div>
        ),
      },
      {
        value: enemy.race || "无种族",
        element: enemy.race ? (
          <span className="tag mdui-color-lime">{enemy.race}</span>
        ) : null,
      },
      {
        value:
          enemy.level === "NORMAL"
            ? "普通"
            : enemy.level === "ELITE"
            ? "精英"
            : enemy.level === "BOSS"
            ? "领袖"
            : null,
        element:
          enemy.level === "NORMAL" ? (
            <span className="tag mdui-color-grey">普通</span>
          ) : enemy.level === "ELITE" ? (
            <span className="tag mdui-color-indigo">精英</span>
          ) : enemy.level === "BOSS" ? (
            <span className="tag mdui-color-red">领袖</span>
          ) : null,
      },
      {
        value: enemy.endure,
        element: <span className="tag mdui-color-orange">{enemy.endure}</span>,
      },
      {
        value: enemy.attack,
        element: <span className="tag mdui-color-orange">{enemy.attack}</span>,
      },
      {
        value: enemy.defence,
        element: <span className="tag mdui-color-orange">{enemy.defence}</span>,
      },
      {
        value: enemy.resistance,
        element: (
          <span className="tag mdui-color-orange">{enemy.resistance}</span>
        ),
      },
      {
        value: enemy.ability,
        element: getHtml(enemy.ability.replaceAll("\\n", "<br>")),
      },
    ];
  });

  return (
    <>
      <Toolbar currentPage={"敌人总览"} />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-row">
          {/* first check group */}
          <div className="mdui-col-lg-6 mdui-col-md-6">
            <CheckbtnGroup
              title={`敌人级别`}
              titleClass={`mdui-text-color-red-800`}
              groupState={levelFilter}
              setGroupState={setLevelFilter}
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
            </CheckbtnGroup>
          </div>

          {/* first check group */}
          <div className="mdui-col-lg-6 mdui-col-md-6">
            <CheckbtnGroup
              title={`敌人种族`}
              titleClass={`mdui-text-color-red-800`}
              groupState={raceFilter}
              setGroupState={setRaceFilter}
            >
              {Object.keys(raceFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </CheckbtnGroup>
          </div>

          <div className="mdui-col-lg-6 mdui-col-md-6">
            {/* second check group */}
            <CheckbtnGroup
              title={`敌人耐久`}
              titleClass={`mdui-text-color-red-800`}
              groupState={endureFilter}
              setGroupState={setEndureFilter}
            >
              {Object.keys(endureFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </CheckbtnGroup>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6">
            {/* third check group */}
            <CheckbtnGroup
              title={`敌人攻击`}
              titleClass={`mdui-text-color-red-800`}
              groupState={attackFilter}
              setGroupState={setAttackFilter}
            >
              {Object.keys(attackFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </CheckbtnGroup>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6">
            {/* fourth check group */}
            <CheckbtnGroup
              title={`敌人防御`}
              titleClass={`mdui-text-color-red-800`}
              groupState={defenceFilter}
              setGroupState={setDefenceFilter}
            >
              {Object.keys(defenceFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </CheckbtnGroup>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-6">
            {/* last check group */}
            <CheckbtnGroup
              title={`敌人法术抗性`}
              titleClass={`mdui-text-color-red-800`}
              groupState={resistanceFilter}
              setGroupState={setResistanceFilter}
            >
              {Object.keys(resistanceFilter).map((key) => {
                return (
                  <Checkbtn
                    key={key}
                    content={key}
                    className="mdui-color-red-800"
                  />
                );
              })}
            </CheckbtnGroup>
          </div>
        </div>

        {/* search */}
        <SearchBar
          className="mdui-m-t-4"
          placeholder="搜索敌人名称/级别/四项属性"
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

        {/* table */}
        <div className="mdui-m-t-4">
          <DataTable
            head={tableHead}
            data={tableData}
            filters={[
              null,
              raceFilter,
              levelFilter,
              endureFilter,
              attackFilter,
              defenceFilter,
              resistanceFilter,
              null,
            ]}
            search={search}
          />
        </div>
      </div>
    </>
  );
}

export default EnemiesPage;
