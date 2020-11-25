import axios from "axios";
import {tour_list, TourApiParams} from "../Stores/TourStore";
import { get } from 'svelte/store';

export function getTourListSupport() {
    // 取出 store 裡存放團旅 api param 的物件並指向給 ApiParams
    let ApiParams = get(TourApiParams);
    let api_url = `https://interview.tripresso.com/tour/search?page=${ApiParams.page}&row_per_page=${ApiParams.row_per_page}`;
    
    // 判斷當前是否有升降冪的篩選條件
    if(ApiParams.sort != "") {
        api_url += `&sort=${ApiParams.sort}`;
    }

    axios
        .get(api_url)
        .then((response) => {
            if (response.statusText === "OK") {
                tour_list.update(() => response.data.data.tour_list);
                console.log(response)
            }else{
                console.log(response)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}