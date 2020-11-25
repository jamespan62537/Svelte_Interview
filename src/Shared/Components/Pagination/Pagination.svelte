<script>
let total_page = 10;
function changeNowPage(value) {
    
}
</script>

<div class="pagination">
        <ul>
            <li on:click={() => changeNowPage(1)} class="first">
                <i class="fa fa-chevron-left"></i
                ><i class="fa fa-chevron-left"></i>
            </li>
            <li on:click={() => changeNowPage("left")}>
                <i class="fa fa-chevron-left"></i>
            </li>
            <li
                v-for="n in total_Page"
                :key="n"
                on:click={() => changeNowPage()}
            >
            </li>
            <li on:click={() => changeNowPage("right")}>
                <i class="fa fa-chevron-right"></i>
            </li>
            <li on:click={() => changeNowPage(total_page)} class="last">
                <i class="fa fa-chevron-right"></i
                ><i class="fa fa-chevron-right"></i>
            </li>
        </ul>
    </div>