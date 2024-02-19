function createCounter() {
    let count = 1;
    while(count > 0) {
        console.log(count);
        count ++;
    }
    createCounter();
}

createCounter();