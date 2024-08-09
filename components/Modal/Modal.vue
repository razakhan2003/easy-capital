<template>
  <div class="absolute h-screen z-10 opacity-70 inset-0" :class="isOpen?'bg-primary':'bg-transparent'"></div>
    <transition name="fade">
      <div
        v-show="isModalVisible"
        class="absolute left-0 right-0 ml-auto mr-auto w-2/3 z-10 md:w-1/2 border border-primary rounded-xl p-5 bg-white"
      >
        <div v-for="(detail, index) in details" class="mt-5" :key="index">
          <div>
            <p class="text-xl font-bold">{{ detail.mainHeading }}</p>
            <button @click="toggleShowMore(index)" class="text-primary">
              {{ showMore[index] ? "Show less" : "Show more" }}
            </button>
            <div
              :style="[
                showMore[index]
                  ? 'height:10rem; overflow-y:scroll'
                  : 'height:0',
              ]"
            >
              <div
                v-for="(content, index) in detail.contents"
                :key="index"
                v-if="showMore[index]"
                class="mt-4"
              >
                <p>
                  <span class="font-bold"
                    >{{ index + 1 }}. {{ content.subHeading }}:</span
                  >
                  {{ content.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          @click="$router.push('/apply-now')"
          class="mt-4 text-xl font-bold underline hover:text-primary cursor-pointer"
        >
          Register/Apply for Loan
        </button>
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            @click="onToggle"
            class="mb-2 md:mb-0 bg-primary border border-primbg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      showMore: [false, false, false, false],
      details: [
        {
          mainHeading: "Features Of Business Loan.",
          contents: [
            {
              subHeading: "Collateral-Free",
              description:
                "Business loans are usually not secured by collateral as opposed to other loans. If you do not own assets equal to the value of the obtained loan amount, you can still raise capital for your business immediately. Consequently, these loans make funding and sustaining small businesses easier.",
            },
            {
              subHeading: "Competitive Interest Rates",
              description:
                "Most business owners believe that a business loan comes with a high interest rate and creates a financial burden. Truthfully, many good financial institutions offer interest rates below the industry average.",
            },
            {
              subHeading: "Quick Approvals",
              description:
                "Delays, especially those caused by insufficient funding, can negatively impact business profits. Almost all lenders offer quick approvals for their business loans to ensure you never encounter this problem.",
            },
            {
              subHeading: "The Convenience Of Online Transactions",
              description:
                "Small business loans offer the convenience of an online application process. It allows you to access capital from the comfort of your home. With IIFL Finance, you can apply for a business loan in four simple steps, receive instant approval, and have your funds credited immediately.",
            },
            {
              subHeading: "Extended Loan Tenure",
              description:
                "The EMIs on your loans should never drain your working capital reserves or profits. With a business loan, you can choose a flexible repayment schedule based on your business's cash flow.",
            },
            {
              subHeading: "Simplified Documentation Process",
              description:
                "Many lenders require only essential documents to commence loan processing and minimize delays. This business loan feature makes it easy to obtain capital quickly.",
            },
          ],
        },
        {
          mainHeading: "Process of getting business loans.",
          contents: [
            {
              subHeading: "Identify the different loan types",
              description:
                "It is good to know what type of business loans are available and their terms and conditions. Based on the business size and specific requirements, applicants can choose from a variety of MSME and SME loans or working capital loans. It can even be a machinery loan if the business owner’s primary goal is to purchase equipment for expansion.While term loans are best for large-scale business expansion, a line of credit may be ideal for meeting daily operational costs. Borrowers can start off with microloans for smaller cash requirements. Those with bad credit or no credit history may have to look for secured loans that require collateral.",
            },
            {
              subHeading: "Choose the lender and the application medium",
              description:
                "Once applicants have a clear idea about the type of loan that best suits them, decide the lender. In India, there are several business loan providers. A critical analysis of a lender’s loan terms and eligibility criteria can be of great help. Loan approval takes time. But those needing quick money can choose to go online. Others who are not comfortable online, can choose to visit the lender’s branch with the required documents and a duly signed application form.",
            },
            {
              subHeading: "Check credit score",
              description:
                "Lenders prefer applicants with a good credit history and a credit score above 700. A negative credit history reflecting late or missed payments can be a warning for lenders. Those with a poor credit score can think of alternative lending solutions and also focus on rebuilding them.",
            },
            {
              subHeading: "Loan application form",
              description:
                "Applicants must treat every step of the loan application with the utmost care. Since lenders cross-verify every small information about the applicant, it is sensible to be true and precise about every detail.",
            },
            {
              subHeading: "Prepare a business plan",
              description:
                "The applicant must submit a detailed business plan along with the loan application. The business plan should clearly state the firm’s purpose, past business track records and future ambitions. It should also specify the purpose of the loan. In other words, the borrowers must tell the lender what the loan is for and how they plan to use the money.",
            },
          ],
        },
        {
          mainHeading: "Benefits of getting loans from us.",
          contents: [
            {
              subHeading: "Flexible Use",
              description:
                "Personal loan companies rarely place restrictions on how you can use the money. This means the list of purposes for a personal loan is nearly endless, and you can even apply for funding if you’re undecided on how you’ll use the cash",
            },
            {
              subHeading: "Lump-Sum Funding",
              description:
                "Unlike lines of credit and credit cards, personal loans give you a lump sum of money upfront that you can use however you want. This is a major benefit for many borrowers.",
            },
            {
              subHeading: "Fast Funding",
              description:
                "Some of the best personal loan companies provide funding as soon as the day you apply, whereas others will transfer your loan funds to your bank account within a few business days at most. This may be important to you if you need cash quickly for any reason, particularly if you are ready to move forward with a major purchase or have unpaid bills to take care of.",
            },
            {
              subHeading: "Positive Credit Score Impact",
              description:
                "You may get a hard inquiry placed on your credit reports when you apply for a personal loan, which can temporarily lower your score. But using the personal loan responsibly can help build your credit score in the long-term. As you make on-time payments, you can prove you are a responsible borrower as you raise your credit score. Payment history is the most important factor of a FICO score.",
            },
            {
              subHeading: "Higher Borrowing Limit Than a Credit Card",
              description:
                "Personal loans typically provide 1,50,000 INR to 42,00,000 INR, although some personal loan companies offer funding up to 84,00,000 INR. You’ll generally need a sufficient employment history, income, and credit score to qualify for higher loan amounts.",
            },
          ],
        },
      ],
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    toggleShowMore(index) {
      this.showMore[index] = !this.showMore[index];
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bg-black {
  background-color: black;
}

.bg-white {
  background-color: white;
}
.text-white {
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
