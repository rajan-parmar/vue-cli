<template>
  <div class="row">
    <div class="col-lg-3 form-section">
      <h3 class="font-weight-bold mb-3">Product Form :</h3>

      <form @submit.prevent="addNewProduct">
        <div class="form-group">
          <label class="font-weight-bold">Name:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Insert Name"
            v-model="name"
          />
        </div>

        <div class="form-group">
          <label class="font-weight-bold">Price:</label>
          <input
            type="number"
            class="form-control"
            placeholder="Insert Price"
            v-model="price"
          />
        </div>

        <div class="form-group">
          <label class="font-weight-bold">Image Url:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Insert Image Url"
            v-model="url"
          />
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      price: "",
      url: "",
      products: []
    };
  },
  methods: {
    addNewProduct() {
        let incrementValue = 0;
        if (this.name == "" || this.price == "" || this.url == "") {
            alert('Please fill blank field');
        } else {
            incrementValue = this.products.length + 1;
            this.products.push({
                id: incrementValue,
                name: this.name,
                price: this.price,
                url: this.url,
                isEdit: false,
                qty: 1
            });

            this.name = "";
            this.price = "";
            this.url = "";
        }
    },
    removeProductUpdate(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
  }
};
</script>
<style>
.form-section {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1%;
}
</style>
