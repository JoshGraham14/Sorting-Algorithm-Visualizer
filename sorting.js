var nums = [95, 21, 71, 25, 85, 88, 3, 18, 34, 57, 75, 7, 94, 30, 49, 4, 83, 91, 61, 
    80, 24, 19, 55, 35, 86, 84, 64, 50, 27, 20, 98, 70, 44, 5, 42, 87, 90, 100, 28, 
    14, 13, 78, 62, 16, 15, 97, 43, 92, 54, 2, 77, 40, 59, 58, 23, 1, 22, 46, 93, 33, 
    39, 66, 48, 65, 37, 96, 67, 26, 53, 38, 79, 63, 60, 51, 31, 29, 41, 56, 9, 89, 47, 
    99, 82, 81, 45, 32, 36, 76, 69, 17, 74, 10, 6, 52, 68, 12, 72, 11, 73, 8]

// var nums = [15, 22, 23, 24, 10, 9, 12, 25, 8, 5, 13, 4, 7, 6, 3, 17, 20, 21, 14, 16, 11, 19, 2, 18, 1]

// sleep function to slow down the sort (and repaint the dom)
function sleep(time) {
    return new Promise(resolve => setTimeout(()=>resolve(), time));
}

// function to add a div (vertical black line) for each number in the list
function addElement(divSize) {
    const containerDiv = document.createElement('div')
    const newDiv = document.createElement('div')
    const newH3 = document.createElement('h3')
    newH3.innerHTML = divSize
    newDiv.style.width = '7px';
    const newHeight = (divSize * 3).toString(10)
    newDiv.style.height = newHeight + 'px'
    newDiv.style.backgroundColor = '#2274a5'
    newDiv.id = newHeight
    newDiv.classList.add('bar')
    containerDiv.classList.add('div-hover')
    containerDiv.classList.add('grow')
    newH3.classList.add('num-text')
    newH3.id = 'num-' + newHeight
    containerDiv.classList.add('bar-element')
    containerDiv.appendChild(newDiv)
    containerDiv.appendChild(newH3)
    document.getElementById('visual').appendChild(containerDiv)
}

function bubbleSort(arr) {
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}

function updateDiv(idx1, idx2) {
    // find the height of the two elements being swapped
    // the id of each div, is the height
    let height1 = (idx1 * 3).toString(10)
    let height2 = (idx2 * 3).toString(10)

    document.getElementById(height1).style.height = height2 + 'px'
    document.getElementById(height1).id = height2
    document.getElementById('num-' + height1).innerHTML = idx2
    document.getElementById('num-' + height1).id = 'num-' + height2

    document.getElementById(height2).style.height = height1 + 'px'
    document.getElementById(height2).id = height1
    document.getElementById('num-' + height2).innerHTML = idx1
    document.getElementById('num-' + height2).id = 'num-' + height1
}

async function bubbleSortVisual(arr) {
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            sliderSpeed = (100 - document.getElementById('speed-slider').value)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                updateDiv(arr[j], arr[j + 1])
            }
            await sleep(sliderSpeed)
        }
    }
}

var sliderSpeed = 50


// onclick event for sort button
document.getElementById('sort-btn').onclick = function() {
    bubbleSortVisual(nums);
}





// create a div for each number in the list
nums.forEach(addElement)
