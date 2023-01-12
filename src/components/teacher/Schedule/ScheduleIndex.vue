<template>
    <div>
        <q-card class="shadow-2" bordered dense>
            <q-card-section class="bg-blue-14 text-white">
                <q-item>
                    <q-item-section>
                      <q-item-label class="text-h4"><q-icon name="calendar_today"></q-icon> Schedule</q-item-label>
                      <!-- <q-item-label>Sample text</q-item-label>
                      <q-item-label caption>Sample Caption</q-item-label> -->
                    </q-item-section>
            
                    <q-item-section side>
                        <q-btn label="add schedule" @click="show_add_schedule_modal = true" icon="edit_calendar" glossy color="light-blue" class="text-white" />
                    </q-item-section>
                  </q-item>
            </q-card-section>

            <q-separator />

            <q-card-section>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="q-pa-md">
                            <div class="q-gutter-md row items-start">
                                <q-date v-model="selected_date" class="w-100" flat bordered />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="q-pa-md">
                            <q-list bordered padding>
                                <q-item>
                                  <q-item-section>
                                    <q-item-label overline>Schedule</q-item-label>
                                    <!-- <q-item-label>Sample text</q-item-label>
                                    <q-item-label caption>Sample Caption</q-item-label> -->
                                  </q-item-section>
                          
                                  <q-item-section side top>
                                    <q-item-label caption>{{ selected_date }}</q-item-label>
                                  </q-item-section>
                                </q-item>
                          
                                <q-separator spaced />
                                <!-- <q-item-label header>List Header</q-item-label> -->
                                <div v-if="current_schedules.length > 0">
                                    <div v-for="(item, key) in current_schedules" :key="key">
                                        <q-item>
                                            <q-item-section avatar>
                                                <!-- <q-icon name="open" color="red" text-color="white" icon="active" /> -->
                                                <q-toggle
                                                    v-model="item.is_closed"
                                                    label=""
                                                    color="light-blue"
                                                    />
                                            </q-item-section>
                                            <q-item-section>{{ item.time_from }} - {{ item.time_to }} </q-item-section>
                                            <q-item-section side>
                                                <q-item-label caption>{{item.lesson}}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                        <q-separator spaced inset="item" />
                                    </div>
                                </div>
                                <q-item v-else class="text-grey">
                                    no data found.
                                </q-item>
                              </q-list>
                        </div>
                    </div>
                </div>
            </q-card-section>
            <modal-add-schedule ref="add_schedule_modal" />
        </q-card>
    </div>
</template>

<script>
    import AddSchedule from './Modal/AddSchedule.vue';
    export default {
        name: "schedule_index",
        components: {
            modalAddSchedule: AddSchedule,
        },
        data: () => ({
            title: "SCHEDULE",
            show_add_schedule_modal: false,
            selected_date: null,
            sched_col: [
                { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
                { name: 'time_from', align: 'center', label: 'From', field: 'time_from', sortable: true },
                { name: 'time_to', align: 'center', label: 'To', field: 'time_to', sortable: true },
            ],
            schedules: [
                {
                    id: 1,
                    time_from: "07:00 PM",
                    time_to: "08:00 PM", 
                    lesson: "LESSON 1: Learning Alphabets",
                    is_closed: false,
                    date: new Date().toJSON().slice(0,10).replace('-', '/').replace('-', '/'),
                },
                {
                    id: 2,
                    time_from: "09:00 PM",
                    time_to: "10:00 PM", 
                    lesson: "LESSON 2: Lorem Ipsum",
                    is_closed: false,
                    date: new Date().toJSON().slice(0,10).replace('-', '/').replace('-', '/'),
                },
                {
                    id: 3,
                    time_from: "11:00 PM",
                    time_to: "12:00 PM", 
                    is_closed: true,
                    lesson: "LESSON 3: Dolor set Amet",
                    date: new Date().toJSON().slice(0,10).replace('-', '/').replace('-', '/'),
                }
            ],
            current_schedules: [],
        }),
        computed: {
            today(){
                return new Date().toJSON().slice(0,10).replace('-', '/').replace('-', '/');
            }
        },
        watch: {
            selected_date(newVal, oldVal){
                if(newVal){
                    this.current_schedules = this.schedules.filter((item) => {
                        return item.date == newVal;
                    });
                }
            },
        },
        mounted(){
            this.selected_date = this.today;
        },
    }
</script>