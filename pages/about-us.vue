<template>
    <div class="py-20">
        <div class="container">
            <div class="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
                <div class="lg:w-1/2 flex flex-col justify-center gap-6">
                    <h1 class="font-bold text-[2rem] text-primary">Who We Are?</h1>
                    <p class="font-light text-[1rem]">
                        Welcome to Easy Capital Pvt. Ltd., the leading platform for business loans and commercial lending solutions. We specialize in connecting businesses with the financial support they need to grow, innovate, and succeed. Our mission is to make business financing straightforward, transparent, and accessible for entrepreneurs and companies of all sizes. Importantly, Easy Capital only partners with RBI-approved Non-Banking Financial Companies (NBFCs) and banks, ensuring that you receive the most reliable and compliant lending services.
                    </p>
                    <p class="font-light text-[1rem]">
                        In today's fast-paced business environment, securing capital can be a complex and time-consuming process. Whether you're looking to start a new venture, expand your existing business, or invest in new equipment, you need a reliable partner who understands your needs and can offer flexible financing options. At Easy Capital, we are that partner.
                    </p>
                    <p class="font-light text-[1rem]">
                        Our platform provides a seamless experience for businesses seeking loans. With our extensive network of trusted lenders, you can compare a wide range of business loan products tailored to your specific needs. We make it easy to evaluate interest rates, repayment terms, and other critical factors to ensure you find the best financing solution for your business.
                    </p>
                </div>
                <div class="bg-[#BFE0FF] py-20 lg:w-1/2 flex items-center">
                    <img src="/images/about-us.svg" alt="">
                </div>
            </div>
            <div class="mt-20 lg:mt-28 flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div class="bg-[#BFE0FF] lg:w-1/2 flex items-center">
                    <img src="/images/why-us.svg" alt="">
                </div>
                <div class="lg:w-1/2 flex flex-col gap-6">
                    <h1 class="font-bold text-[2rem] text-primary">Who Choose Easy Capital?</h1>
                    <div class="flex flex-col gap-6">
                        <div v-for="(c, index) in choose_us" class="flex flex-col gap-4">
                            <div class="flex gap-4 items-center">
                                <div class="h-[2rem] w-[2rem] rounded-full p-2 bg-primary 
                                text-[#fff] font-semibold text-[1.2rem] flex justify-center items-center">
                                    {{ index + 1 }}
                                </div>
                                <span class="text-[1.2rem] font-medium">{{ c.title }}</span>
                            </div>
                            <p class="font-light text-[1rem]">
                                {{ c.description }}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="mt-10">
                <p class="font-medium italic text-[1.2rem]">"Thank you for choosing Easy Capital as your trusted partner for business financing. We're here to help your business thrive. If you have any questions or would like to start comparing business loans, please don't hesitate to contact us. Let's take your business to new heights together."</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            choose_us: [
                {title: "Comprehensive Business Loan Comparison", description: "We work with a diverse array of reputable lenders, offering various business loan products. Whether you need a working capital loan, equipment financing, or a commercial real estate loan, we have the resources to help you find the perfect match."},
                {title: "User-Friendly Interface", description: "Our platform is designed for ease of use, allowing you to quickly compare loan options and apply online. We eliminate the guesswork and confusion often associated with business financing."},
                {title: "Expert Advice and Support", description: "Our team of loan experts is dedicated to helping you navigate the lending process. We offer personalized guidance and support to ensure you understand your options and make informed decisions."},
                {title: "Secure and Confidential", description: "At Easy Capital, we prioritize the security and confidentiality of your business information. We use state-of-the-art encryption technology to protect your data, so you can explore your loan options with confidence."},
                {title: "Customer-Focused Approach", description: "We believe in building strong relationships with our clients. Our commitment to exceptional customer service means that we're always available to answer your questions and provide assistance, even after you've secured your business loan."},
            ]
        }
    }
}
</script>