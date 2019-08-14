# myVue.jsBreadcrumb
https://gurigura0052.github.io/myVue.jsBreadcrumb/#/

## breadcrumbコンポーネント
src/views/Page1-2.vue
```html
<breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
```
```javascript
data () {
  return {
    msg: 'Page1-2',
    breadcrumbs: [{ title: 'Page1', path: '/page1' }, { title: 'Page1-2' }] // Home以降のパンくずリスト
  }
}
```
親コンポーネントから子コンポーネントにbreadcrumbsデータを渡します。

src/components/breadcrumb.vue
```html
<ol class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="/">Home</a> <!-- Homeへのリンクは固定 -->
  </li>

  <!-- breadcrumbsをループ、pathの有無で分岐 -->
  <li
    v-for="(breadcrumb, i) in breadcrumbs"
    :key="i"
    :class="{ 'breadcrumb-item': breadcrumb.path, 'breadcrumb-item active': !breadcrumb.path }"
  > 
    <router-link v-if="breadcrumb.path" :to="breadcrumb.path">{{ breadcrumb.title }}</router-link>
    <span v-else>{{ breadcrumb.title }}</span>
  </li>
</ol>
```
```javascript
props: {
  // 型を設定
  breadcrumbs: {
    title: {
      default: ''
    },
    path: {
      default: ''
    }
  }
}
```
親コンポーネントからbreadcrumbsデータを受け取るため、propsにbreadcrumbsの型を設定します。
親コンポーネントから受け取ったbreadcrumbsデータをループさせ、pathがなければbreadcrumb-itemに加え、activeクラスを付けます。
リンクの付け替えもpathで分岐させます。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
