<script setup>
import ExamplesTypography from './examples/ExamplesTypography.vue';
import ExamplesButtons from './examples/ExamplesButtons.vue';
import ExamplesInputs from './examples/ExamplesInputs.vue';
</script>

<template>
  <div class="container">
    <examples-typography />
    <fieldset>
      <legend>Fieldset Legend</legend>
      <examples-inputs />
    </fieldset>
    <examples-buttons />
  </div>
</template>
