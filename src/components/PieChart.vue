<script>
import { Pie } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Pie,
  data() {
    return {
      chrome: 0,
      firefox: 0
    };
  },

  methods: {},
  mounted() {
    axios
      .get("https://warm-badlands-86536.herokuapp.com/logs")
      .then(res => {
        this.gradient = this.$refs.canvas
          .getContext("2d")
          .createLinearGradient(0, 0, 0, 450);
        this.gradient2 = this.$refs.canvas
          .getContext("2d")
          .createLinearGradient(0, 0, 0, 450);
        this.gradient3 = this.$refs.canvas
          .getContext("2d")
          .createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, "rgba(255, 0,0 )");

        this.gradient2.addColorStop(0, "rgba(0, 231, 255)");
        this.gradient3.addColorStop(0, "rgba(0, 255, 0)");

        this.renderChart(
          {
            labels: ["Chrome", "Firefox", "Autre"],
            datasets: [
              {
                backgroundColor: [
                  this.gradient,
                  this.gradient2,
                  this.gradient3
                ],
                data: [res.data.chrome, res.data.firefox, res.data.autre]
              }
            ]
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Pourcentage des navigateurs utilisées par les visiteurs"
            }
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>