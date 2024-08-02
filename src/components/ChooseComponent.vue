<template>
  <b-card class="home-view">
    <div class="main-section">
      <ButtonsGroup title="Aufwand" :buttons="buttons1" id="effort" :active="aufgabe.effort"
        @emitData="value => getValue(value)" />
      <ButtonsGroup title="Preis" :buttons="buttons1" id="cost" :active="aufgabe.cost"
        @emitData="value => getValue(value)" />
      <ButtonsGroup title="Vegetarisch" :buttons="buttons2" id="veggie" :active="aufgabe.veggie"
        @emitData="value => getValue(value)" />
    </div>

    <div class="buttons-footer">
      <b-button variant='info'>Reset</b-button>
      <b-button variant="success" @click="getRezept()">Weiter</b-button>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import ButtonsGroup from '@/components/ButtonsGroup.vue'
import { ref, type PropType } from 'vue'
import { type EmitValue, type Aufgabe } from '@/types/emitValue.ts'

const props = defineProps({
  aufgabe: {
    type: Object as PropType<Aufgabe>,
    required: true
  }
})


const emit = defineEmits(['onWeiter'])

const buttons1 = ["Egal", "low", "high"]
const buttons2 = ["Egal", true, false]

const aufgabe = ref<Aufgabe>(props.aufgabe)

const getValue = (value: EmitValue) => {
  console.log(value)
  const key = value.title.toLowerCase();
  if (key in aufgabe.value) {

    aufgabe.value[key] = value.id
  }
}

const getRezept = () => {
  emit('onWeiter', aufgabe.value)
}
</script>

<style scoped>
.main-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
}

.buttons-footer {
  width: 40%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}
</style>