const fetchData = (callback) => {
    setTimeout(()=>{
        callback('Data retrived successfully');
    },2000)
};

console.log('Start fetching data...');

fetchData((data) =>{
    console.log(data);
});


console.log('End of the Code exit 0');