<template>
  <section>
    <save-product-form
      :product="productInForm"
      v-on:submit="onFormSave"
      v-on:cancel="onCancelForm"
    ></save-product-form>
    <product-list :products="products" v-on:edit="onEditClicked" v-on:remove="onRemoveClicked"></product-list>
  </section>
</template>

<script>
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      categoryId: null,
      description: '',
      price: null,
      errors: []
    }
  }
}

export default {
  components: {
    ProductList,
    SaveProductForm
  },
  data: initialData,
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    resetProductInForm () {
      this.productInForm = initialData().productInForm
    },
    onEditClicked (product) {
      // since objects are passed by reference we need to clone the product
      // either by using Object.assign({}, product) or by using object
      // spread like we do here.
      this.productInForm = { ...product }
      console.info(product)
      this.productInForm.categoryId = product.category.id
    },
    onRemoveClicked (productId) {
      this.deleteProduct(productId).then(() => {
        if (productId === this.productInForm.id) {
          this.resetProductInForm()
        }
      })
    },
    onCancelForm (product) {
      this.productInForm = {}
    },
    onFormSave (product) {
      this.saveProduct(product).then(() => this.resetProductInForm())
        .catch(error => {
          this.productInForm = {...product, errors: [error.response.data.message]}
        })
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  }
}
</script>
