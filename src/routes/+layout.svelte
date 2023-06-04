<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import Logo from '$lib/Images/logo.png';
</script>

<AppShell>
	<!-- Page Header -->
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><Avatar src={Logo} width="w-10" rounded="rounded-full" /></a>
			</svelte:fragment>
			<strong class="text-xl uppercase">Farm Central</strong>
			<svelte:fragment slot="trail">
				<!-- AppBar links -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- Page Footer -->
	<svelte:fragment slot="footer">
		<AppBar>
			Farm Central | 2023 | This Website was made possible thanks to
			<a class="anchor" href="https://kit.svelte.dev">SvelteKit</a>,
			<a class="anchor" href="https://www.skeleton.dev">SkeletonUI</a> and
			<a class="anchor" href="https://supabase.com">Supabase</a>
		</AppBar>
	</svelte:fragment>
</AppShell>
