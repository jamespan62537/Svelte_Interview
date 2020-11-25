<script>
    import { onMount } from "svelte";
    import {tour_list} from "../../../../Stores/TourStore";
    import {getTourListSupport} from "../../../../Support/GetTourListSupport";

    onMount(async () => {
        getTourListService();
    });

    function getTourListService() {
        // 取得團旅行程
        getTourListSupport();
    }
</script>

<style>
    .tourList-container ul {
        display: flex;
        flex-direction: column;
    }

    .tourList-container ul li {
        display: flex;
        flex-direction: row;
        margin: 20px 0;
        background-color: white;
    }
    .tourList-container ul li .tour-img {
        width: 20%;
    }
    .tourList-container ul li .tour-detail {
        width: 80%;
        padding: 20px;
    }
</style>

<div class="tourList-container">
    <ul>
        {#each $tour_list as tour}
            <li>
                <div
                    class="tour-img"
                    style="background-image: url({tour.image_url}); background-position: center;
                            background-size: cover;
                            background-repeat: no-repeat;" />
                <div class="tour-detail">
                    <div class="tour-agency">{tour.agency}</div>
                    <div class="tour-title">{tour.title}</div>
                    <div class="tour-tag">
                        {#each tour.tags as tag}{tag}{/each}
                    </div>
                    <div class="tour-footer">
                        <div class="tour-group-date">
                            {#each tour.group as group}{group.date}{/each}
                        </div>
                        <div class="tour-price">{tour.min_price}</div>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>
