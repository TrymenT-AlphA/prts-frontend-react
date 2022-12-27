/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all characters page
 *
 * @summary characters page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:42:51
 * Last modified  : 2022-12-27 19:58:00
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import DataTable from "../components/data-table";
import Checkbtn from "../components/checkbtn";
import CheckbtnGroup from "../components/checkbtn-group";
import CharAvatar from "../components/char-avatar";
import SearchBar from "../components/search-bar";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getProfession from "../utils/getProfession";
import getSubProfession from "../utils/getSubProfession";
import getHtml from "../utils/getHtml";

function CharactersPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/characters`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <CharactersPageInner data={data} />;
}

function CharactersPageInner(props) {
  const data = props.data
    .filter((char) => char.profession !== "TRAP" && char.profession !== "TOKEN")
    .sort((char1, char2) => {
      return char1.rarity > char2.rarity ? -1 : 1;
    });
  const navigate = useNavigate();
  const [rarityFilter, setRarityFilter] = useState({
    "6★": true,
    "5★": true,
    "4★": true,
    "3★": true,
    "2★": true,
    "1★": true,
  });
  const [professionFilter, setProfessionFilter] = useState({
    近卫干员: true,
    先锋干员: true,
    狙击干员: true,
    术师干员: true,
    重装干员: true,
    医疗干员: true,
    辅助干员: true,
    特种干员: true,
  });
  const [subProfessionFilter, setSubProfessionFilter] = useState({
    冲锋手: true,
    尖兵: true,
    战术家: true,
    执棋手: true,
    剑豪: true,
    强攻手: true,
    收割者: true,
    教官: true,
    斗士: true,
    无畏者: true,
    术战者: true,
    武者: true,
    解放者: true,
    领主: true,
    重剑手: true,
    不屈者: true,
    决战者: true,
    守护者: true,
    要塞: true,
    铁卫: true,
    驭法铁卫: true,
    投掷手: true,
    攻城手: true,
    散射手: true,
    炮手: true,
    神射手: true,
    速射手: true,
    重射手: true,
    中坚术师: true,
    扩散术师: true,
    秘术师: true,
    轰击术师: true,
    链术师: true,
    阵法术师: true,
    驭械术师: true,
    医师: true,
    咒愈师: true,
    疗养师: true,
    群愈师: true,
    行医: true,
    凝滞师: true,
    削弱者: true,
    召唤师: true,
    吟游者: true,
    工匠: true,
    护佑者: true,
    冲锋手: true,
    傀儡师: true,
    处决者: true,
    怪杰: true,
    推击手: true,
    行商: true,
    钩索师: true,
    陷阱师: true,
  });
  const [search, setSearch] = useState(null);
  const tableHead = ["干员", "稀有度", "职业", "分支", "特性"];
  const [tableData, setTableData] = useState(
    data.map((char) => {
      return [
        {
          value: char.name,
          element: (
            <div
              className="mdui-valign mdui-ripple"
              onClick={() => {
                navigate(`/characters/${char.id}`);
              }}
            >
              <CharAvatar id={char.id} />
              <span className="mdui-m-l-1">{char.name}</span>
            </div>
          ),
        },
        {
          value: `${char.rarity + 1}★`,
          element: (
            <span className="tag mdui-color-red-600">
              {`${char.rarity + 1}★`}
            </span>
          ),
        },
        {
          value: getProfession(char.profession),
          element: (
            <span className="tag mdui-color-pink-600">
              {getProfession(char.profession)}
            </span>
          ),
        },
        {
          value: getSubProfession(char.subProfessionId),
          element: (
            <span className=" tag mdui-color-purple-600">
              {getSubProfession(char.subProfessionId)}
            </span>
          ),
        },
        {
          value: char.description,
          element: getHtml(char.description.replaceAll("\\n", "<br>")),
        },
      ];
    })
  );

  return (
    <>
      <Toolbar currentPage={`干员总览`} />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        {/* first check group */}
        <CheckbtnGroup
          title={`稀有度`}
          titleClass={`mdui-text-color-red-800`}
          groupState={rarityFilter}
          setGroupState={setRarityFilter}
        >
          {Object.keys(rarityFilter).map((key) => {
            return (
              <Checkbtn
                key={key}
                content={key}
                className="mdui-color-red-800"
              />
            );
          })}
        </CheckbtnGroup>

        {/* second check group */}
        <CheckbtnGroup
          title={`职业`}
          titleClass={`mdui-text-color-red-600`}
          groupState={professionFilter}
          setGroupState={setProfessionFilter}
        >
          {Object.keys(professionFilter).map((key) => {
            return (
              <Checkbtn
                key={key}
                content={key}
                className="mdui-color-pink-600"
              />
            );
          })}
        </CheckbtnGroup>

        {/* second check group */}
        <CheckbtnGroup
          title={`分支`}
          titleClass={`mdui-text-color-purple-600`}
          groupState={subProfessionFilter}
          setGroupState={setSubProfessionFilter}
        >
          {Object.keys(subProfessionFilter).map((key) => {
            return (
              <Checkbtn
                key={key}
                content={key}
                className="mdui-color-purple-600"
              />
            );
          })}
        </CheckbtnGroup>

        {/* search */}
        <SearchBar
          className="mdui-m-t-4"
          placeholder="搜索干员名称/稀有度/职业/分支"
          onChange={(e) => {
            var content = e.target.value;
            if (content === "") {
              setSearch(null);
            }
            setSearch(content);
          }}
          onCloseClick={() => {
            setSearch(null);
          }}
        />

        {/* table */}
        <div className="mdui-m-t-4">
          <DataTable
            head={tableHead}
            data={tableData}
            filters={[
              null, // 无过滤器
              rarityFilter, // 稀有度过滤器
              professionFilter, // 职业过滤1器
              subProfessionFilter, // 分支过滤器
              null, // 无过滤器
            ]}
            search={search}
          />
        </div>
      </div>
    </>
  );
}

export default CharactersPage;
