<template>
    <div class="h-[100vh]">
        <dashboard-header @close-sidebar="show = false" @open-sidebar="show = true"/>
        <dashboard-sidebar :sidebar="show">
            <slot />
        </dashboard-sidebar>
    </div>
</template>

<script>
export default{
    name: 'dashboard',
    data(){
        return{
            show: false
        }
    }
}
</script>