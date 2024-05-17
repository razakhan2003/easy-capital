<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script>
import {base_url} from "~/data/endpoints";
import Cookies from "js-cookie";
import axios from "axios";

export default{
  computed: {
    login(){
      return loginState().value;
    }
  },
  methods: {
    async getLoginDetails(){
      try{
        const token = Cookies.get("token");
        const res = await axios.get(`${base_url}/me`, {headers: {
          "Authorization": "Bearer " + token
        }});

        if(res.status === 200){
          const {name, userId} = res.data;
          this.login.logged_in = true;
          this.login.user_id = userId;
          const splitted_name = name.split(" ");
          this.login.user_initials = splitted_name?.at(0)?.charAt(0).toUpperCase() + (splitted_name?.at(1)?.charAt(0).toUpperCase() ?? '');
        }

      }catch(e){
        this.login.logged_in = false;
        console.log(e)
      }
    }
  },
  async mounted(){
    await this.getLoginDetails();
  }
}
</script>