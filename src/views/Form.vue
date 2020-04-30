<template>
    <div class="row">
        <Forms :products="products"/>
        <Tables :products="products" @remove-product="removeProductUpdate" />
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
            removeProductUpdate(productId) {
                this.products = this.products.filter(product => product.id !== productId);
                this.$toasted.success('Product removed successfully', {
                    position: 'top-right',
                    duration: 900
                });
            }
        }
    };
</script>
