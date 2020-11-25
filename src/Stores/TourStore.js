import { writable } from 'svelte/store';

export let tour_list = writable([]);

// 團旅行程預設參數
export let TourApiParams = writable({
    page: 1,
    row_per_page: 20,
    sort: "",
})