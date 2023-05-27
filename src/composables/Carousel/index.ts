import { onBeforeUnmount, onMounted, ref } from 'vue';

export default () => {
    const itemsToShow = ref(10)

    onBeforeUnmount(() => {
        window.removeEventListener("resize", myEventHandler);
    })

    onMounted(() => {
        window.addEventListener("resize", myEventHandler);
        changeItemsToShow(window.innerWidth)
    })

    const myEventHandler = (e: any) => {
        changeItemsToShow(e.target.innerWidth)
    }

    const changeItemsToShow = (innerWidth: number) => {
        if (innerWidth >= 1600) itemsToShow.value = 14
        else if (innerWidth < 1000) itemsToShow.value = 7
        else if (innerWidth < 1100) itemsToShow.value = 8
        else if (innerWidth < 1200) itemsToShow.value = 9
        else if (innerWidth < 1300) itemsToShow.value = 10
        else if (innerWidth < 1400) itemsToShow.value = 11
        else if (innerWidth < 1600) itemsToShow.value = 12
    }

    return {
        myEventHandler,
        changeItemsToShow,
        itemsToShow
    }
}
