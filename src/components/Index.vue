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

    <p>
      <button>Primary</button>
      <button class="secondary">Secondary</button>
      <button class="info">Info</button>
      <button class="success">Success</button>
      <button class="warning">Warninig</button>
      <button class="danger">Danger</button>
    </p>

    <p>
      <button disabled>Disabled</button>
      <button class="secondary" disabled>Secondary</button>
      <button class="info" disabled>Info</button>
      <button class="success" disabled>Success</button>
      <button class="warning" disabled>Warninig</button>
      <button class="danger" disabled>Danger</button>
    </p>

    <p>
      <input type="button" value="Primary"/>
      <input type="button" class="secondary" value="Secondary"/>
      <input type="button" class="info" value="Info"/>
      <input type="button" class="success" value="Success"/>
      <input type="button" class="warning" value="Warninig"/>
      <input type="button" class="danger" value="Danger"/>
    </p>

    <p>
      <button class="outlined">Outlined</button>
      <button class="secondary outlined">Secondary</button>
      <button class="info outlined">Info</button>
      <button class="success outlined">Success</button>
      <button class="warning outlined">Warninig</button>
      <button class="danger outlined">Danger</button>
    </p>

    <p style="background: #1e1b1e; padding: 2em;">
      <button class="inverted">Inverted</button>
      <button class="inverted outlined">Outlined</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
