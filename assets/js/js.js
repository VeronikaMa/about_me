

const moreInfo= document.getElementsByClassName('dropdown')[0];

moreInfo.addEventListener('click', e => {
    let description = document.getElementById('description');
    if(description.style.display === "none" ){
        description.style.display = 'block'
        moreInfo.style.fontWeight = 'lighter'

    }else {
        description.style.display = "none"
        moreInfo.style.fontWeight = 'bold'
    }
});