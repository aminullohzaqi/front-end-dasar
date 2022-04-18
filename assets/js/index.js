const btnTop = document.getElementById("btnTop")
const navigation = document.getElementsByTagName("nav")[0]
const sectionPengertian = document.getElementById("pengertian")
const sectionSatelit = document.getElementById("citra-satelit")
const sectionRadar = document.getElementById("citra-radar")

const navigationOffset = navigation.offsetHeight + 20
const sectionPengertianOffset = sectionPengertian.offsetTop
const sectionSatelitOffset = sectionSatelit.offsetTop
const sectionRadarOffset = sectionRadar.offsetTop

window.onscroll = function () {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block"
    } else {
        btnTop.style.display = "none"
    }
}

function backToTopFunction () {
    document.documentElement.scrollTop = 0
}

function toSectionPengertian() {
    window.scrollTo({
        top: sectionPengertianOffset - navigationOffset
    })
}

function toSectionSatelit() {
    window.scrollTo({
        top: sectionSatelitOffset - navigationOffset
    })
}

function toSectionRadar() {
    window.scrollTo({
        top: sectionRadarOffset - navigationOffset
    })
}