const { reject } = require("lodash")

const fetchData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Data retrived Successfully");
        }, 3000)
    })
};

console.log('Start fetching Data...');

fetchData().then((data) =>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
});

console.log('End of the Code exit code 0');