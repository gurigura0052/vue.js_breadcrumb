<template>
  <div class="container">
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <h1>{{ msg }}</h1>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Page1
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link" to="/page1">Page1</router-link>
              <router-link class="nav-link active" to="/page1/2">Page1-2</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/page2">Page2</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Page1of2',
  data () {
    return {
      msg: 'Page1-2',
      breadcrumbs: [{ title: 'Page1', path: '/page1' }, { title: 'Page1-2' }]
    }
  }
}
</script>
