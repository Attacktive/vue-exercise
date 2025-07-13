<template>
	<div>
		<h3>User List</h3>
		<ul>
			<li v-for="user in users" :key="user.id">
				<slot name="content" :user="user">
					{{ user.name }}
				</slot>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface User {
	id: number;
	name: string;
	age: number;
}

const users = ref<User[]>([
	{ id: 1, name: "Alice", age: 21 },
	{ id: 2, name: "Bob", age: 25 },
	{ id: 3, name: "Charlie", age: 66 }
]);
</script>
