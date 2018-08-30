<template>
    <div>
        <b-modal id="modal1" title="Bootstrap-Vue" ref="modal">
            <p class="my-4">Hello from modal!</p>
            <div slot="modal-footer" class="w-100">
                <router-link to="/users">
                    <b-btn size="sm" class="float-right" variant="primary">
                        Close
                    </b-btn>
                </router-link>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$refs.modal.show()
        }
    }
</script>

