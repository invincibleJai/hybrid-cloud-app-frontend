import React from "react";
import { ChartDonut, ChartThemeColor } from "@patternfly/react-charts";

const MessageChart = ({workers}) => {
  //TODO :: some to form data
  return (
    <div style={{ height: "230px", width: "350px" }}>
      <ChartDonut
        ariaDesc="Processed Messages"
        ariaTitle="Responses"
        constrainToVisibleArea={true}
        data={[]}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={[]}
        legendOrientation="vertical"
        legendPosition="right"
        padding={{
          bottom: 20,
          left: 20,
          right: 140, // Adjusted to accommodate legend
          top: 20,
        }}
        subTitle="Processed Messages"
        title="0"
        themeColor={ChartThemeColor.multiOrdered}
        width={350}
      />
    </div>
  );
};

export default MessageChart;
