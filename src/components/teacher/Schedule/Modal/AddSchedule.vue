<template>
    <div class="q-gutter-sm">
      <q-dialog v-model="parentData.show_add_schedule_modal" :persistent="true">

        <q-card style="width: 800px; max-width: 80vw;" class="q-pa-md">
            <q-card-section>
                <div class="text-h5"><q-icon name="event" /> Add Schedule</div>
            </q-card-section>

            <q-separator />

            <q-form @submit="saveSched" ref="add_sched_form">
                <q-card-section>
                    <div class="row">
                        <div class="col-12 col-md-12 q-pa-sm">
                            <label>Start Date</label>
                        </div>
                        <div class="col-12 col-md-6 q-pa-sm">
                            <q-date v-model="date_from" mask="YYYY-MM-DD HH:mm" color="blue" />
                        </div>
                        <div class="col-12 col-md-6 q-pa-sm">
                            <q-time v-model="date_from" mask="YYYY-MM-DD HH:mm" color="blue" />
                        </div>
                        <div class="col-12 col-md-4 q-pa-sm">
                            <q-input label="Date To *" type="datetime-local" v-model="date_to" stack-label disable  :rules="[val => !!val || 'Field is required']" />
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
                    this.date_to = d2.toLocaleDateString();
                }
            }
        },
        mounted(){
            
        },
        methods: {
            saveSched(){
                let current_list = localStorage.getItem('_schedules');
                console.log(this.date_from);

            },
            closeModal(){
                this.parentData.show_add_schedule_modal = false;
            },
        }

    }
</script>