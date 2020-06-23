<template>
  <div class="main">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">titre</th>
          <th scope="col">description</th>
          <th scope="col">date</th>
          <th scope="col">adresse</th>
          <th scope="col">etat</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event) in events" :key="event.id">
          <th scope="row">{{ event.id }}</th>
          <td>{{ event.titre }}</td>
          <td>{{ event.description }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.adresse }}</td>
          <td v-if="event.etat==1">publique</td>
          <td v-if="event.etat==0">privé</td>
          <td>
            <button v-on:click="modifier(event)">modifier</button>
          </td>
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
  data: () => ({ events: null, page: 1, size: 10, numberofpages: 0, count: 0 }),
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
    modifier(ev) {
      console.log("token" + ev);
      this.$router.push({ name: "Modif", params: { event: ev } });
    },
    searchUsers() {
      axios
        .get("http://localhost:3000/eventadmin?page=" + this.page + "&size=10")
        .then(res => {
          console.log(res);
          this.count = res.data.count;
          this.numberofpages = res.data.nbpage;
          this.events = res.data.events;
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