<template>
  <div class="main">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">email</th>
          <th scope="col">nom</th>
          <th scope="col">prenom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.nom }}</td>
          <td>{{ user.prenom }}</td>
        </tr>
      </tbody>
    </table>
    <nav>
      <Button v-on:click="previousPage()">previous</Button>
      <Button v-on:click="nextPage()">next</Button>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LineChartContainer",
  components: {},
  data: () => ({ users: null, page: 1, size: 10, numberofpages: 0, count: 0 }),
  methods: {
    nextPage() {
      if (this.page + 1 > this.numberofpages) {
        this.page = this.numberofpages;
      } else {
        this.page++;
      }
      this.searchUsers();
    },
    previousPage() {
      if (this.page - 1 < 1) {
        this.page = 1;
      } else {
        this.page--;
      }
      this.searchUsers();
    },
    searchUsers() {
      axios
        .get(
          "https://warm-badlands-86536.herokuapp.com/users?page=" +
            this.page +
            "&size=10"
        )
        .then(res => {
          console.log(res);
          this.count = res.data.count;
          this.numberofpages = res.data.nbpage;
          this.users = res.data.users;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  async mounted() {
    this.searchUsers();
  }
};
</script>

<style>
.main {
  margin-left: 190px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
</style>