<template>
    <div class="row">
        <Forms @inputProduct="inputProducts" :products="products"/>
        <Tables @cartProduct="updateCarts" :addToCarts="addToCarts" :products="products" @remove-product="removeProductUpdate" />
        <Carts :addToCarts="addToCarts" />
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
