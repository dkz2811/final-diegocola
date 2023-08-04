<script setup>
    defineProps({
        title:{
            typeof:String, 
            required:true,
            default:"Label"
        },
        value:{ type:Number,
            required:false, 
        }
        })
    </script>
        <template>
            <div>
                <span>{{ title }} {{ value }}</span>
            </div>
        </template>