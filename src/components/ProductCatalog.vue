<template>
  <section>
    <!--ul v-for="product in products" v-bind:key="product.id">
      <li>{{product.name}}</li>
    </ul-->
    <div class="container">
      <div class="row text-center text-lg-start">
        <div class="col-lg-3 col-md-4 col-6" v-for="product in products" v-bind:key="product.id">
          <a href="#" class="d-block mb-4 h-100" style="font-style:inherit">
            <img class="img-fluid img-thumbnail" :src="baseUrl + '/extraImages/products/'+product.imageUrl" alt="product.description" :title="product.description">
            {{product.name}}<br/> ${{product.price}}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'

export default {
  data () {
    return {
      baseUrl: Vue.serverBaseUrl
    }
  },
  computed: mapGetters({
    products: 'getProducts'
  })
}
</script>
