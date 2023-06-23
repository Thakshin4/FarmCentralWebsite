<!-- Script -->
<script>
	import { supabase } from '$lib/supabase';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let productName = '';
	let productType = '';
	let dateSupplied = '';
	let farmerName = localStorage.getItem('name');

	let msg = '';

	/**
	 * @type {any[] | null}
	 */
	let products = [];

	onMount(async () => {
		// @ts-ignore
		let { data: Products, error } = await supabase.from('products').select('*');
		if (error) {
			console.log(error);
		} else {
			// - Debugging -
			// console.log('test');
			// console.log(Products);
			products = Products;
		}
	});

	// Product creation
	async function addProduct() {
		if (productName === '' || productType === '' || dateSupplied === '') {
			msg = 'All info is required';
		} else {
			await supabase.from('products').insert([
				{
					// @ts-ignore
					productId: (products.length + 1).toString(),
					productName: productName,
					productType: productType,
					dateSupplied: dateSupplied,
					farmerName: farmerName
				}
			]);

			// Reset form inputs
			productName = '';
			productType = '';
			dateSupplied = '';

			msg = 'Product added successfully!';
		}
	}
</script>

<!-- HTML -->
<AppBar>
	<svelte:fragment slot="trail">
		<li><a href="/farmer">Home</a></li>
		<li><a href="/details">View Details</a></li>
		<li><a href="/add-product">Add Product</a></li>
		<li><a href="/login">Logout</a></li>
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Add Product</h1>

		<!-- Form for adding Product -->
		<div class="card p-4">
			<form on:submit|preventDefault={addProduct}>
				<label for="productName">Product Name:</label><br />
				<input class="input" type="text" id="productName" bind:value={productName} /><br /><br />

				<label class="label">
					<span>Product Type:</span><br><br>
					<select class="input" id="productType" bind:value={productType}>
						<option value="Fruits">Fruits</option>
						<option value="Vegetables">Vegetables</option>
						<option value="Grains">Grains</option>
						<option value="Nuts">Nuts</option>
						<option value="Sugars & Straches">Sugars & Straches</option>
					</select>
				</label><br>

				<label for="dateSupplied">Date Supplied:</label><br />
				<input class="input" type="date" id="dateSupplied" bind:value={dateSupplied} />
			</form>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={addProduct}> Add Product </button>
		</div>
	</div>
</div>
