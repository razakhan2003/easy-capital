<template>
    <div class="w-full py-20">
        <div class="container">
            <div class="flex flex-col lg:flex-row-reverse gap-10">
                <div class="lg:w-1/2">
                    <h4 class="font-medium text-[1.5rem]">Have a question in your mind?</h4>
                    <h1 class="font-semibold text-[2.8rem] text-primary">Get in touch with us</h1>
                    <div class="flex flex-col gap-6 mt-10">
                        <text-input placeholder="Name" />
                        <div class="flex flex-col lg:flex-row gap-6">
                            <text-input class="w-full" placeholder="Email" type="email"/>
                            <text-input class="w-full" placeholder="Phone" type="tel"/>
                        </div>
                        <text-area :rows="7" placeholder="Your Message..." />
                        <custom-button class="max-w-fit ml-auto" title="Send" />
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col gap-6">
                    <div class="w-full h-full min-h-[30vh]">
                        <contact-us-map class="w-full h-full min-h-[30vh]"/>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="rounded-md bg-primary p-4 flex items-center">
                            <div class="flex items-center gap-4">
                                <icons-location class="max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff]">Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015</p>
                            </div>
                        </div>
                        <div class="rounded-md bg-primary p-4 flex flex-col gap-4">
                            <nuxt-link to="tel:+918745945682" target="_blank" class="flex items-center gap-4 cursor-pointer">
                                <icons-phone class="max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff]">+91 87459 45682</p>
                            </nuxt-link>

                            <nuxt-link to="mailto:support@easycapital.co.in" target="_blank" class="flex items-center gap-4 cursor-pointer">
                                <icons-email class="shrink-0 max-w-[1.6rem]"/>
                                <p class="font-light text-[0.9rem] text-[#fff] break-words">support@easycapital.co.in</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>