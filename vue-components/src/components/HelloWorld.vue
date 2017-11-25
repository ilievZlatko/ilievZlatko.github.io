<template>
  <div class="hello">
    <h1>Vue Daterange Picker</h1>
    <h4>Start Date: </h4>&nbsp;<p> {{startDate}}</p><br>
    <h4 class="bottom-margin">End Date: </h4>&nbsp;<p> {{endDate}}</p>
    <vue-daterange-picker 
      double
      start-date="06/10/2017" 
      end-date="06/10/2018" 
      @get-dates="getDates"
    />
  </div>
</template>

<script>
import VueDaterangePicker from 'vue-daterange-picker';

export default {
  name: 'HelloWorld',

  data() {
    return {
      startDate: '',
      endDate: ''
    };
  },

  components: {
    VueDaterangePicker
  },

  methods: {
    getDates(dates) {
      this.startDate = dates.startDate;
      this.endDate = dates.endDate;
    }
  }
}
</script>

<style scoped>
.bottom-margin {
  margin-bottom: 20px;
}
h1, h2 {
  font-weight: normal;
}
h4, p {
  margin: 0;
  display: inline-block;
  padding: 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
