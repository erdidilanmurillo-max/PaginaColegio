window.onbeforeunload = () => {
    window.scrollTo(0,0)
}

window.onload = () => {
    window.scrollTo(0,0)
}

// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader")

    setTimeout(() => {

        loader.style.opacity = "0"
        loader.style.visibility = "hidden"

    }, 1500)

})


// NAVBAR

const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {

    navbar.classList.toggle("active", window.scrollY > 50)

})


// MENU RESPONSIVE

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle")
    const navLinks = document.querySelector(".nav-links")

    if(menuToggle && navLinks){

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active")

        })

    }

})

// DROPDOWN MOBILE

const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(drop => {

    drop.addEventListener("click", () => {

        if(window.innerWidth <= 992){

            drop.classList.toggle("active")

        }

    })

})

// =========================================
// FUNCION SEGURA
// =========================================

function safeAddEvent(element, event, callback){

    if(element){

        element.addEventListener(event, callback)

    }

}


window.addEventListener("load", () => {

    const popup = document.getElementById("popup")
    const closePopup = document.getElementById("closePopup")
    const popupButton = document.getElementById("popupButton")

    // =========================
    // MOSTRAR DESPUÉS DEL LOADER
    // =========================

    setTimeout(() => {

        if(popup){

            popup.classList.add("show")

        }

    }, 1600) // mismo tiempo que tu loader (1500ms)

    // =========================
    // CERRAR POPUP
    // =========================

    function close(){

        if(popup){

            popup.classList.remove("show")

        }

    }

    closePopup?.addEventListener("click", close)
    popupButton?.addEventListener("click", close)

})
// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault()

        const target = document.querySelector(this.getAttribute("href"))

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            })

        }

    })

})


// =========================
// CALENDARIO
// =========================

const monthYear = document.getElementById("monthYear")
const calendarDates = document.getElementById("calendarDates")
const eventBox = document.getElementById("eventBox")

const prevMonth = document.getElementById("prevMonth")
const nextMonth = document.getElementById("nextMonth")

// FECHA ACTUAL

const realToday = new Date()

// EL CALENDARIO SIEMPRE INICIA EN EL MES ACTUAL

let currentDate = new Date(
    realToday.getFullYear(),
    realToday.getMonth()
)

const events = {

    "2026-1-1":"Año Nuevo",
    "2026-1-12":"Regreso de docentes",
    "2026-1-19":"Inicio de clases",

    "2026-2-14":"San Valentín",

    "2026-3-23":"Día del Agua",
    "2026-3-29":"Domingo de Ramos",

    "2026-4-2":"Jueves Santo",
    "2026-4-3":"Viernes Santo",
    "2026-4-23":"Día del Idioma",

    "2026-5-1":"Día del Trabajo",
    "2026-5-15":"Entrega de boletines",
    "2026-5-24":"Día de María Auxiliadora",

    "2026-6-8":"Corpus Christi",
    "2026-6-15":"Sagrado Corazón",
    "2026-6-19":"Salida a vacaciones",

    "2026-7-20":"Día de la Independencia",

    "2026-8-7":"Batalla de Boyacá",
    "2026-8-17":"Asunción de la Virgen",

    "2026-9-21":"Semana Cultural",
    "2026-9-25":"Día de la Convivencia",

    "2026-10-12":"Día de la Raza",
    "2026-10-31":"Halloween Escolar",

    "2026-11-2":"Todos los Santos",
    "2026-11-16":"Independencia de Cartagena",

    "2026-12-4":"Clausura escolar",
    "2026-12-8":"Día de las Velitas",
    "2026-12-25":"Navidad"

}

function renderCalendar(){

    calendarDates.innerHTML = ""

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const lastDate = new Date(year, month + 1, 0).getDate()

    const monthNames = [
        "Enero","Febrero","Marzo","Abril",
        "Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre"
    ]

    calendarDates.style.animation = "none"

    setTimeout(() => {

        calendarDates.style.animation = "calendarFade 0.4s ease"

    }, 10)

    monthYear.innerHTML = `
        ${monthNames[month].toUpperCase()}
        <span>${year}</span>
    `

    for(let i = 0; i < firstDay; i++){

        const empty = document.createElement("div")

        empty.classList.add("empty-day")

        calendarDates.appendChild(empty)

    }

    for(let day = 1; day <= lastDate; day++){

        const date = document.createElement("div")

        date.innerText = day

        const fullDate = `${year}-${month + 1}-${day}`

        if(
            day === realToday.getDate() &&
            month === realToday.getMonth() &&
            year === realToday.getFullYear()
        ){

            date.classList.add("today")

        }

        if(events[fullDate]){

            date.classList.add("event")

        }

        date.addEventListener("click", () => {

            if(events[fullDate]){

                eventBox.innerHTML = `
                    <h3>${day} de ${monthNames[month]}</h3>
                    <p>${events[fullDate]}</p>
                `

            }else{

                eventBox.innerHTML = `
                    <h3>${day} de ${monthNames[month]}</h3>
                    <p>No hay eventos programados.</p>
                `

            }

        })

        calendarDates.appendChild(date)

    }

}

renderCalendar()

// BOTONES

nextMonth.addEventListener("click", () => {

    currentDate.setMonth(currentDate.getMonth() + 1)

    renderCalendar()

})

prevMonth.addEventListener("click", () => {

    currentDate.setMonth(currentDate.getMonth() - 1)

    renderCalendar()

})


// =========================
// SCROLL REVEAL
// =========================

ScrollReveal().reveal('.hero-content',{

    distance:'60px',
    duration:1800,
    delay:200,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.hero-links',{

    distance:'40px',
    duration:1500,
    delay:300,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.social-container',{

    distance:'40px',
    duration:1500,
    delay:200,
    origin:'left',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.stat-box',{

    distance:'50px',
    duration:1600,
    interval:200,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.values-title',{

    distance:'50px',
    duration:1600,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.value-card',{

    distance:'40px',
    duration:1400,
    interval:150,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.school-calendar',{

    distance:'60px',
    duration:1800,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('footer',{

    distance:'50px',
    duration:1500,
    origin:'bottom',
    opacity:0,
    reset:false
    

})

ScrollReveal().reveal('.popup-content',{

    distance:'50px',
    duration:1600,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.value-popup-box',{

    distance:'60px',
    duration:1700,
    origin:'bottom',
    opacity:0,
    reset:false

})

ScrollReveal().reveal('.calendar-popup-content',{

    distance:'60px',
    duration:1700,
    origin:'bottom',
    opacity:0,
    reset:false

})

// =========================
// CONTADOR PREMIUM SCROLL
// =========================

const counters = document.querySelectorAll(".counter")

let countersStarted = false

function startCounters(){

    if(countersStarted) return

    countersStarted = true

    counters.forEach(counter => {

        const target = Number(counter.dataset.target || 0)

        let current = 0

        // MAS LENTO
        const step = Math.max(1, target / 180)

        function updateCounter(){

            current += step

            if(current < target){

                counter.innerHTML = `
                    <span class="plus">+</span>${Math.floor(current)}
                `

                // VELOCIDAD MAS LENTA
                setTimeout(() => {

                    requestAnimationFrame(updateCounter)

                }, 18)

            }else{

                counter.innerHTML = `
                    <span class="plus">+</span>${target}
                `
            }

        }

        updateCounter()

    })

}


// ========================================
// SOLO CUANDO BAJE A VER LA SECCION
// ========================================

const statsSection = document.querySelector(".stats-section")

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounters()

        }

    })

},{
    
    threshold:0.55

})

if(statsSection){

    observer.observe(statsSection)

}

// ========================================
// POPUP VALORES
// ========================================

const valueCards = document.querySelectorAll(".value-modern-card");

const valuePopup = document.getElementById("valuePopup");
const valuePopupBox = document.getElementById("valuePopupBox");

const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const closeValuePopup = document.getElementById("closeValuePopup");

if(
    valuePopup &&
    valuePopupBox &&
    popupTitle &&
    popupText &&
    closeValuePopup
){

    valueCards.forEach(card => {

        card.addEventListener("click", () => {

            const color = card.getAttribute("data-color");
            const title = card.getAttribute("data-title");
            const text = card.getAttribute("data-text");

            valuePopupBox.style.background = color;

            popupTitle.innerText = title;
            popupText.innerText = text;

            valuePopup.classList.add("active");

        });

    });

    closeValuePopup.addEventListener("click", () => {

        valuePopup.classList.remove("active");

    });

    valuePopup.addEventListener("click", (e) => {

        if(e.target === valuePopup){

            valuePopup.classList.remove("active");

        }

    });

}




// ========================================
// ANIMACION VALORES AL HACER SCROLL
// ========================================

const valueObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-value");

        }

    });

},{
    threshold:0.2
});

valueCards.forEach((card)=>{

    valueObserver.observe(card);

});




// ========================================
// ANIMACION LOGO VALORES
// ========================================

const valuesLogo = document.querySelector(".values-logo");

if(valuesLogo){

    const logoObserver = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-logo");

            }

        });

    },{
        threshold:0.3
    });

    logoObserver.observe(valuesLogo);

}




// ========================================
// ANIMACION TITULO Y TEXTO
// ========================================

const valuesTitle = document.querySelector(".values-title-modern");
const valuesText = document.querySelector(".values-text");

if(valuesTitle){

    const titleObserver = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-title");

            }

        });

    },{
        threshold:0.2
    });

    titleObserver.observe(valuesTitle);

}

if(valuesText){

    const textObserver = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-text");

            }

        });

    },{
        threshold:0.2
    });

    textObserver.observe(valuesText);

}

// =========================
// POPUP CALENDARIO
// =========================

const openCalendar = document.getElementById("openCalendar")
const calendarPopup = document.getElementById("calendarPopup")
const closeCalendar = document.getElementById("closeCalendar")

if(openCalendar && calendarPopup && closeCalendar){

    // ABRIR

    openCalendar.addEventListener("click", () => {

        calendarPopup.classList.add("active")

    })

    // CERRAR

    closeCalendar.addEventListener("click", () => {

        calendarPopup.classList.remove("active")

    })

    // CERRAR AFUERA

    calendarPopup.addEventListener("click", (e) => {

        if(e.target === calendarPopup){

            calendarPopup.classList.remove("active")

        }

    })

}

