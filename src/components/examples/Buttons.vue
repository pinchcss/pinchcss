<template>
  <section>
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

    <p>
      <button class="outlined" disabled>Outlined</button>
      <button class="secondary outlined" disabled>Secondary</button>
      <button class="info outlined" disabled>Info</button>
      <button class="success outlined" disabled>Success</button>
      <button class="warning outlined" disabled>Warninig</button>
      <button class="danger outlined" disabled>Danger</button>
    </p>

    <p style="background: #1e1b1e; padding: 2em;">
      <button class="inverted">Inverted</button>
      <button class="inverted outlined">Outlined</button>
    </p>
  </section>
</template>

<script>
  export default {
    name: 'examples-buttons',
  };
</script>
