/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * detail drop information of a specific stage
 *
 * @summary drops stage page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:53:31
 * Last modified  : 2022-12-29 18:49:47
 */

/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all items page
 *
 * @summary items page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:47:06
 * Last modified  : 2022-12-29 18:21:06
 */

import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import DataTable from "../components/data-table";
import Highchart from "../components/charts/highchart";
import ItemCost from "../components/item-cost";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import { useState } from "react";

function DropsStagePage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(
    `${getServer()}/drops/stages/${id}`
  );

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <DropsStageInnerPage data={data} />;
}

function DropsStageInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  const [validFilter, setValidFilter] = useState({
    有效: true,
    无效: false,
  });
  const tableHead = [
    "#",
    "掉落总数",
    "期望理智",
    <>
      <label
        className="mdui-switch"
        mdui-tooltip="{content: '开启时将只显示有效数据', position: 'top'}"
      >
        <input
          type="checkbox"
          checked={!validFilter["无效"]}
          onChange={() =>
            setValidFilter({
              有效: true,
              无效: !validFilter["无效"],
            })
          }
        />
        <i className="mdui-switch-icon"></i>
      </label>
    </>,
  ];
  const tableData = data.drops
    .sort((drop1, drop2) => {
      return drop1.quantity > drop2.quantity ? -1 : 1;
    })
    .map((drop, key) => {
      return [
        {
          value: drop.item.name,
          element: (
            <ItemCost
              id={drop.item.id}
              count={null}
              style={{ width: "40px", height: "40px" }}
              onClick={() => navigate(`/drops/items/${drop.item.id}`)}
            />
          ),
        },
        {
          value: drop.quantity,
          element: drop.quantity,
        },
        {
          value: drop.quantity
            ? (drop.stage.apCost * drop.times) / drop.quantity
            : "INF",
          element: drop.quantity ? (
            ((drop.stage.apCost * drop.times) / drop.quantity).toFixed(1)
          ) : (
            <span className="tag mdui-color-red">INF</span>
          ),
        },
        {
          value:
            !drop.end.Valid && drop.times && drop.quantity ? "有效" : "无效",
          element: !drop.end.Valid ? (
            <span className="tag mdui-color-light-green">有效</span>
          ) : (
            <span className="tag mdui-color-red">无效</span>
          ),
        },
      ];
    });

  return (
    <>
      <Toolbar currentPage={`掉落数据 ${data.code} ${data.name}`} />

      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-row">
          <div className="mdui-col-lg-6 mdui-col-md-12">
            <div className="mdui-card mdui-m-t-4">
              {/* bar chart */}
              <Highchart
                options={{
                  accessibility: {},
                  chart: {
                    type: "bar",
                  },
                  title: {
                    useHTML: true,
                    text: `<span class="tag mdui-color-lime">${data.code} ${data.name}</span> 掉落数据统计`,
                  },
                  tooltip: {
                    headerFormat:
                      '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
                  },
                  xAxis: {
                    categories: tableData.map((row) => row[0].value),
                    title: {
                      text: "关卡",
                    },
                  },
                  yAxis: {
                    min: 0,
                    title: {
                      text: "次数/理智",
                      align: "high",
                    },
                    labels: {
                      overflow: "justify",
                    },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: true,
                      },
                    },
                  },
                  legend: {
                    layout: "vertical",
                    align: "right",
                    verticalAlign: "top",
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: "#FFFFFF",
                    shadow: true,
                  },
                  credits: {
                    enabled: false,
                  },
                  series: [
                    {
                      name: "掉落总数",
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[3].value === "有效") ||
                            (validFilter["无效"] && row[3].value === "无效")
                        )
                        .map((row) => row[1].value),
                    },
                    {
                      name: "期望理智",
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[3].value === "有效") ||
                            (validFilter["无效"] && row[3].value === "无效")
                        )
                        .map((row) => row[2].value),
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="mdui-col-lg-6 mdui-col-md-12">
            <div className="mdui-card mdui-m-t-4">
              {/* pie chart */}
              <Highchart
                options={{
                  chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: "pie",
                  },
                  credits: {
                    enabled: false,
                  },
                  title: {
                    useHTML: true,
                    text: `<span class="tag mdui-color-lime">${data.code} ${data.name}</span> 掉落物品分布`,
                  },
                  tooltip: {
                    headerFormat:
                      '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
                  },
                  plotOptions: {
                    pie: {
                      allowPointSelect: true,
                      cursor: "pointer",
                      dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                      },
                    },
                  },
                  series: [
                    {
                      name: "Brands",
                      colorByPoint: true,
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[3].value === "有效") ||
                            (validFilter["无效"] && row[3].value === "无效")
                        )
                        .map((row, key) => {
                          if (key) {
                            return {
                              name: row[0].value,
                              y: row[1].value,
                            };
                          }

                          return {
                            name: row[0].value,
                            y: row[1].value,
                            sliced: true,
                            selected: true,
                          };
                        }),
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>

        <div className="mdui-row mdui-m-t-4">
          <div className="mdui-col-lg-12">
            <DataTable
              head={tableHead}
              data={tableData}
              filters={[null, null, null, validFilter]}
              search={null}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropsStagePage;
