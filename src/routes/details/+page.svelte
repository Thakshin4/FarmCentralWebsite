<!-- Script -->
<script>
	import { supabase } from '$lib/supabase';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	// Gets details from local storage
	let email = localStorage.getItem('email');
	let role = localStorage.getItem('role');
	let name = localStorage.getItem('name');
</script>

<!-- HTML -->
<AppBar>
	<svelte:fragment slot="trail">
		<!-- Nav links depend on user role -->
		{#if role == 'Employee'}
			<li><a href="/employee">Home</a></li>
			<li><a href="/view-details">View Details</a></li>
			<li><a href="/add-farmer">Add Farmer</a></li>
			<li><a href="/view-products">View Products</a></li>
			<li><a href="/login">Logout</a></li>
		{/if}

		{#if role == 'Farmer'}
			<li><a href="/farmer">Home</a></li>
			<li><a href="/view-details">View Details</a></li>
			<li><a href="/add-product">Add Product</a></li>
			<li><a href="/login">Logout</a></li>
		{/if}
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Details</h1>
		<section class="p-4">
			<div class="card p-4">
				<ul>
					<p>Email: {email}</p>
					<br />
					<p>Name: {name}</p>
					<br />
					<p>Role: {role}</p>
				</ul>
			</div>
		</section>
	</div>
</div>
