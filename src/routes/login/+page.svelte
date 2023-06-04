<!-- Script -->
<script>
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let msg = '';

	/**
	 * @type {any[] | null}
	 */
	let users = [];

	onMount(async () => {
		let { data: Users, error } = await supabase.from('users').select('*');

		if (error) {
			console.log(error);
		} else {
			// - Debugging -
			// console.log('test');
			// console.log(Users);
			users = Users;
		}
	});

	// User login
	function handleLogin() {
		// @ts-ignore
		const user = users.find((user) => user.email === email && user.password === password);

		if (user) {
			// Save user information in local storage or session storage for authentication
			localStorage.setItem('userId', user.userId);
			localStorage.setItem('name', user.name);
			localStorage.setItem('role', user.role);
			localStorage.setItem('email', user.email);

			// Redirect to the appropriate route based on user role
			if (user.role === 'Employee') {
				goto('/employee');
			} else if (user.role === 'Farmer') {
				goto('/farmer');
			}
		} else {
			msg = 'Invalid email or password. Please try again.';
		}
	}
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Login</h1>

		<div class="card p-4">
			<section class="p-4">
				<form on:submit|preventDefault={handleLogin}>
					<label for="label">Email:</label><br />
					<input class="input" type="text" id="email" bind:value={email} /><br /><br />

					<label for="label">Password:</label><br />
					<input class="input" type="password" id="password" bind:value={password} />
				</form>
			</section>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={handleLogin}>Login</button>
		</div>
	</div>
</div>
