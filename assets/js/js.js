function HideList(className, elems) {
    // let description = document.getElementsByClassName(className)[0];
    for (const listElement of elems) {
        let id = listElement.id
        let objList = document.getElementsByClassName(id)[0];

        if (className === id) {
            if (objList.classList.contains('hide-list')) {
                objList.classList.remove('hide-list')
                listElement.classList.add('select-button')
            } else {
                objList.classList.add('hide-list')
                listElement.classList.remove('select-button')
            }
        } else if (!objList.classList.contains('hide-list')) {
            objList.classList.add('hide-list')
            listElement.classList.remove('select-button')
        }
    }
}

const lists = document.getElementsByClassName('dropdown')
for (const list of lists) {
    list.addEventListener('click', e => {
        let currentList = list.id
        HideList(currentList, lists)
    });
}

