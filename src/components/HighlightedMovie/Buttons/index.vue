<template>
    <div class="buttons">
        <div class="play-button">
            <svg class="play" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.33334L28 16L8 26.6667V5.33334Z" fill="#141414"></path>
            </svg>

            <div class="watch">Assistir</div>
        </div>

        <div class="more-info-button">
            <svg class="detail" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M29.3334 16C29.3334 23.364 23.364 29.3333 16 29.3333C8.63602 29.3333 2.66669 23.364 2.66669 16C2.66669 8.636 8.63602 2.66666 16 2.66666C23.364 2.66666 29.3334 8.636 29.3334 16ZM26.6667 16C26.6667 13.171 25.5429 10.4579 23.5425 8.45753C21.5421 6.45714 18.829 5.33333 16 5.33333C13.171 5.33333 10.4579 6.45714 8.45755 8.45753C6.45716 10.4579 5.33335 13.171 5.33335 16C5.33335 18.829 6.45716 21.5421 8.45755 23.5425C10.4579 25.5429 13.171 26.6667 16 26.6667C18.829 26.6667 21.5421 25.5429 23.5425 23.5425C25.5429 21.5421 26.6667 18.829 26.6667 16ZM14.6667 24V14.6667H17.3334V24H14.6667ZM16 12.3333C15.7825 12.3355 15.5667 12.2936 15.3658 12.2102C15.1648 12.1268 14.9828 12.0036 14.8307 11.848C14.6701 11.6966 14.5428 11.5133 14.4572 11.3099C14.3715 11.1064 14.3294 10.8874 14.3334 10.6667C14.3334 10.2027 14.4974 9.808 14.8294 9.48533C15.1587 9.16266 15.5494 9 16 9C16.4494 9 16.84 9.16266 17.1694 9.48533C17.5 9.808 17.6667 10.2027 17.6667 10.6667C17.6667 11.1307 17.5014 11.5253 17.1694 11.848C17.0172 12.0036 16.8352 12.1268 16.6343 12.2102C16.4333 12.2936 16.2176 12.3355 16 12.3333Z"
                    fill="white"></path>
            </svg>

            <div class="more-information">Mais Informações</div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.buttons {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;

    .play-button {
        background: #ffffff;
        border-radius: 4px;
        padding: 15px 30px 15px 30px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.75);
        }

        .play {
            flex-shrink: 0;
            position: relative;
            overflow: visible;
        }

        .watch {
            color: var(--black, #141414);
            text-align: left;
            font: var(--netflix-sans-medium-22-px, 500 22px 'Netflix Sans', sans-serif);
            position: relative;
        }
    }

    .more-info-button {
        background: var(--white-30-opacity, rgba(255, 255, 255, 0.30));
        border-radius: 4px;
        padding: 15px 30px 15px 30px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;

        &:hover {
            background-color: rgba(109, 109, 110, 0.4);
        }

        .detail {
            flex-shrink: 0;
            position: relative;
            overflow: visible;
        }

        .more-information {
            color: var(--white, #ffffff);
            text-align: left;
            font: var(--netflix-sans-medium-22-px, 500 22px 'Netflix Sans', sans-serif);
            position: relative;
        }
    }
}
</style>