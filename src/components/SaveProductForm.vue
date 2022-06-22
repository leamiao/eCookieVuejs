<!-- src/components/SaveProductForm.vue  -->
<template>
  <form>
    <div style="color:red;" v-show="product.errors != null && product.errors.length > 0">
      <ul>
        <li v-for="error in product.errors" :key="error">{{ error }}</li>
      </ul>
    </div>

    <div class="form-group" style="margin-bottom:10px">
      <label for="productName">Product name <span class="text-danger">*</span></label>
      <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
    </div>
    <div class="form-group" style="margin-bottom:10px">
      <label for="productCategory">Product Category <span class="text-danger">*</span></label>
      <select class="form-select" aria-label="Default select example" v-model="product.categoryId">
        <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id == product.categoryId">{{category.name}}</option>
      </select>
    </div>
    <div class="form-group" style="margin-bottom:10px">
      <label for="productDescription">Product Description <small class="text-muted">(optional)</small></label>
      <textarea class="form-control" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
    </div>
    <div class="form-group" style="margin-bottom:10px">
      <label for="price">Price</label>
      <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price" number>
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary" v-text="product.id != null ? 'Update Product' : 'Add Product'" :disabled='product.name == null || product.name == ""'></button>
    <button v-if="product.id != null" type="raised" v-on:click="cancelForm" class="btn btn-primary">Cancel product</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['product'],
  methods: {
    onSubmit () {
      this.$emit('submit', this.product)
    },
    cancelForm () {
      this.$emit('cancel', this.product)
    }
  },
  computed: mapGetters({
    categories: 'getCategories'
  })
}
</script>
