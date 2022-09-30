/*let lotto = [];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto)*/

let lotto = [];
for (let i = 0; i < 6; i++){
        let num = parseInt(Math.random() * 45 + 1);
        if (lotto.indexOf(num) === -1){
            lotto.push(num);
        }
    }
document.write(lotto)