<script>
import StrokeBox from "./Box/StrokeBox.svelte";
import FilterBox from "./Box/FilterBox.svelte";
import TourBox from "./Box/TourBox.svelte";
</script>

<style>
    .result-container {
        width: 70%;
        margin: 0 auto;
    }
</style>

<div class="result-container">
    <StrokeBox />
    <FilterBox />
    <TourBox />
</div>
