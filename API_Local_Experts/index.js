window.addEventListener("DOMContentLoaded", () => {
    map_frame = document.querySelector(".test-frame")
    map_frame.setAttribute("height", 1000)
    fetch(`http://localhost:3000/api/v1/experiences/4`)
    .then(r => r.json())
    .then(experience => {
        map_frame.setAttribute("src", `https://maps.google.com/maps?q=${experience.start_lat}%2C${experience.start_lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    })
})



// console.log(map_frame);