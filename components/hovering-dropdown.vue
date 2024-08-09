<template>
  <div @click="" class="group relative cursor-pointer">
    <div class="flex items-center gap-4 lg:gap-2">
      <slot />
      <span
        v-if="arrow"
        class="text-[1.5rem] rotate-[-90deg] group-hover:rotate-[90deg] group-hover:text-primary duration-[200ms]"
        >&#8249;</span
      >
    </div>

    <div
      :class="alignment === 'right' ? 'lg:right-0' : ''"
      class="bg-[#fff] font-medium z-[20] hidden group-hover:block lg:absolute whitespace-nowrap py-1 px-4 lg:border-2 border-[#dcdcdc] rounded-xl text-[0.9rem] text-slate-700"
    >
      <li class="my-3" v-for="item in items" :key="item.name">
        <template v-if="item.name === `Business Loan`">
          
          <button
            class="flex justify-between items-center w-full"
            @click="toggleDiv"
          >
            {{ item.name }}
            <span
              :class="{
                'rotate-[270deg] text-primary': isVisible,
                'rotate-180': !isVisible,
              }"
              class="inline-block transition-transform duration-300 text-2xl"
              >&#8249;</span
            >
          </button>
          <div v-if="isVisible">
            <div
              class="my-4 text-primary hover:text-[black]"
              v-for="(ele, index) in item.list"
              :key="index"
            >
              <nuxt-link
                class="text-md"
                :to="ele.route"
                @click="$emit('close')"
                >{{ ele.type }}</nuxt-link
              >
            </div>
          </div>
        </template>
        <nuxt-link v-else :to="item.route" @click="$emit('close')">{{
          item.name
        }}</nuxt-link>
      </li>
      <slot name="additional"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "HoveringDropdown",
  emits: ["close"],
  props: {
    items: {
      type: Array,
      default: [],
    },
    alignment: {
      type: String,
      default: "",
    },
    arrow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleDiv() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
li > a {
  transition: border 0.3s;
}

li > a:hover {
  color: #4285f4;
}
</style>
