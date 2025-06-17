let sliderImageIds = [25, 4, 39, 7, 1, 151, 52, 202];

function renderSlider() {
    let sliderImageRef = document.getElementById('slider_img');
    let sectionContent = `<section class="slider" style="--quantity: 8">`;
    sliderImageRef.innerHTML = "";
    sliderImageIds.forEach((i, index) => {
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;
        let imagePosition = (index % 8) + 1;
        sectionContent += `
        <img class="item img_size" style="--position: ${imagePosition}" src="${imgUrl}" alt="Pokemon ${i}">`
    });
    sectionContent += `</section>`;
    sliderImageRef.innerHTML = sectionContent;
}

function renderRespSlider() {
    let sliderImageRef = document.getElementById('respSlider');
    let sectionContent = `<section class="resp_slider">`;
    sliderImageRef.innerHTML = "";

    let pikachuUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png`;

    sectionContent += `
                        <img class="item img_size" src="${pikachuUrl}" alt="Pokemon 25">`;
    sectionContent += `
                        </section>`;
    sliderImageRef.innerHTML = sectionContent;
}