<script>
	import { supabase } from '$lib/supabase';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let products = [];
	let filteredProducts = [...products];

	onMount(async () => {
			// @ts-ignore
			let { data: Products } = await supabase.from('products').select('productType, productName, dateSupplied, farmerName');
		
			// @ts-ignore
			products = Products
			filteredProducts = [...products];
			mapDistincts();
		});



	let filterType = '';
	let filterDate = '';
	let filterFarmer = '';

	/**
	 * @type {any[]}
	 */
	let productTypes = [];
	/**
	 * @type {any[]}
	 */
	let productDates = [];
	/**
	 * @type {any[]}
	 */
	let productFarmers = [];

	// @ts-ignore
	function distinct(array) {
		return [...new Set(array)];
	}

	function mapDistincts() {
		productTypes = distinct(products.map((product) => product.productType));
		productDates = distinct(products.map((product) => product.dateSupplied));
		productFarmers = distinct(products.map((product) => product.farmerName));
	}

	function handleFilter() {
		filteredProducts = products.filter((product) => {
			let typeMatch = true;
			let dateMatch = true;
			let farmerMatch = true;

			if (filterType !== '') {
				typeMatch = product.productType === filterType;
			}
			if (filterDate !== '') {
				dateMatch = product.dateSupplied === filterDate;
			}
			if (filterFarmer !== '') {
				farmerMatch = product.farmerName === filterFarmer;
			}

			return typeMatch && dateMatch && farmerMatch;
		});
	}
</script>

<AppBar>
	<svelte:fragment slot="trail">
		<li><a href="/employee">Home</a></li>
		<li><a href="/details">View Details</a></li>
		<li><a href="/add-farmer">Add Farmer</a></li>
		<li><a href="/view-products">View Products</a></li>
		<li><a href="/login">Logout</a></li>
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">View Products</h1>

		<div class="card p-4">			
			<label for="filterType">Filter by Type:</label><br>
			<select class="select" id="filterType" bind:value={filterType} on:change={handleFilter}>
				<option value="">All</option>
				{#each productTypes as type}
					<option value={type}>{type}</option>
				{/each}
			</select><br><br>

			<label for="filterDate">Filter by Date:</label><br>
			<select class="select" id="filterDate" bind:value={filterDate} on:change={handleFilter}>
				<option value="">All</option>
				{#each productDates as date}
					<option value={date}>{date}</option>
				{/each}
			</select><br><br>

			<label for="filterFarmer">Filter by Farmer:</label><br>
			<select class="select" id="filterFarmer" bind:value={filterFarmer} on:change={handleFilter}>
				<option value="">All</option>
				{#each productFarmers as farmer}
					<option value={farmer}>{farmer}</option>
				{/each}
			</select>
		</div>

		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Product Type</th>
						<th>Date Supplied</th>
						<th>Farmer Name</th>
					</tr>
				</thead>
				<tbody>
					{#each filteredProducts as product}
						<tr>
							<td>{product.productName}</td>
							<td>{product.productType}</td>
							<td>{product.dateSupplied}</td>
							<td>{product.farmerName}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
