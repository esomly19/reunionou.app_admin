<template>
  <div>
    <l-map
      style="height: 400px;  width:100%"
      :zoom="zoom"
      :center="center"
      :markerZoomAnimation="true"
      attribution="ok"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="event in events" :key="event.id" :lat-lng="[event.x, event.y]"></l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon, icon } from "leaflet";
import axios from "axios";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
//import axios from "axios";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  data: function() {
    return {
      zoom: 10,
      events: [],
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",

      icon: icon({
        iconUrl: "http://pngimg.com/uploads/gps/gps_PNG74.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      center: [46.867737, 2.395078]
    };
  },
  methods: {
    getEvents() {
      axios.get("http://localhost:3000/evenenments").then(res => {
        this.events = res.data;
        console.log(res.data);
      });
    }
  },
  computed: {},
  mounted() {
    this.getEvents();
  }
};
</script>
<style lang="scss" scoped></style>