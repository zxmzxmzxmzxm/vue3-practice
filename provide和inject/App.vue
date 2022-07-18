<template>
    <div>
        <child :name='names'>
            <template v-slot="slotProps">
                <button>{{slotProps.item}}-{{slotProps.index}}</button>
            </template>
        </child>

        <child :name='names'>
            <template v-slot="slotProps">
                <strong>{{slotProps.item}}-{{slotProps.index}}</strong>
            </template>
        </child>
    </div>
</template>

<script>
import Child from './Child.vue';
export default {
    components:{
        Child
    },
    data() {
        return{
            names: ['zxm','add','vbn']
        }
    }
}
</script>

<style>

</style>