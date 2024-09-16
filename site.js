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