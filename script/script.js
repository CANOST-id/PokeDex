async function init() {
    renderSlider();
    renderRespSlider();
    await getPokedex();
    closeLoader();
}
