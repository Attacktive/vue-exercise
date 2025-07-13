<template>
	<div>
		<h2>Users Using a Scoped Slot</h2>
		<UserList>
			<template #content="{ user }">
				<span>{{ user.name }}</span>
				&nbsp;
				<span>(Age: {{ user.age }})</span>
			</template>
		</UserList>
	</div>
</template>

<script setup lang="ts">
import UserList from "@/components/user-list/UserList.vue";
</script>
