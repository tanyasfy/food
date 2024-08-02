<template>
  <b-card :title="selectedRecipe?.name ?? 'Keine passenden Rezepte gefunden'" :img-src="selectedRecipe?.image"
    img-alt="Image" img-top style="width: 30rem;" class="mb-2">


    <div class="details">
      <p>Aufwand: {{ selectedRecipe?.effort === 'low' ? 'Niedrig' : 'Hoch' ?? 'N/A' }}</p>
      <p>Kosten: {{ selectedRecipe?.cost === 'low' ? 'Niedrig' : 'Hoch' ?? 'N/A' }}</p>
      <p>Vegetarisch: {{ selectedRecipe?.veggie ? 'Ja' : 'Nein' ?? 'N/A' }}</p>
      <h3>Einkaufsliste</h3>
      <ul>
        <li v-for="item in selectedRecipe?.ingredients" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="actions">
      <b-button variant="info" @click="back()">Zurück</b-button>
      <b-button variant="success" @click="randomize()">Randomize</b-button>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { type PropType, ref } from "vue";
import { type Recipe, type Aufgabe } from '@/types/emitValue.ts'
import data from '@/assets/data'

const props = defineProps({
  selectedCriteria: {
    type: Object as PropType<Aufgabe>,
    required: false
  }
})

const emit = defineEmits(['onBack'])

const selectedRecipe = ref<Recipe>()

function randomize() {
  if (props.selectedCriteria) {

    const { effort, cost, veggie } = props.selectedCriteria;

    const filteredRecipes = data.filter((recipe: Recipe) => {
      return (
        (effort === 'Egal' || recipe.effort === effort) &&
        (cost === 'Egal' || recipe.cost === cost) &&
        (veggie === 'Egal' || recipe.veggie === veggie)
      );
    });

    if (filteredRecipes.length > 0) {
      selectedRecipe.value = filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
    }
  } else {
    selectedRecipe.value = {
      name: 'Keine passenden Rezepte gefunden',
      effort: 'N/A',
      cost: 'N/A',
      veggie: 'N/A',
      ingredients: [],
      image: ''
    };
  }
}

randomize()

const back = () => {
  emit('onBack', true)
}
</script>

<style scoped>
.actions {
  width: 50%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
}

img {
  max-height: 10rem;
}
</style>