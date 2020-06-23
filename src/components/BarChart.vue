<script>
import { Bar } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Bar,
  data() {
    return {
      options: {
        title: {
          display: true,
          text: "Nombre de visites par mois"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: function(tooltipItems) {
              return "$" + tooltipItems.yLabel;
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200
      }
    };
  },

  methods: {},
  mounted() {
    let e = [];
    axios
      .get("https://warm-badlands-86536.herokuapp.com/log")
      .then(res => {
        res.data.map(function(value) {
          e.push(value);
        });
        console.log("e : " + e);
        this.renderChart(
          {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#6666ff",
                data: e
              }
            ]
          },
          this.options
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>