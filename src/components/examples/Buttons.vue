<template>
  <section>
    <p>
      <button>Default</button>
      <button class="primary">Primary</button>
      <button class="info">Info</button>
      <button class="success">Success</button>
      <button class="warning">Warninig</button>
      <button class="danger">Danger</button>
    </p>

    <p>
      <button disabled>Disabled</button>
      <button class="primary" disabled>Primary</button>
      <button class="info" disabled>Info</button>
      <button class="success" disabled>Success</button>
      <button class="warning" disabled>Warninig</button>
      <button class="danger" disabled>Danger</button>
    </p>

    <p>
      <input type="button" value="Default"/>
      <input type="button" class="primary" value="Primary"/>
      <input type="button" class="info" value="Info"/>
      <input type="button" class="success" value="Success"/>
      <input type="button" class="warning" value="Warninig"/>
      <input type="button" class="danger" value="Danger"/>
    </p>

    <p>
      <button class="outlined">Outlined</button>
      <button class="primary outlined">Primary</button>
      <button class="info outlined">Info</button>
      <button class="success outlined">Success</button>
      <button class="warning outlined">Warninig</button>
      <button class="danger outlined">Danger</button>
    </p>

    <p>
      <button class="outlined" disabled>Outlined</button>
      <button class="primary outlined" disabled>Primary</button>
      <button class="info outlined" disabled>Info</button>
      <button class="success outlined" disabled>Success</button>
      <button class="warning outlined" disabled>Warninig</button>
      <button class="danger outlined" disabled>Danger</button>
    </p>

    <p class="box inverted">
      <button class="inverted">Inverted</button>
      <button class="inverted outlined">Outlined</button>
      <a class="button inverted" href="#">Inverted</a>
      <a class="button inverted outlined" href="#">Outlined</a>
    </p>

    <p>
      <a class="button outlined" href="#">Outlined</a>
      <a class="button primary outlined" href="#" disabled>Primary</a>
      <a class="button info" href="#">Info</a>
      <a class="button success" href="#">Success</a>
      <a class="button warning" href="#" disabled>Warninig</a>
      <a class="button danger outlined" href="#">Danger</a>
    </p>

  </section>
</template>

<script>
  export default {
    name: 'examples-buttons',
  };
</script>
