export const stackedBarChartOptions =
{
    theme: 'light2',
    title: {
      text: "Time Spent on Products"
    },
    animationEnabled: true,
    axisY: {
      title: "Percent",
      suffix: "%"
    },
    legend: {
      horizontalAlign: 'center',
      verticalAlign: 'bottom'
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "stackedBar100",
      showInLegend: true,
      color: "#BBDEFB",
      name: "With Friends",
      indexLabel: "#percent%",
      toolTipContent: "<b>{label}</b><br/><span style='\"'color:{color}'\"'>{name}:</span> #percent%",
      dataPoints: [
        { y: 20, label: "Shah" },
        { y: 18.75, label: "Joe" },
        { y: 25, label: "Fin" },
        { y: 13.75, label: "Larry" }
      ]
    },
    {
      type: "stackedBar100",
      showInLegend: true,
      name: "Eating Out",
      color: "#80DEEA",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 20, label: "Shah" },
        { y: 20, label: "Joe" },
        { y: 17.5, label: "Fin" },
        { y: 26.25, label: "Larry" }
      ]
    },
    {
      type: "stackedBar100",
      showInLegend: true,
      name: "Reading",
      color: "#FFAB91",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 6, label: "Shah" },
        { y: 6, label: "Joe" },
        { y: 15, label: "Fin" },
        { y: 6, label: "Larry" }
      ]
    },
    {
      type: "stackedBar100",
      showInLegend: true,
      name: "Shopping",
      color: "#B0BEC5",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 20, label: "Shah" },
        { y: 13.75, label: "Joe" },
        { y: 9.375, label: "Fin" },
        { y: 26.25, label: "Larry" }
      ]
    },
    {
      type: "stackedBar100",
      showInLegend: true,
      name: "Travel",
      color: "#BCAAA4",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 6, label: "Shah" },
        { y: 8, label: "Joe" },
        { y: 7, label: "Fin" },
        { y: 4, label: "Larry" }
      ]
    },
    {
      type: "stackedBar100",
      showInLegend: true,
      name: "Internet",
      color: "#A5D6A7",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 5.2, label: "Shah" },
        { y: 6, label: "Joe" },
        { y: 15, label: "Fin" },
        { y: 21, label: "Larry" }
      ]
    }]
  };