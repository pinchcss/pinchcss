<template>
  <div class="container">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eos ipsa minus quaerat qui quisquam sequi suscipit? Aliquam asperiores consequuntur culpa,
      cum eaque, enim illo nulla porro quasi repellendus tempora tempore.</p>
    <p>
      <a href="#">Link</a>
      <button class="link">Button</button>
    </p>
    <fieldset>
      <legend>Fieldset Legend</legend>
      <examples-inputs />
    </fieldset>
    <examples-buttons />
  </div>
</template>

<script>
  import ExamplesButtons from './examples/Buttons';
  import ExamplesInputs from './examples/Inputs';

  export default {
    name: 'Index',
    components: {
      ExamplesButtons,
      ExamplesInputs,
    },
  };
</script>
