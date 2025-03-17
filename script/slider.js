let sliderImageIds = [25, 4, 39, 7, 1, 151, 52, 202];

function renderSliderImage() {
    let sliderImageRef = document.getElementById('slider_img');
    let sectionContent = `<section class="slider" style="--quantity: 8">`;
    sliderImageRef.innerHTML = "";
    
    sliderImageIds.forEach((id, index) => {
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        let imagePosition = (index % 8) + 1;
        sectionContent += `
            <img class="item img_size" style="--position: ${imagePosition}" src="${imgUrl}" alt="Pokemon ${id}">`
    });
    sectionContent += `</section>`;
    sliderImageRef.innerHTML = sectionContent;
}