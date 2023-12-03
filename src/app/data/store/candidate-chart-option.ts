export const candidateChartOptions =   {
  title: {
    text: "Graphique des Choix de Candidat"
  },
  data: [{
    type: "bar",
    indexLabel: "{name}: {y}%",
    yValueFormatString: "#,###.##'%'",
    dataPoints: [
      { y: 8.1, name: "Emploi 1" },
      { y: 28.2, name: "Emploi 2" },
      { y: 20.4, name: "Emploi 3" },
      { y: 43.3, name: "Emploi 4" },
    ]
  }]
};
