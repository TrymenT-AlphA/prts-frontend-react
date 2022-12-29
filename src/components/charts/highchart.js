/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-29 11:02:01
 * Last modified  : 2022-12-29 18:16:38
 */

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import accessibility from "highcharts/modules/accessibility";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import wordcloud from "highcharts/modules/wordcloud";

accessibility(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
wordcloud(Highcharts);

function Highchart(props) {
  return (
    <div>
      <HighchartsReact
        immutable={true}
        highcharts={Highcharts}
        options={props.options}
      />
    </div>
  );
}

export default Highchart;
