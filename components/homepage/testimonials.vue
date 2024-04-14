<template>
    <div class="w-full pt-10 lg:pt-20 pb-20">
        <div class="container">
            <div class="flex flex-col items-center gap-6">
                <h2 class="w-full font-bold text-center text-[2.5rem]">Client Testimonials</h2>
                <p class="font-light lg:w-2/3 text-[1rem] text-center">
                    Here are few stories from our satisfied clients who have successfully secured loans with us. Whether it's for personal, business, or home needs, our clients rave about our efficient loan process, competitive rates, and exceptional customer service. Explore their experiences to see how Easy Capital can help you achieve your financial goals with confidence and ease                </p>
            </div>
            <div class="mt-8">
                <swiper :modules="[SwiperPagination]" :pagination="{clickable: true}" class="!py-10" :breakpoints="breakpoints">
                    <swiper-slide v-for="testimonial in testimonials" :key="testimonial.name">
                        <div class="bg-[#f3f3f3] rounded-md p-8 relative">
                            <icons-quote class="max-w-[3rem] absolute top-0 left-8 -translate-y-1/2 z-20"/>
                            <p class="font-light text-[#a0a0b4] italic text-[1rem]">
                                {{  testimonial.testimonial }}
                            </p>
                            <div class="max-w-fit mt-6 ml-auto">
                                <h2 class="text-[1rem]">- {{ testimonial.name }} <span class="text-[0.8rem]">({{  testimonial.place }})</span></h2>
                            </div>
                        </div>
                        
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            testimonials: [
                {name: 'Rahul Yadav', place: 'Kolkata', testimonial: 'Easy Capital made securing a loan for my car repair a breeze. The application was fast and the terms were fair, with exceptional customer service. I highly recommend their reliable lending services!'},
                {name: 'Abhisek Sinha', place: 'Kolkata', testimonial: 'Easy Capital made my dream of owning a home a reality. Their straightforward loan process and clear terms made everything stress-free. I highly recommend them for your home loan needs!'},
                {name: 'Nilesh Kumar', place: 'Mumbai', testimonial: 'The business loan process was efficient and transparent. Their flexible terms and helpful support allowed me to grow my business with confidence. I highly recommend them for entrepreneurs.'},
                {name: 'Seema R.', place: 'Chennai', testimonial: 'Easy Capital\'s business loan process was smooth and their competitive rates gave my business the boost it needed the most. I highly endorse them to other business owners and fellow companions.'},
                {name: 'Mahima Dewan', place: 'Gurgaon', testimonial: 'Easy Capital made getting a personal loan quick and hassle-free. Their simple application process and great rates helped me cover unexpected expenses. I wholeheartedly recommend their services.'},
            ],
            breakpoints: {
                0:{
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                768:{
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10
                },
                1024:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20
                }
            }
        }
    }
}
</script>