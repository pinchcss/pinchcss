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

<script>
  import ExamplesTypography from './examples/Typography';
  import ExamplesButtons from './examples/Buttons';
  import ExamplesInputs from './examples/Inputs';

  export default {
    name: 'Index',
    components: {
      ExamplesTypography,
      ExamplesButtons,
      ExamplesInputs,
    },
  };
</script>
