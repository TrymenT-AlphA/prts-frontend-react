/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all items page
 *
 * @summary items page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:47:06
 * Last modified  : 2023-01-02 11:49:06
 */

import { useState } from "react";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import CheckbtnGroup from "../components/checkbtn-group";
import Checkbtn from "../components/checkbtn";
import SearchBar from "../components/search-bar";
import QuickItem from "../components/quick-item";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getItemClass from "../utils/getItemClass";

function DropsItemsPage() {
  const { data, isLoading, error } = useGet(`${getServer()}/drops/items`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <DropsItemsInnerPage data={data} />;
}

function DropsItemsInnerPage(props) {
  const data = props.data
    .filter((item) => item.type !== "MEDAL")
    .sort((item1, item2) => {
      return item1.classifyType < item2.classifyType ? -1 : 1;
    });
  const [classifyFilter, setClassifyFilter] = useState({
    材料: true,
    普通: true,
    消耗品: true,
    杂项: true,
  });
  const [search, setSearch] = useState(null);

  return (
    <>
      <Toolbar currentPage={`掉落数据（按道具）`} />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        {/* first check group */}
        <CheckbtnGroup
          title={`分类`}
          titleClass={`mdui-text-color-red-800`}
          groupState={classifyFilter}
          setGroupState={setClassifyFilter}
        >
          {Object.keys(classifyFilter).map((key) => {
            return (
              <Checkbtn
                key={key}
                content={key}
                className="mdui-color-red-800"
              />
            );
          })}
        </CheckbtnGroup>

        {/* search */}
        <SearchBar
          className="mdui-m-t-4 mdui-textfield-expanded"
          placeholder="搜索物品名称"
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
          {data.map((item, key) => {
            return (
              <span key={key}>
                <div className="mdui-dialog" id={item.id}>
                  <div className="mdui-dialog-title">提示</div>
                  <div className="mdui-dialog-content">
                    <div className="mdui-valign">
                      <QuickItem
                        key={key}
                        data={item}
                        style={{
                          width: "80px",
                          height: "80px",
                        }}
                      />
                      <span className="tag mdui-color-lime-accent">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <div className="mdui-dialog-actions mdui-dialog-actions-stacked">
                    <a
                      className="mdui-btn mdui-ripple"
                      href={`/drops/items/${item.id}`}
                    >
                      前往掉落数据页面
                    </a>
                    <button
                      className="mdui-btn mdui-ripple"
                      mdui-dialog-close={1}
                    >
                      关闭窗口
                    </button>
                  </div>
                </div>
                <QuickItem
                  key={key}
                  data={item}
                  mdui-tooltip={`{content: '${item.name}', position: 'top'}`}
                  mdui-dialog={`{target: '#${item.id}'}`}
                  className={
                    classifyFilter[getItemClass(item.classifyType)] === false
                      ? "mdui-hidden"
                      : search !== null && !item.name.includes(search)
                      ? "mdui-hidden"
                      : ""
                  }
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DropsItemsPage;

//   const [typeFilter, setTypeFilter] = useState({
//     ACTIVITY_COIN: true,
//     ACTIVITY_ITEM: true,
//     ACTIVITY_POTENTIAL: true,
//     AP_BASE: true,
//     AP_GAMEPLAY: true,
//     AP_ITEM: true,
//     AP_SUPPLY: true,
//     CARD_EXP: true,
//     CRS_RUNE_COIN: true,
//     CRS_SHOP_COIN: true,
//     DIAMOND: true,
//     DIAMOND_SHD: true,
//     EPGS_COIN: true,
//     ET_STAGE: true,
//     EXP_PLAYER: true,
//     EXTERMINATION_AGENT: true,
//     GOLD: true,
//     HGG_SHD: true,
//     LGG_SHD: true,
//     LIMITED_TKT_GACHA_10: true,
//     LINKAGE_TKT_GACHA_10: true,
//     LMTGS_COIN: true,
//     MATERIAL: true,
//     MEDAL: true,
//     OPTIONAL_VOUCHER_PICK: true,
//     RENAMING_CARD: true,
//     REP_COIN: true,
//     RETRO_COIN: true,
//     RETURN_CREDIT: true,
//     RL_COIN: true,
//     SOCIAL_PT: true,
//     TKT_GACHA: true,
//     TKT_GACHA_10: true,
//     TKT_GACHA_PRSV: true,
//     TKT_INST_FIN: true,
//     TKT_RECRUIT: true,
//     TKT_TRY: true,
//     UNI_COLLECTION: true,
//     VOUCHER_CGACHA: true,
//     VOUCHER_ELITE_II_5: true,
//     VOUCHER_FULL_POTENTIAL: true,
//     VOUCHER_LEVELMAX_5: true,
//     VOUCHER_LEVELMAX_6: true,
//     VOUCHER_MGACHA: true,
//     VOUCHER_PICK: true,
//     VOUCHER_SKIN: true,
//   });
