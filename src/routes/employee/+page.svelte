<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

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
		<h1 class="h1">Employee Page</h1>

		<div class="card p-4">
			Welcome to the Employee Page.<br>
			Here you can:
			<li>Add new Farmers</li>
			<li>View a history of all products</li>
		</div>
	</div>
</div>
