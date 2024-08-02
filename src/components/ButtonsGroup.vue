<template>
  <div class="aufgabe">
    <h4>{{ title }}</h4>
    <div class="buttons-group">
      <b-button class="aufgabe-button" @click="getItem(buttons[0])"
        :variant="buttonItem === buttons[0] ? 'success' : 'outline-primary'">
        Egal
      </b-button>
      <b-button class="aufgabe-button" @click="getItem(buttons[1])"
        :variant="buttonItem === buttons[1] ? 'success' : 'outline-primary'">{{
      buttons[1] === 'low' ? 'Gering' : 'Ja' }}</b-button>
      <b-button class="aufgabe-button" @click=" getItem(buttons[2])"
        :variant="buttonItem === buttons[2] ? 'success' : 'outline-primary'">{{
      buttons[2] === 'high' ? 'Hoch' : 'Nein' }}</b-button>
    </div>
  </div>
</template>
{{ selectedRecipe.effort === 'low' ? 'Niedrig' : 'Hoch' }}
<script setup lang="ts">
import { ref } from "vue"
const props = defineProps<{
  title: string;
  buttons: (string | boolean)[];
  id: string;
  active: string | boolean;
}>();

const emit = defineEmits(['emitData'])

const buttonItem = ref<string | boolean>(props.active ?? '')

const getItem = (id: string | boolean) => {
  emit('emitData', { title: props.id, id })
  buttonItem.value = id
}
</script>

<style scoped>
h4 {
  margin-bottom: 1rem;
}

.buttons-group {
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.aufgabe-button {
  width: 30%;
}
</style>