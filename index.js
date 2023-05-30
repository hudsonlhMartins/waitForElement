const waitForElement = async ({
    selector, 
    tried = 10, 
    jquery = true
}) =>{
    if(jquery){
        const element = $(selector)
        if(tried ===0){
            return Promise.reject(null)
        }
        if(!element.length){
            setTimeout(async()=>{
                await waitForElement(selector, tried-1, jquery)
            }, 100)
            return
        }
        return Promise.resolve(element)
        
    }

    const element  = document.querySelector(selector)
    if(tried ===0){
        return Promise.reject(null)
    }
    if(!element){
        setTimeout(async()=>{
            await waitForElement(selector, tried-1, jquery)
        }, 100)
        return
    }
    return Promise.resolve(element)
}