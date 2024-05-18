<template>
    <div class="h-[100vh]">
        <Head>
            <Title>Easy Capital - Dashboard</Title>
        </Head>
        <dashboard-header :sidebar="show" @close-sidebar="show = false" @open-sidebar="show = true"/>
        <dashboard-sidebar @close="show = false" :sidebar="show">
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