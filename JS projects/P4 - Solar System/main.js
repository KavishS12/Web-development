const planets = ['mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune','pluto']
const weight_factor = [0.38,0.91,1,0.166,0.38,2.34,1.06,0.92,1.19,0.06]

const options = document.querySelector('#drop-down');
for(let planet of planets){
    const opt = document.createElement('option')
    opt.value = planet.toLowerCase();
    opt.textContent = planet.toUpperCase();
    options.appendChild(opt);
}

const btn = document.querySelector(".calcBtn");
btn.addEventListener('click', () => {
    //console.log(options.value);
    const val = options.value;
    const container = document.querySelector('.flex-container');
    if(val == 'none'){
        container.innerHTML = '';
        const desc = document.createElement('div');
        desc.className = 'no-planet';
        desc.textContent = 'You did not chose a planet yet.'
        container.appendChild(desc);
    }
    else{
        container.innerHTML = '';
        const img = document.createElement('div');
        img.className = 'flex-item-image';
        container.appendChild(img);
        const desc = document.createElement('div');
        desc.className = 'flex-item-description';
        container.appendChild(desc);

        let i = 0;
        for(let planet of planets){
            if(planet == val){
                img.innerHTML = `<img src='./images/${val}.png'/>`
                const txt = document.createElement('p');
                txt.className = 'desc-text';
                txt.innerHTML = `The weight of the object on <span class='bold'>${val.toUpperCase()}</span>`
                desc.appendChild(txt);

                const wt = document.createElement('div');
                const input = document.querySelector('#mass');
                wt.className = 'desc-wt';
                wt.innerHTML = `<h4>${(weight_factor[i]*input.value).toFixed(2)} Kg</h4>`;
                desc.appendChild(wt);
                break
            }
            i++;
        }
    }
})