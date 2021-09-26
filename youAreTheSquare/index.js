const isSquare = (num) => {
   
    for(let i = 0; i <= num; i++ ){
        if(i * i === num){
            return true;
        }
        if(i*i > num){
            return false;
        }
    }
    return false;

}



for (let j=0; j< 50; j++ ){
    console.log(j, isSquare(j));
}