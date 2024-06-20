let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

let peopleLeft = document.getElementById("amount_left")
let departure = document.getElementById("different_entries")
let amount_counted = 0

let tasbeehTotal = document.getElementById("tasbeeh_Amount");
let tasbeehSaved = document.getElementById("tasbeeh_entries");
let countTasbeeh = 0

function deeds_increment() {
            countTasbeeh += 1;
            tasbeehTotal.textContent = countTasbeeh;
        }

function tasbeeh_save() {
        let final_total = countTasbeeh + "^__^";
        tasbeehSaved.textContent += final_total + " ";
        tasbeehTotal.textContent = 0;
        countTasbeeh = 0;
        
    }





















function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function increment_amount() {
    amount_counted +=1
    peopleLeft.textContent = amount_counted
}
function save_amount () {
    let countTimes = amount_counted + " # "
    departure.textContent += countTimes
    peopleLeft.textContent = 0
    amount_counted = 0
    
    
}
