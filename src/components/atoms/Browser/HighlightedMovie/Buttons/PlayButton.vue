<template>
    <div class="play-button">
        <svg class="play" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.33334L28 16L8 26.6667V5.33334Z" fill="#141414"></path>
        </svg>

        <div class="watch">Assistir</div>
    </div>
</template>
  
<style lang="scss" scoped>
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
</style>