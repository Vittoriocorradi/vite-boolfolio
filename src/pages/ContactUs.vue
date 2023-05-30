<script>
export default {
    name: 'ContactUs',
    data() {
        return {
            dataForm: {
                name: '',
                email: '',
                message: ''
            }
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
            <form submit.prevent="sendContact">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="dataForm.name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="dataForm.email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="message" rows="3" v-model="dataForm.message"></textarea>
                </div>
                <button class="btn btn-primary">Send your message</button>
            </form>
        </div>
    </main>
</template>