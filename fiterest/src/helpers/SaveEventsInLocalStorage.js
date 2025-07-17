export const SaveEventsInLocalStorage = (keyOfItemInStorage,newItemInStorage) => {

        let itemsInLocalStorage = JSON.parse(localStorage.getItem(keyOfItemInStorage))

        if(Array.isArray(itemsInLocalStorage)){
            itemsInLocalStorage.push(newItemInStorage)
        }else{
            itemsInLocalStorage = [newItemInStorage]
        }

        localStorage.setItem(keyOfItemInStorage,JSON.stringify(itemsInLocalStorage))
        
        return newItemInStorage
    }