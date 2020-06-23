<template>
  <div class="main">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Service</th>
          <th scope="col">Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Api</th>
          <td v-if="api" class="bg-success"></td>
          <td v-if="!api" class="bg-danger"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return { api: false };
  },
  methods: {
    checkApiup() {
      axios
        .get("https://warm-badlands-86536.herokuapp.com/")
        .then(res => {
          if (res) {
            this.api = true;
          } else {
            this.api = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.checkApiup();
  }
};
</script>

<style>
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
