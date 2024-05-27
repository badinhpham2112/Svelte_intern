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
    <Route path="/intro" exact><IntroductionPage /></Route>
  </div>
</Router>
