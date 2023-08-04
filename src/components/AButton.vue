<script setup>
    defineProps({
        title: String
    })
</script>
        <template >
            <div>
                <button type="button" class="btn btn-success">{{ title }}</button>
            </div>
        </template>