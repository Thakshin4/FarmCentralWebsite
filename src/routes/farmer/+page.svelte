<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

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
		<h1 class="h1">Farmer Page</h1>

		<div class="card p-4">
			Welcome to the Farmer page.<br>
			Here you can add new products to stock.
		</div>
	</div>
</div>
