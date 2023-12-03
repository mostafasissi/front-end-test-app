export const pieChartOptions =
{
  animationEnabled: true,
  title: {
    text: "Sales by Product Category"
  },
  data: [{
    type: "pie",
    startAngle: -90,
    indexLabel: "{name}: {y}%",
    yValueFormatString: "#,###.##'%'",
    dataPoints: [
      { y: 20.5, name: "Toys" },
      { y: 15.8, name: "Electronics" },
      { y: 25.3, name: "Groceries" },
      { y: 38.4, name: "Furniture" }
    ]
  }]
}
