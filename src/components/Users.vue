<template>
  <div class="container">
    <h3 >All Incidents:</h3>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">id</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Members Attended</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userData" v-bind:key="user.id">
          <td class="border px-4 py-2">{{user.id}}</td>
          <td class="border px-4 py-2">{{user.name}}</td>
          <td class="border px-4 py-2">{{user.incidentDate}}</td>
          <td class="border px-4 py-2">{{user.count_attendance}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      userData: null,
    };
  },

  created() {
    axios.get('https://api.d4h.org/v2/team/members', {
      headers: {
        Authorization: 'Bearer 35caffcd2688923f572dabdfbe1b494ffd02abac',
      },
    })
      .then((res) => {
        // console.log(res.data.data);
        const userData = res.data.data.reverse();
        userData.map((obj) => Object.assign(obj, { incidentDate: new Date(obj.date).toLocaleDateString('en-GB', { dateStyle: 'short' }) }));
        this.userData = userData;
      });
  },
};
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
