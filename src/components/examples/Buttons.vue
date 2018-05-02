<template>
  <section>
    <p>
      <template v-for="(title, key) in colors">
        <button
          :class="key === 'default' ? '': key"
          :key="key">{{ title }}</button>&#32;
      </template>
    </p>

    <p>
      <template v-for="(title, key) in colors">
        <button disabled
          :class="key === 'default' ? '': key"
          :key="key">{{ key === 'default' ? 'Disabled' : title }}</button>&#32;
      </template>
    </p>

    <p>
      <template v-for="(title, key, i) in colors">
        <input :type="i % 2 === 0 ? 'submit' : 'button'"
               :class="key === 'default' ? '': key"
               :value="title"
               :key="key" />&#32;
      </template>
    </p>

    <p>
      <template v-for="(title, key) in colors">
        <button class="outlined"
                :class="key === 'default' ? '': key"
                :key="key">{{ key === 'default' ? 'Outlined' : title }}</button>&#32;
      </template>
    </p>

    <p>
      <template v-for="(title, key) in colors">
        <button class="outlined" disabled
                :class="key === 'default' ? '': key"
                :key="key">{{ key === 'default' ? 'Outlined' : title }}</button>&#32;
      </template>
    </p>

    <p class="box inverted">
      <button class="inverted">Inverted</button>
      <button class="inverted outlined">Outlined</button>
      <a class="button inverted" href="#">Inverted</a>
      <a class="button inverted outlined" href="#">Outlined</a>
      <button class="inverted" disabled>Inverted</button>
      <a class="button inverted outlined" href="#" disabled>Outlined</a>
    </p>

    <p>
      <template v-for="(title, key, i) in colors">
        <a href="#" class="button"
                :disabled="(i+1) % 3 === 0"
                :class="[key === 'default' ? '': key, i % 2 !== 0 ? 'outlined' : '' ]"
                :key="key">{{ title }}</a>&#32;
      </template>
    </p>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        colors: {
          default: 'Default',
          primary: 'Primary',
          info: 'Info',
          success: 'Success',
          warning: 'Warning',
          danger: 'Danger',
        },
      };
    },
    name: 'examples-buttons',
  };
</script>
