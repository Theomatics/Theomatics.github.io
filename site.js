console.log("The js file is linked correctly!")

// Assignment 3: Display a welcome message based on time of day
const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?

const welcomeMessage = document.querySelector('#welcome')
if (isMorning) {
    welcomeMessage.textContent = 'Good Morning!'
} else if (isAfternoon) {
    welcomeMessage.textContent = 'Good Afternoon!'
} else {
    welcomeMessage.textContent = 'Good Evening!'
}

// Assignment 4: Store a secret message in localStorage
const key = "It's a secret to everybody."
const secret = 'This message is feeling very insecure.'
localStorage.setItem(key, secret)

// Assignment 5: Rotating images using click events
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// Previous button - send the images to the left
document.querySelector('#prev').addEventListener('click', () => {
    currentImage++
    showImages()
})

// Next button - send the images to the right
document.querySelector('#next').addEventListener('click', () => {
    currentImage--
    showImages()
})

// Have the images auto-rotate every 5 seconds
setInterval(() => {
    currentImage--
    showImages()
}, 5000)