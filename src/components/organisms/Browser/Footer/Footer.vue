
<template>
    <div class="footer">
        <Social />
        <Links />

        <div class="service-code-button">
            <div class="service-code">Código do Serviço</div>
        </div>

        <div class="corp">
            © 1997-2021 Netflix, Inc. &lcub;i-062d573a0ee099242&rcub;
        </div>
    </div>
</template>

<script lang="ts" setup>
import Links from '@/components/molecules/Footer/Links.vue';
import Social from '@/components/molecules/Footer/Social.vue';
</script>

<style lang="scss" scoped>
.footer,
.footer * {
    box-sizing: border-box;
}

.footer {
    background: var(--vt-c-black);
    padding: 50px 15% 20px 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    position: relative;
}

@media (max-width: 1200px) {
    .footer {
        padding: 50px 10% 20px 10%
    }
}

.links {
    display: flex;
    flex-direction: row;
    gap: 150px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.column-01 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.seslendirme-ve-alt-yaz {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.medya-merkezi {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.gizlilik {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.bize-ula-n {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.column-02 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.sesli-betimleme {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.yat-r-mc-li-kileri {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.yasal-h-k-mler {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.column-03 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.yard-m-merkezi {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.mkanlar {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.erez-tercihleri {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.column-04 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.hediye-kartlar {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.kullan-m-ko-ullar {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.kurumsal-bilgiler {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
}

.service-code-button {
    border-style: solid;
    border-color: var(--gray, #808080);
    border-width: 1px;
    padding: 10px 15px 10px 15px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    position: relative;
}

.service-code {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-regular-13-px, 400 13px "Netflix Sans", sans-serif);
    position: relative;
    cursor: pointer;
}

.corp {
    color: var(--gray, #808080);
    text-align: left;
    font: var(--netflix-sans-light-11-px, 300 11px "Netflix Sans", sans-serif);
    position: relative;
}
</style>