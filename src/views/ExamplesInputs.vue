<script setup>
import { ref } from 'vue';
const select = ref('');
const fields = {
	text: 'Text',
	email: 'Email',
	search: 'Search',
};
</script>

<template>
	<fieldset>
		<legend>Fieldset Legend</legend>
		<section>
			<p class="field" v-for="(label, type) in fields" :key="type">
				<label :for="type">{{ label }}</label>
				<input :type="type" :name="type" :id="type" :placeholder="label" />
			</p>
			<p class="field">
				<label for="textarea">Textarea</label>
				<textarea name="textarea" id="textarea" placeholder="Textarea"></textarea>
			</p>
			<p class="field">
				<label for="range">Range</label>
				<input type="range" name="range" id="range" />
			</p>
			<p class="field">
				<label for="select">Select</label>
				<select name="select" id="select" :class="{ placeholder: select === '' }" v-model="select">
					<option value="" disabled>Select Item</option>
					<option value="1">Option 1</option>
					<option value="1">Option 2</option>
					<option value="1">Option 3</option>
				</select>
			</p>
			<p class="field">
				<label for="select">Select</label>
				<select name="select" id="select" :class="{ placeholder: select === '' }" v-model="select" disabled>
					<option value="" disabled>Select Item</option>
					<option value="1">Option 1</option>
					<option value="1">Option 2</option>
					<option value="1">Option 3</option>
				</select>
			</p>
			<p class="field" v-for="i in 2" :key="`checkbox-0-${i}`">
				<input type="checkbox" :name="`checkbox-0-${i}`" :id="`checkbox-0-${i}`" />
				<label :for="`checkbox-0-${i}`">Checkbox {{ i }}</label>
			</p>
			<p class="field" v-for="i in 2" :key="`checkbox-1-${i}`">
				<label :for="`checkbox-1-${i}`">
					<input type="checkbox" :name="`checkbox-1-${i}`" :id="`checkbox-1-${i}`" />
					Checkbox {{ i }}
				</label>
			</p>
			<p class="field">
				<input type="checkbox" name="checkbox-3" id="checkbox-3" />
				<label for="checkbox-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor, quod! Aperiam, atque dolores
					dolorum expedita facilis hic impedit iste obcaecati rerum sapiente tenetur voluptatum? Ipsam necessitatibus
					porro quisquam recusandae.
				</label>
			</p>
			<p class="field">
				<label for="checkbox-4">
					<input type="checkbox" name="checkbox-4" id="checkbox-4" />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolor, quod! Aperiam, atque dolores
					dolorum expedita facilis hic impedit iste obcaecati rerum sapiente tenetur voluptatum? Ipsam necessitatibus
					porro quisquam recusandae.
				</label>
			</p>
			<p class="field" v-for="i in 3" :key="`radio-${i}`">
				<input type="radio" name="radio" :id="`radio-${i}`" />
				<label :for="`radio-${i}`">Radio {{ i }}</label>
			</p>
		</section>
	</fieldset>
</template>
