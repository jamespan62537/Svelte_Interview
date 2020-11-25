<script>
import {getTourListSupport} from "../../../../Support/GetTourListSupport";
import {TourApiParams} from "../../../../Stores/TourStore";
import { get } from 'svelte/store';

function price_sort(sort_string) {
    // 需先將 store 裡存放團旅 api param 的物件取出並指向給 ApiParams
    let ApiParams = get(TourApiParams);

    // 針對有需要變動屬性的值做修改完後再 set 回 store
    ApiParams.sort = sort_string;
    TourApiParams.set(ApiParams);

    // 取得團旅行程
    getTourListSupport()
};

</script>

<style>
    .filterBox-container {
        background-color: white;
        margin: 20px 0;
    }
    ul {
        display: flex;
        flex-direction: row;
    }
    ul li {
        position: relative;
        padding: 20px 50px;
    }
    ul li:hover {
        background-color: #ef5c28;
        transition: ease-in-out 0.2s;
        cursor: pointer;
    }
    ul li:hover > a {
        color: white;
    }
    ul a {
        text-decoration: none;
        color: #333;
        display: block;
        padding: 0 30px;
        line-height: 40px;
        pointer-events: none;
    }
    ul li ul {
        visibility: hidden;
        display: none;
        z-index: 99;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        box-shadow: 3px 3px 8px -3px;
    }
    ul li:hover > ul,
    ul li ul:hover {
        visibility: visible;
        opacity: 1;
        display: block;
    }
    ul li ul li {
        font-size: 15px;
        background-color: #fff;
    }
    ul li ul li:hover {
        color: #fff;
    }
    ul .filter-string:hover {
        background-color:#fff;
        cursor: default;
    }
    ul .filter-string:hover > a {
        color: black;
        background-color: #fff;
        cursor: default;
    }
</style>

<div class="filterBox-container w-64 h-3">
    <ul>
        <li class="filter-string"><a href="">排序</a></li>
        <li on:click={price_sort}><a href="">精選評分</a></li>
        <li>
            <a href="">價格</a>
            <ul>
                <li on:click={() => price_sort('price_asc')}>價格：低到高</li>
                <li on:click={() => price_sort('price_desc')}>價格：高到低</li>
            </ul>
        </li>
    </ul>
</div>
