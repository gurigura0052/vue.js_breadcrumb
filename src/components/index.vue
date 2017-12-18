<template>
  <div class="container">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <h1>{{ msg }}</h1>
    <h2>Page Links</h2>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link active" to="/">Home</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Page1</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/page1">Page1</router-link>
          <router-link class="dropdown-item" to="/page1/2">Page1-2</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page2">Page2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import breadcrumb from './lib/breadcrumb'

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
