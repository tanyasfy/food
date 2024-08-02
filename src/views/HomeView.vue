<script setup lang="ts">
import ChooseComponent from '@/components/ChooseComponent.vue'
import Results from '@/components/Results.vue'
import { ref } from 'vue'
import { type Aufgabe } from '@/types/emitValue.ts'

const isChooseComponent = ref<boolean>(true)

const selection = ref<Aufgabe | undefined>(undefined)

const getValue = (value: any) => {
  selection.value = value;
  isChooseComponent.value = false;
}

const showMain = (v: boolean) => {
  isChooseComponent.value = v
}
</script>

<template>
  <main>
    <div v-if="isChooseComponent">
      <ChooseComponent @onWeiter="(value) => getValue(value)" />
    </div>

    <div v-else>
      <Results :selectedCriteria="selection" @onBack="value => showMain(value)" />
    </div>

  </main>
</template>
