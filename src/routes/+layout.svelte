<script>
  // import Header from './Header.svelte';
  // import './styles.css';
  import { Router, Link, Route } from "svelte-routing";
  import "../tailwindCSS.css";
  import HeaderComponent from "../Components/HeaderComponent.svelte";
  import IntroductionPage from "./Pages/introductionPage.svelte";
  import HomePage from "./Pages/HomePage/+page.svelte";
  import FooterComponent from "../Components/FooterComponent.svelte";
  import AboutUs from "./Pages/aboutUs.svelte";
  import Activity from "./Pages/activity.svelte";
</script>

<Router>
  <div>
    <Route path="/trang-chu">
      <HomePage />
    </Route>
    <Route path="/ve-chung-toi">
      <AboutUs />
    </Route>
    <Route path="/linh-vuc-hoat-dong">
      <Activity />
    </Route>
    <Route path="/intro"><IntroductionPage /></Route>
  </div>
</Router>

<!-- <main>
  <slot />
</main> -->

<!-- <Header />


	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->

<!-- <style>
  .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style> -->
