import * as API from '@/api';
import {toMakeAppointmentWithADoctor} from "@/api";

export default {
    namespaced: true,
    state: {
        doctors: []
    },
    actions: {
        getDoctorsList({ commit }) {
            API.getDoctorsList().then(response => commit('SET_DOCTORS_LIST', response.data))
        },
        toMakeAppointmentWithADoctor({ commit }, appointment) {
            API.toMakeAppointmentWithADoctor(appointment).then(response => console.log(response))
        }
    },
    mutations: {
        SET_DOCTORS_LIST(state, doctorsList) {
            state.doctors = doctorsList
        }
    }
}