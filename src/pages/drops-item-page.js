/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * all items page
 *
 * @summary items page
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:47:06
 * Last modified  : 2022-12-29 18:31:00
 */

import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";
import LoadingPage from "./loading-page";
import Toolbar from "../components/toolbar";
import DataTable from "../components/data-table";
import Highchart from "../components/charts/highchart";
import useGet from "../hooks/useGet";
import getServer from "../utils/getServer";
import { useState } from "react";

function DropsItemPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(`${getServer()}/drops/items/${id}`);

  if (error !== null) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return <DropsItemInnerPage data={data} />;
}

function DropsItemInnerPage(props) {
  const data = props.data;
  const navigate = useNavigate();
  const [validFilter, setValidFilter] = useState({
    有效: true,
    无效: false,
  });
  const tableHead = [
    "#",
    "作战次数",
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
    .filter((drop) => drop.stage.code && drop.stage.name)
    .sort((drop1, drop2) => {
      return drop1.times > drop2.times ? -1 : 1;
    })
    .map((drop, key) => {
      return [
        {
          value: `${drop.stage.code} ${drop.stage.name}`,
          element: (
            <div
              key={key}
              className="mdui-chip"
              onClick={() => navigate(`/drops/stages/${drop.stage.id}`)}
            >
              <span className="mdui-chip-title">{`${drop.stage.code} ${drop.stage.name}`}</span>
            </div>
          ),
        },
        {
          value: drop.times,
          element: drop.times,
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
            <span key={key} className="tag mdui-color-red">
              INF
            </span>
          ),
        },
        {
          value:
            !drop.end.Valid && drop.times && drop.quantity ? "有效" : "无效",
          element: !drop.end.Valid ? (
            <span key={key} className="tag mdui-color-light-green">
              有效
            </span>
          ) : (
            <span key={key} className="tag mdui-color-red">
              无效
            </span>
          ),
        },
      ];
    });

  return (
    <>
      <Toolbar currentPage={`掉落数据 ${data.name}`} />

      <div className="mdui-container mdui-p-t-4 mdui-p-b-5">
        <div className="mdui-row">
          <div className="mdui-col-lg-8 mdui-col-md-12">
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
                    text: `<span class="tag mdui-color-lime">${data.name}</span> 掉落数据统计`,
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
                      name: "作战次数",
                      data: tableData
                        .filter((row) => row[4].value === "有效")
                        .map((row) => row[1].value),
                    },
                    {
                      name: "掉落总数",
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[4].value === "有效") ||
                            (validFilter["无效"] && row[4].value === "无效")
                        )
                        .map((row) => row[2].value),
                    },
                    {
                      name: "期望理智",
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[4].value === "有效") ||
                            (validFilter["无效"] && row[4].value === "无效")
                        )
                        .map((row) => row[3].value),
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="mdui-col-lg-4 mdui-col-md-12">
            <div className="mdui-card mdui-m-t-4">
              {/* word cloud chart */}
              <Highchart
                options={{
                  accessibility: {},
                  series: [
                    {
                      type: "wordcloud",
                      name: "作战次数",
                      data: tableData
                        .filter(
                          (row) =>
                            (validFilter["有效"] && row[4].value === "有效") ||
                            (validFilter["无效"] && row[4].value === "无效")
                        )
                        .map((row) => {
                          return {
                            name: row[0].value,
                            weight: row[1].value,
                          };
                        }),
                    },
                  ],
                  title: {
                    useHTML: true,
                    text: `<span class="tag mdui-color-lime">${data.name}</span> 作战次数统计`,
                  },
                  tooltip: {
                    headerFormat:
                      '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
                  },
                  credits: {
                    enabled: false,
                  },
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
              filters={[null, null, null, null, validFilter]}
              search={null}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropsItemPage;
