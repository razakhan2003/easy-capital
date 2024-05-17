<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="w-full">
            <h2 class="font-semibold text-[2rem] mb-10">Feel free to reach out to us:</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="rounded-md bg-primary p-4 flex items-center">
                    <div class="flex items-center gap-4">
                        <icons-location class="max-w-[3rem] shrink-0"/>
                        <p class="font-light text-[1.3rem] text-[#fff]">Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015</p>
                    </div>
                </div>
                <div class="rounded-md bg-primary p-4 flex flex-col gap-4">
                    <nuxt-link to="tel:+918745945682" target="_blank" class="flex items-center gap-4 cursor-pointer">
                        <icons-phone class="max-w-[2.5rem]"/>
                        <p class="font-light text-[1.3rem] text-[#fff]">+91 87459 45682</p>
                    </nuxt-link>

                    <nuxt-link to="https://api.whatsapp.com/send?phone=918745945682" target="_blank" class="flex items-center gap-4 cursor-pointer">
                        <icons-whatsapp class="shrink-0 max-w-[2.5rem]"/>
                        <p class="font-light text-[1.3rem] text-[#fff] break-words">+91 87459 45682</p>
                    </nuxt-link>

                    <nuxt-link to="mailto:support@easycapital.co.in" target="_blank" class="flex items-center gap-4 cursor-pointer">
                        <icons-email class="shrink-0 max-w-[2.5rem]"/>
                        <p class="font-light text-[1.3rem] text-[#fff] break-words">support@easycapital.co.in</p>
                    </nuxt-link>

                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
definePageMeta({
  layout: 'dashboard'
})

</script>