<template>
  <div>
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
    <div class="grid">
      <div class="col">
        <ul>
          <li v-for="i in 3" :key="i">
            List {{i}}
            <ul v-if="i === 2">
              <li v-for="n in 3" :key="n">
                List {{i}}.{{n}}
                <ul v-if="n === 2">
                  <li v-for="j in 3" :key="j">List {{i}}.{{n}}.{{j}}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col">
        <ol>
          <li v-for="i in 3" :key="i">
            List {{i}}
            <ol v-if="i === 2">
              <li v-for="n in 3" :key="n">
                List {{i}}.{{n}}
                <ol v-if="n === 2">
                  <li v-for="j in 3" :key="j">List {{i}}.{{n}}.{{j}}</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'examples-typography',
  };
</script>
