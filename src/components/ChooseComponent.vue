<template>
  <b-card class="home-view">
    <div class="main-section">
      <ButtonsGroup title="Aufwand" :buttons="buttons1" id="effort" :active="selection.effort"
        @emitData="value => getValue(value)" />
      <ButtonsGroup title="Preis" :buttons="buttons1" id="cost" :active="selection.cost"
        @emitData="value => getValue(value)" />
      <ButtonsGroup title="Vegetarisch" :buttons="buttons2" id="veggie" :active="selection.veggie"
        @emitData="value => getValue(value)" />
    </div>

    <div class="buttons-footer">
      <b-button variant='info' @click="reset()">Reset</b-button>
      <b-button variant="success" @click="getRezept()">Weiter</b-button>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import ButtonsGroup from '@/components/ButtonsGroup.vue'
import { ref } from 'vue'
import { type Aufgabe } from '@/types/emitValue.ts'

const emit = defineEmits(['onWeiter', 'onReset'])

const buttons1 = ["Egal", "low", "high"]
const buttons2 = ["Egal", true, false]

const selection = ref<Aufgabe>({
  effort: 'Egal',
  cost: 'low',
  veggie: true
})

const getValue = (value: { title: string; id: any }) => {
  const key = value.title.toLowerCase();
  if (key in selection.value) {

    selection.value[key] = value.id
  }
}

const getRezept = () => {
  emit('onWeiter', selection.value)
}

const reset = () => {
  selection.value = {
    effort: 'Egal',
    cost: 'Egal',
    veggie: 'Egal'
  }
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