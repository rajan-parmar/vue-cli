<template>
    <div>
        <div class="top-bar text-left">
            <h2 class="ml-5 mt-3">VueJs Cart Manager</h2>
        </div>
        <div class="row mr-3 mt-5 ml-3">
            <Forms @inputProduct="inputProducts" :products="products"/>
            <Tables @cartProduct="updateCarts" :addToCarts="addToCarts" :products="products" @remove-product="removeProductUpdate" />
            <Carts :addToCarts="addToCarts" />
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    import Forms from "@/components/Forms.vue";
    import Tables from "@/components/Tables.vue";
    import Carts from "@/components/Carts.vue";
    export default {
        name: "Products",
        components: {
            Forms,Tables,Carts
        },
        data() {
            return {
                products: [],
                addToCarts: []
            }
        },
        methods: {
            inputProducts(variable) {
                this.products = variable;
            },
            updateCarts(variable) {
                this.addToCarts = variable;
            },
            removeProductUpdate(productId) {
                this.products = this.products.filter(product => product.id !== productId);
                this.addToCarts = this.addToCarts.filter(cart => cart.id !== productId);
                this.$toasted.success('Product removed successfully', {
                    position: 'top-right',
                    duration: 900
                });
            },
        }
    };
</script>
<style>
    .top-bar {
        height: 60px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 1%;
    }
</style>
