<template>
  <div class="container">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <h1>{{ msg }}</h1>
    <h2>Page Links</h2>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link active" to="/">Home</router-link>
      </li>
      <b-nav-item-dropdown text="Page1" left>
        <b-dropdown-item to="/page1">Page1</b-dropdown-item>
        <b-dropdown-item to="/page1/2">Page1-2</b-dropdown-item>
      </b-nav-item-dropdown>
      <li class="nav-item">
        <router-link class="nav-link" to="/page2">Page2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import breadcrumb from '../components/breadcrumb'

Vue.component('breadcrumb', breadcrumb)

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      breadcrumbs: []
    }
  }
}
</script>
