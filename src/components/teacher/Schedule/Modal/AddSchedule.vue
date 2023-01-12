<template>
    <div class="q-gutter-sm">
      <q-dialog v-model="parentData.show_add_schedule_modal" :persistent="true">

        <q-card style="width: 800px; max-width: 80vw;" class="q-pa-md">
            <q-card-section>
                <div class="text-h5"><q-icon name="event" /> Add Schedule</div>
            </q-card-section>

            <q-separator />

            <q-form @submit="saveSched" ref="add_sched_form" greedy>
                <q-card-section>
                    <div class="row">
                        <div class="col-12 col-md-6 q-pa-sm">
                            <q-input label="Start Date & Time: *" type="datetime-local" v-model="date_from" stack-label  :rules="[val => !!val || 'Field is required']" />
                        </div>
                        <div class="col-12 col-md-6 q-pa-sm">
                            <q-input label="End Date & Time: *" type="datetime-local" v-model="date_to" stack-label disable :rules="[val => !!val || 'Field is required']" />
                        </div>
                        <div class="col-12 q-pa-sm">
                            <q-input label="Lesson: " v-model="lesson" type="text"  :rules="[val => !!val || 'Field is required']" />
                        </div>
                        <div class="col-12 q-pa-sm">
                            <q-input label="Additional Remarks (optional): " v-model="remarks" type="textarea" />
                        </div>
                    </div>
                </q-card-section>

                <q-separator />
                
                <q-card-section class="text-right">
                    <q-btn label="SAVE" icon="save" color="primary" type="submit"/>
                    <q-btn label="CANCEL" @click="closeModal" icon="close" color="red" class="q-mx-sm" />
                </q-card-section>
            </q-form>
        </q-card>
      </q-dialog>
    </div>
</template>

<script>
    export default {
        data: ()=>({
            date_from: null,
            date_to: null,
            lesson: "",
            remarks: "",

        }),
        computed:{
            parentData(){
                return this.$parent.$parent;
            },
            today(){
                return new Date().toJSON().slice(0,10).replace('-', '/').replace('-', '/');
            },
        },
        watch:{
            date_from(newVal, oldVal){
                if(newVal){
                    let d2 = new Date(newVal);
                    d2.setMinutes(new Date(newVal).getMinutes() + 30);
                    let year = d2.getFullYear();
                    let month = d2.getMonth() + 1 < 10 ? "0" + (d2.getMonth() + 1) : d2.getMonth() + 1;
                    let date = d2.getDate() < 10 ? "0" + d2.getDate() : d2.getDate();
                    let converted_date = `${year}-${month}-${date}T${d2.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12:false}).substring(0, 5)}`;

                    this.date_to = converted_date;
                }
            }
        },
        mounted(){
            
        },
        methods: {
            saveSched(){
                let current_list = JSON.parse(localStorage.getItem('_schedules'));
                

            },
            closeModal(){
                this.parentData.show_add_schedule_modal = false;
            },
        }

    }
</script>