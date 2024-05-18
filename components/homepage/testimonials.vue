<template>
    <div class="w-full pt-10 lg:pt-20 pb-20">
        <div class="container">
            <div class="flex flex-col items-center gap-6">
                <h2 class="w-full font-bold text-center text-[2.5rem]">Success Stories</h2>
                <p class="font-light lg:w-2/3 text-[1rem] text-center">
                    Here are few stories from our satisfied clients who have successfully secured loans with us. Our clients rave about our efficient loan process, competitive rates, and exceptional customer service. Explore their experiences to see how Easy Capital can help you achieve your financial goals with confidence and ease                
                </p>
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
                {name: 'Arvind Shah', place: 'Bihar', testimonial: "As a small business owner, securing a loan can be a daunting task. Easy Capital made it simple and stress-free. The platform allowed me to compare rates from various RBI-approved lenders, and I found a great deal that suited my business's needs. The customer service was exceptional, guiding me through each step of the process. I couldn't be happier with my experience!"},
                {name: 'Eashan', place: 'Bihar', testimonial: "I was looking for a loan to expand my manufacturing business, but I didn't know where to start. Easy Capital came to the rescue. The platform was easy to use, and I appreciated the range of options from reputable NBFCs and banks. The team at Easy Capital provided excellent advice, helping me choose the best loan for my business. Thanks to them, my business is now thriving."},
                {name: 'Pratap Kumar Roy', place: 'Telangana', testimonial: "Easy Capital is a game-changer! I was struggling to find a loan that matched my business's growth plans, but with Easy Capital, I could easily compare multiple offers from trusted lenders. Their transparent approach and focus on RBI-approved financial institutions gave me peace of mind. The application process was quick and efficient, and I received my loan in record time."},
                {name: 'Prakash S', place: 'Uttar Pradesh', testimonial: "After searching for weeks to secure a business loan, I stumbled upon Easy Capital, and I'm so glad I did. The platform made comparing loans from different banks and NBFCs straightforward, and the customer support team was always ready to assist. With their help, I got the perfect loan to renovate my restaurant. I highly recommend Easy Capital to any business owner looking for reliable loan options."},
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