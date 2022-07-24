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

        <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-3" :aria-describedby="ariaDescribedby">
                <b-form-checkbox class="pt-4"  value='true'>&nbsp;post instantly</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
        <div class="form-footer">
            <!-- <b-button squared>Close</b-button> -->
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

export default {
    name: 'NewsAddForm',
    props: {
        id: String,
        title: String,
        date: String,
        author: String,
        text: String,
        likes: String
    },
    data(){
        return {
            form:{
                id: this.id,
                title: this.title,
                date: this.date,
                author: this.author,
                text: this.text,
                likes: this.likes,
                checked: false
            }
        }
    },
    methods: {
        ...mapMutations(["editItem"]),
        onSubmit(event) {
            event.preventDefault()
            console.log(
                `form: `,
                this.form.id,
                this.form.title,
                this.form.date,
                this.form.author,
                this.form.text,
                this.form.ckecked,
                this.form.likes
            )
            this.editItem({
                id: this.form.id,
                title: this.form.title,
                date: this.form.date,
                author: this.form.author,
                text: this.form.text,
                checked: this.form.ckecked,
                likes: this.form.likes
            })
        },
        onReset(event) {
            event.preventDefault()
            this.form.title = ''
            this.form.text = ''
            this.form.checked = false
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
