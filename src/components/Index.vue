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
      <p class="field">
        <label for="text">Text</label>
        <input type="text" name="text" id="text" placeholder="text">
      </p>
      <p class="field">
        <label for="textarea">Textarea</label>
        <textarea name="textarea" id="textarea" placeholder="Textarea"></textarea>
      </p>
      <p class="field">
        <label for="select">Select</label>
        <select name="select" id="select">
          <option value="">Select Item</option>
          <option value="1">Option 1</option>
          <option value="1">Option 2</option>
          <option value="1">Option 3</option>
        </select>
      </p>
    </fieldset>
    <examples-buttons />
  </div>
</template>

<script>
  import ExamplesButtons from './examples/Buttons';

  export default {
    name: 'Index',
    components: {
      ExamplesButtons,
    },
  };
</script>
