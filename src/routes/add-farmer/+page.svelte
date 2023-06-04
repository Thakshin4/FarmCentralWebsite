<!-- Script -->
<script>
	import { supabase } from '$lib/supabase';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let name = '';

	let msg = '';

	/**
	 * @type {any[] | null}
	 */
	let users = [];

	onMount(async () => {
		// @ts-ignore
		let { data: Users, error } = await supabase.from('users').select('*');
		if (error) {
			console.log(error);
		} else {
			users = Users;
			// - Debugging -
			// console.log('test');
			// console.log(Users);
			// console.log(users)
		}
	});

	// Farer creation
	async function addFarmer() {
		// @ts-ignore
		const existingUser = users.find((user) => user.email === email);

		if (existingUser) {
			msg = 'Email already exists. Please choose a different email.';
		} else if (email === "" || password === "" || name === "") {
			msg = 'All info is required';
		} else {
			await supabase.from('users').insert([
				// @ts-ignore
				{
					// @ts-ignore
					userId: (users.length + 1).toString(),
					email: email,
					password: password,
					name: name,
					role: 'Farmer'
				}
			]);
			msg = 'New Farmer Added.';
		}
	}
</script>

<!-- HTML -->
<AppBar>
	<svelte:fragment slot="trail"
		><li><a href="/employee">Home</a></li>
		<li><a href="/details">View Details</a></li>
		<li><a href="/add-farmer">Add Farmer</a></li>
		<li><a href="/view-products">View Products</a></li>
		<li><a href="/login">Logout</a></li>
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Add Farmer</h1>

		<div class="card p-4">
			<form on:submit|preventDefault={addFarmer}>
				<label for="label">Email:</label><br />
				<input class="input" type="text" id="email" bind:value={email} /><br /><br />

				<label for="label">Password:</label><br />
				<input class="input" type="text" id="password" bind:value={password} /><br /><br />

				<label for="name">Name:</label><br />
				<input class="input" type="text" id="name" bind:value={name} />
			</form>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={addFarmer}>Submit</button>
		</div>
	</div>
</div>
