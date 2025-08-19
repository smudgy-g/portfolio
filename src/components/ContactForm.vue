<template>
    <form id="contact-form" class="grid gap-y-3" @submit.prevent="submitForm">
        <label for="name">
            Name:
            <input type="text" name="name" id="name" />
            <p v-if="errors?.name" class="mt-1 text-red-700">
                {{ errors?.name.join(', ') }}
            </p>
        </label>

        <label for="email">
            Email:
            <input type="text" name="email" id="email" />
            <p v-if="errors?.email" class="mt-1 text-red-700">
                {{ errors?.email?.join(', ') }}
            </p>
        </label>

        <label for="message">
            Message:
            <textarea name="message" id="message" rows="8"></textarea>
        </label>

        <button type="submit" class="button ml-auto">Send</button>
    </form>

    <p class="">{{ errors && errors?.message }}</p>
</template>

<script setup lang="ts">
import { actions, isInputError } from 'astro:actions';
import { ref } from 'vue';

const result = ref();
const errors = ref();

async function submitForm(event: Event) {
    errors.value = [];
    const formData = new FormData(event.target as HTMLFormElement);

    try {
        const res = await actions.contact(formData);
        if (res.error) throw res.error;

        result.value = res.data;
    } catch (error) {
        if (isInputError(error)) {
            errors.value = error.fields;
        } else {
            errors.value = error;
        }
    }
}
</script>
