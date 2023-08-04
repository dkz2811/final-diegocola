<script setup>

const emit = defineEmits(['getSelectedItem'])
      const props = defineProps({
        button: String,
        id: String,
        picture: String,
        price: Number,
        model:String,
        stock:Number,
        brand:String,
        specs: String,
      })
      const SubmitEvent =()=>{    
          if(props.button === "Add to Cart")
          {
            let item = { id: props.id,
                         model: props.model, 
                         price: props.price
                        }
            emit('getSelectedItem', item)
          }
          if (props.button === 'Modify'){
            let item = { 
              id: props.id, 
              model: props.model,
              price: props.price,
              picture: props.picture,
              stock: props.stock,
              brand: props.brand,
              specs: props.specs
            }
              emit('getSelectedItem', item)
            }
          }
    </script>
<template >
  <div class="card mb-2">
    <div class="card-body" >
      <h5 class="card-title">{{ props.model }}</h5>
      <img class="card-img-top" :src="props.picture" :alt="props.model">
      <p class="text-start" > Price: ${{ props.price }}</p>
      <div>
        <p class="text-start" v-if="props.stock > 0"> Stock: {{ props.stock }}</p>
        <p class="text-start text-danger" v-else > Out of stock</p>
        <p class="text-start" v-if="props.button === 'Modify'">ID: {{ props.id }}</p>
      </div>
      <button class="btn btn-success mt-3" :disabled="props.stock < 1 && button !== 'Modify' ? true : false" @click="SubmitEvent">{{props.button}}</button>
      <div >
        <ul class="list-group list-group-flush" v-for="(spec, i) in props.specs.split(',')" :key="i">
          <li class="list-group-item">{{ spec }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 5px 5px 0 0;
  width: auto;
  max-width: 9rem;
  height: auto;
  max-height: 12rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */ 
  max-height: 95rem;
  min-height: 15rem;
  width: 16rem;
  height: 66rem;
}
</style>