


const dummyApi = {
    showAccordion : true,
    showRandomColor: true,
    showDarkMode: true,
};


function featureFlagCall(){


    return new Promise((resolve, reject ) => {

        if(dummyApi){
            setTimeout(() => {
                    resolve(dummyApi)
            }, 500);
        }else{
            reject('an error occured')
        }
    })
}

export default featureFlagCall;