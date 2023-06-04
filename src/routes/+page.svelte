<script>
	import { goto } from '$app/navigation';

	function goToLoginPage() {
		goto('/login');
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Welcome to Farm Central!</h1>
		<div class="card">
			<header class="card-header">
				Farm Central is a software tool or platform designed to facilitate <br />
				the management of Farmers and their associated products. It streamlines <br />
				the process of tracking products and eliminates the need for manual recording. <br /><br />
			</header>
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={goToLoginPage}>
				Get Started
			</button>
		</div>
	</div>
</div>
