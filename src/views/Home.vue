<template>
  <div class="main">
    <div class="conatiner flex">
      <div class="wrap">
        <PieChart style="width:50%; height:475px;border:1px solid black" />
        <BarChart style="width:49%;height:475px; border:1px solid black" />
      </div>
    </div>
    <div class="conatiner flex">
      <div class="wrap">
        <Map style="width:50%; height:475px;border:1px solid black" />
        <BarChart2 style="width:49%;height:475px;  border:1px solid black" />
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";
import BarChart2 from "../components/BarChart2.vue";
import Map from "../components/Map.vue";
export default {
  name: "Home",
  components: {
    PieChart,
    BarChart,
    BarChart2,
    Map
  }
};
</script>

<style>
.conatiner {
  width: 100%;
  height: 500px;
}
.wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.sidenav {
  height: 100%;
  width: 180px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 180px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
