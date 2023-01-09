<template>
    <div
      class="page-header"
      style="background: url('~assets/img/upper-bg.png') contain; height: 85vh;"
    >
      <div class="flex flex-center align-content-center q-pa-xl">
        <q-form @submit.prevent="signIn" method="POST" ref="login_form" style="width: 500px;">
            <q-card class="q-pa-xl">
                <div class="text-h6 shadow-2">
                    Login Form
                </div>

                <div class="q-py-sm q-mt-lg">
                    <q-input 
                    color="blue-12" 
                    bottom-slots 
                    v-model="email" 
                    label="Email Address" 
                    :rules="[val => !!val || 'Field is required']">
                        <template v-slot:prepend>
                            <q-icon name="email" />
                        </template>
                    </q-input>
                </div>
                <div class="q-py-sm">
                    <q-input 
                        color="blue-12" 
                        bottom-slots 
                        :type="!is_visible_password ? 'password' : 'text'"
                        v-model="passwd" 
                        label="Password" 
                        :rules="[val => !!val || 'Field is required']">
                        <template v-slot:prepend>
                            <q-icon name="key" />
                        </template>
                        <template v-slot:append>
                            <q-icon :name="is_visible_password ? 'visibility' : 'visibility_off'"  @click="is_visible_password = !is_visible_password" :clickable="true" />
                        </template>
                    </q-input>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <q-btn
                            color="blue-13"
                            class="shadow-2 w-100 q-pa-sm q-my-md"
                            label="sign in"
                            type="submit"
                        />
                        <p class="text-center">
                            <br />
                            <a href="#" class="text-grey">Forgot password?</a>
                            <br />
                            Don't have an account yet, <a href="#">register</a>
                        </p>
                    </div>
                </div>
            </q-card>
        </q-form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "IndexPage",
    data: () => ({
        email: "",
        passwd: "",
        is_visible_password: false,
        slide: 1,
    }),
    methods: {
        async signIn(){
            if(!await this.$refs.login_form.validate()){
                return false;
            }
            this.$router.push({name: 'dashboard'});
        }
    }
  };
  </script>
  