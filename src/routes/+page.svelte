<script>
	import LightLogo from '$lib/assets/img/logo/Logo_alex_negativo.png';
	import DarkLogo from '$lib/assets/img/logo/Logo_alex_positivo.png';
	import * as Alert from '$lib/components/ui/alert';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import LightSwitch from '$lib/components/ui/light-switch/light-switch.svelte';
	import { Link } from 'lucide-svelte';
	import { mode } from 'mode-watcher';

	export let form;
</script>

<nav class="border-gray-200">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<div class="flex items-center space-x-3 rtl:space-x-reverse">
			{#if $mode === 'light'}
				<img src={LightLogo} class="h-9" alt="Logo" />
			{:else if $mode === 'dark'}
				<img src={DarkLogo} class="h-9" alt="Logo" />
			{/if}
		</div>
		<div class="w-auto" id="navbar-default">
			<LightSwitch />
		</div>
	</div>
</nav>

<div class="flex h-[50vh] items-center justify-center">
	<div class="">
		<div class="my-4">
			<h1 class="py-12 text-center text-4xl">Alopezmtz Shortener</h1>
			<form method="POST" action="?/short">
				<div class="grid w-[320px] grid-cols-1 gap-4 md:w-[382px] md:grid-cols-4 md:gap-2">
					<Input type="text" name="url" placeholder="Enter URL" class="w-full md:col-span-3" />
					<Button type="submit" class="w-full md:col-span-1">Short</Button>
				</div>
			</form>
		</div>

		{#if form?.short_url}
			<Alert.Root>
				<Link class="h-4 w-4" />
				<Alert.Title>Your Url!</Alert.Title>
				<Alert.Description>
					<a href={form.short_url} class="hover:underline">
						{form.short_url}
					</a>
				</Alert.Description>
			</Alert.Root>
		{/if}
	</div>
</div>
