const array=[-12, -8 , -7, -5, 2, 4, 5, 11, 15];

const new_array=[];
for(let n of array){
    new_array.push(n**2);
}

new_array.sort((a,b)=>a-b)

console.log(new_array);