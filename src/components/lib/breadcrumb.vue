<template>
  <nav aria-label="breadcrumb" role="navigation">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li v-for="breadcrumb in breadcrumbs" class="breadcrumb-item" v-if="breadcrumb.path">
        <router-link :to="breadcrumb.path">{{ breadcrumb.title }}</router-link>
      </li>
      <li v-for="breadcrumb in breadcrumbs" class="breadcrumb-item active" v-if="!breadcrumb.path" aria-current="page">
        {{ breadcrumb.title }}
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'breadcrumb',
    props: ['breadcrumbs']
  }
</script>
