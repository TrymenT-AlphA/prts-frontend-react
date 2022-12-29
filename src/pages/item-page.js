/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * detail information of a specific item
 *
 * @summary item page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:47:54
 * Last modified  : 2022-12-29 13:44:16
 */

import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import Item from "../components/item";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import getItemClass from "../utils/getItemClass";

function ItemPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(`${getServer()}/items/${id}`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <ItemPageInner data={data} />;
}

function ItemPageInner(props) {
  const data = props.data;
  const navigate = useNavigate();

  return (
    <>
      <Toolbar currentPage={data.name} />
      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-card">
          {/* card header */}
          <div className="mdui-card-header">
            <Item id={data.id} className="mdui-card-header-avatar" />
            <div className="mdui-card-header-title">{data.name}</div>
            <div className="mdui-card-header-subtitle">
              {getItemClass(data.classifyType)}
            </div>
          </div>

          <div className="mdui-card-primary" style={{ marginTop: "-24px" }}>
            <div className="mdui-typo">
              <hr />
              <h4>基本描述</h4>
              <p>{data.description}</p>
              <h4>用途</h4>
              <p>{data.usage}</p>
              <h4>掉落数据分析</h4>
              {data.drops.length === 0 ? (
                <button
                  className="mdui-btn mdui-btn-block mdui-ripple mdui-color-indigo"
                  disabled
                  onClick={() => navigate(`/drops/items/${data.id}`)}
                  style={{
                    border: "solid 1px",
                  }}
                >
                  该物品暂无掉落数据
                </button>
              ) : (
                <button
                  className="mdui-btn mdui-btn-block mdui-ripple mdui-color-indigo"
                  onClick={() => navigate(`/drops/items/${data.id}`)}
                >
                  前往掉落数据分析
                </button>
              )}

              <div className="mdui-panel mdui-m-t-4" mdui-panel={1}>
                <div className="mdui-panel-item mdui-shadow-1 mdui-ripple">
                  <div className="mdui-panel-item-header">掉落关卡</div>
                  <div className="mdui-panel-item-body">
                    {data.drops.map((drop, key) => {
                      if (!drop.stage.name || !drop.stage.code) {
                        return null;
                      }

                      return (
                        <div
                          key={key}
                          className="mdui-chip"
                          onClick={() =>
                            navigate(`/stages/${drop.stage.id}`)
                          }
                        >
                          <span className="mdui-chip-title">{`${drop.stage.code} ${drop.stage.name}`}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
