<template>
<div>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Title:" label-for="input-1">
            <b-form-input
                id="input-title"
                v-model="form.title"
                type="text"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group class="pt-3" id="input-group-2" label="Description:" label-for="input-2">
            <b-form-input
                id="input-text"
                v-model="form.text"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-checkbox
            id="checkbox-1"
            v-model="form.instantly"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
        >
        &nbsp;post instantly
        </b-form-checkbox>

        <div class="form-footer">
            <div></div>
           
            <div class="form-footer-reset">
                <b-button type="reset" variant="link" class="button-edit">
                    <b-icon icon="arrow-clockwise" color="grey" font-scale="2"></b-icon>
                </b-button>
                <b-button squared variant="success" type="submit">Submit</b-button>
            </div>
        </div>
    </b-form>
</div>
</template>

<script>
import { mapMutations } from "vuex";
import moment from "moment"

export default {
    name: 'NewsAddForm',

    data() {
        return {
            form: {
                title: '',
                author: 'test',
                text: '',
                likes: '0',
            },
            instantly: false
        }
    },
    methods: {
        ...mapMutations(["addItem"]),
        onSubmit(event) {
            event.preventDefault()

            this.addItem({
                id: Date.now(),
                title: this.form.title,
                date: moment().format('DD/MM/YYYY h:mm a'),
                author: this.form.author,
                text: this.form.text,
                likes: this.form.likes,
            })
        },
        onReset(event) {
            event.preventDefault()
            this.form.title = ''
            this.form.text = ''
        }
    }
}
</script>

<style scoped>
.form-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
}
.form-footer-reset{
    display: flex;
    align-items: center;
}
</style>
