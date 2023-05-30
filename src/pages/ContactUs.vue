<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'ContactUs',
    data() {
        return {
            store,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        sendContact() {
            const data = {
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message,
            };

            axios.post(`${this.store.apiBaseUrl}/contacts`, data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>

<template>
    <main class="pt-4">
        <div class="container">
            <h1>Contact Us</h1>
            <div class="my-4">Tell us what you think!</div>
            <hr>
            <form @submit.prevent="sendContact">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="formData.name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="message" rows="3" v-model="formData.message"></textarea>
                </div>
                <button class="btn btn-primary">Send your message</button>
            </form>
        </div>
    </main>
</template>