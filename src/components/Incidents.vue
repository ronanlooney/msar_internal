<template>
  <!-- <div class="container">
    <h3 >All Incidents:</h3>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Incident Description</th>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Members Attended</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in incidentData" v-bind:key="user.ref_desc">
          <td class="border px-4 py-2">{{user.ref_desc}}</td>
          <td class="border px-4 py-2">{{user.incidentDate}}</td>
          <td class="border px-4 py-2">{{user.count_attendance}}</td>
        </tr>
      </tbody>
    </table>
  </div> -->

  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <h1 class="text-2xl font-semibold text-orange-400 px-10">Incidents</h1>
  <ul>
    <li v-for="incidentData in incidentData" v-bind:key="incidentData.ref_desc">
      <a href="#" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">{{incidentData.ref_desc}}</div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <span class="truncate">{{incidentData.regionaddress}}</span>
                </div>
              </div>
              <div class="hidden md:block">
                <div>
                  <div class="text-sm leading-5 text-gray-900">
                    Incident Date
                    <time datetime="2020-01-07">{{incidentData.incidentDate}}</time>
                  </div>
                  <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                    Attendance Count
                    <pre> {{incidentData.count_attendance}}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Incidents',
  data() {
    return {
      incidentData: null,
    };
  },

  created() {
    axios.get('https://api.d4h.org/v2/team/incidents', {
      headers: {
        Authorization: 'Bearer 35caffcd2688923f572dabdfbe1b494ffd02abac',
      },
    })
      .then((res) => {
        // console.log(res.data.data);
        const incidentData = res.data.data.reverse();
        incidentData.map((obj) => Object.assign(obj, { incidentDate: new Date(obj.date).toLocaleDateString('en-GB', { dateStyle: 'short' }) }));
        this.incidentData = incidentData;
      });
  },
};
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
