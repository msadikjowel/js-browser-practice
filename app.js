// 1. 
const threePointFive = () => {
    // console.log('output after 3.5 seconds')

}
setTimeout(threePointFive, 3500)

// 2.
const sum = () => {
    const add = prompt("give a number, it will be added with 200")
    alert(parseFloat(add) + 200)
}

// 3. 
const href = () => {
    const WantLocation = confirm("Do you want to know your browser location?")
    if (WantLocation) {
        console.log(location.href)
        alert(location.href)
    }
    else {
        alert('Sleep now')
    }
}

