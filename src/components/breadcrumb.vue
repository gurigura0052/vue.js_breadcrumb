<template>
  <nav aria-label="breadcrumb" role="navigation">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li
        v-for="(breadcrumb, i) in breadcrumbs"
        :key="i"
        :class="{ 'breadcrumb-item': breadcrumb.path, 'breadcrumb-item active': !breadcrumb.path }"
        :aria-current="{ page: !breadcrumb.path }"
      >
        <router-link v-if="breadcrumb.path" :to="breadcrumb.path">{{ breadcrumb.title }}</router-link>
        <span v-else>{{ breadcrumb.title }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    breadcrumbs: {
      title: {
        default: ''
      },
      path: {
        default: ''
      }
    }
  }
}
</script>
