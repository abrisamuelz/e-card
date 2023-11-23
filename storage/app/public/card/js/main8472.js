const event_id = $("#event_id").val();
var limit = $("#limit").val();
var language = $("#language").val();

$(function () {
    $("#rsvp_form").on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr("action"),
            method: $(this).attr("method"),
            data: new FormData(this),
            processData: false,
            dataType: "json",
            contentType: false,
            success: function (data) {
                if (data.status === 1) {
                    $("#rsvp_form")[0].reset();
                    rsvp_success();
                    $("#rsvp").click();
                } else if (data.status === 2) {
                    rsvp_end();
                } else {
                    rsvp_max();
                }
            },
        });
    });
});

$(function () {
    $("#guestbook_form").on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr("action"),
            method: $(this).attr("method"),
            data: new FormData(this),
            processData: false,
            dataType: "json",
            contentType: false,
            success: function (data) {
                if (data.status) {
                    $("#guestbook_form")[0].reset();
                    guestbook_success();
                    $("#book").click();
                    load_guestbook(event_id);
                    closeModal();
                }
            },
        });
    });
});

// RSVP Section
function rsvp_change(select) {
    const rsvp_hidden = document.getElementById("rsvp_hidden");

    if (select.value == "Tidak Hadir") rsvp_hidden.style.display = "none";
    else rsvp_hidden.style.display = "block";
}

$("#rsvp-btn-1, #rsvp-btn-2").click(function () {
    $("#rsvp-button").addClass("hidden");
    $("#rsvp-form").removeClass("hidden");

    if (this.id === "rsvp-btn-2") {
        $("#rsvp_hidden").addClass("hidden");
        $("input[name=status]").val("Tidak Hadir");
    } else {
        $("#rsvp_hidden").removeClass("hidden");
        $("input[name=status]").val("Hadir");
    }
    $("#rsvpModal").removeClass("active");
    setTimeout(() => {
        $("#rsvpModal").addClass("active");
    }, 10);
});

$("#cancel-rsvp").click(function () {
    show_rsvp_btn();
    $("#rsvpModal").removeClass("active");
    setTimeout(() => {
        $("#rsvpModal").addClass("active");
    }, 10);
});

function rsvp_adult(select) {
    var newLimit = limit - select.value;
    var currLimit = $("#child_limit").val();

    $("#child_limit").empty();

    for (var i = 0; i <= newLimit; i++)
        $("#child_limit").append(
            "<option value='" +
            i +
            "'" +
            (currLimit == i ? "selected" : "") +
            ">" +
            i +
            "</option>"
        );
}

function rsvp_child(select) {
    var newLimit = limit - select.value;
    var currLimit = $("#adult_limit").val();

    $("#adult_limit").empty();

    for (var i = 1; i <= newLimit; i++)
        $("#adult_limit").append(
            "<option value='" +
            i +
            "'" +
            (currLimit == i ? "selected" : "") +
            ">" +
            i +
            "</option>"
        );
}

function rsvp_success() {
    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: "success",
        title: language === 'en' ? "Attendance status successfully sent!" : "Status kehadiran berjaya dihantar",
    });

    show_rsvp_btn();
}

function rsvp_max() {
    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: "warning",
        title: language === 'en' ? "The number of guests has reached the maximum limit!" : "Jumlah tetamu telah mencapai had maksimum!",
    });
}

function rsvp_end() {
    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: "error",
        title: language === 'en' ? "RSVP ended!" : "RSVP telah tamat!",
    });
}

function show_rsvp_btn() {
    $("#rsvp-button").removeClass("hidden");
    $("#rsvp-form").addClass("hidden");
}

// End RSVP Section

function guestbook_success() {
    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: "success",
        title: language === 'en' ? "Your wish has been successfully sent!" : "Ucapan anda berjaya dihantar!",
    });
}

load_guestbook(event_id);

// Guestbook load data js
function load_guestbook(id) {
    $.ajax({
        url: "/guestbook/" + id,
        type: "get",
        datatype: "json",
    })
        .done(function (data) {
            // data json:
            // {"status":"success","data":[{"id":1,"event_id":"NQnIg2LnY1","nama":"John Doe","ucapan":"Lorem ipsum dolor sit amet, consectetur adipiscing elit nisl.","created_at":"2023-11-23T11:43:14.000000Z","updated_at":"2023-11-23T11:43:14.000000Z"},{"id":2,"event_id":"NQnIg2LnY1","nama":"Ricky","ucapan":"Lorem ipsum dolor sit amet, consectetur adipiscing elit nisl.","created_at":"2023-11-23T11:43:14.000000Z","updated_at":"2023-11-23T11:43:14.000000Z"}]}

            // data html:
            // var data_html = '<div class="guestbook"><div class="guestbook-main"><p class="guestbook-comment">Selamat melayari bahtera rumahtangga. Tahniah & Selamat Pengantin Baru Ani & Suami..</p><br><p class="guestbook-name pb-10">-Nurrul Akhmar-</p></div><div class="guestbook-main"><p class="guestbook-comment">Selamat pengantin baru buat dua sahabat ku ...moga kalian sentiasa dimurahkan rezeki diberikan kesihatan berpanjangan dan bahagia sampai ke anak cucu ...congrats lan & ani</p><br><p class="guestbook-name pb-10">-Muhammad Farihin-</p></div><div class="guestbook-main"><p class="guestbook-comment">Tahniah lan and ani, moga dimurahkan rezeki dan jodoh korang berpanjangan sehingga jannah <3</p><br><p class="guestbook-name pb-10">-Iffah Irdina-</p></div><div class="guestbook-main"><p class="guestbook-comment">Tahniah Mariani & Mazlan!! 🌸</p><br><p class="guestbook-name pb-10">-Mimi Azhar-</p></div></div>';
            
            //convert json to html 

            var datahtml = "";
            var i = 0;

            datahtml += '<div class="guestbook">';

            for (i = 0; i < data.data.length; i++) {
                datahtml +=
                    '<div class="guestbook-main"><p class="guestbook-comment">' +
                    data.data[i].ucapan +
                    '</p><br><p class="guestbook-name pb-10">-' +
                    data.data[i].nama +
                    "-</p></div>";
            }

            datahtml += "</div>";

            $("#wishes").html("");
            $("#wishes").append(datahtml);
            $(document).ready(function () {
                $(".guestbook").slick({
                    arrows: false,
                    dots: true,
                    infinite: false,
                    speed: 300,
                    adaptiveHeight: true,
                });
            });
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            // Display an alert if the AJAX request fails
            alert("No response from server");
        });
}

var startDiv = document.getElementsByClassName("start");
var mainDiv = document.getElementsByClassName("main-div");
var startOverlayDiv = document.getElementsByClassName("start-overlay");
var tutorialDiv = document.getElementsByClassName("tutorial-overlay");

var rsvpModal = document.getElementById("rsvpModal");
var rsvpModal2 = document.getElementById("rsvpModal2");
var contactModal = document.getElementById("contactModal");
var locationModal = document.getElementById("locationModal");
var bookModal = document.getElementById("bookModal");
var calendarModal = document.getElementById("calendarModal");
var moneygiftModal = document.getElementById("moneygiftModal");

var rsvpBtn = document.getElementById("rsvp");
var contactBtn = document.getElementById("contact");
var locationBtn = document.getElementById("location");
var bookBtn = document.getElementById("book");
var calendarBtn = document.getElementById("calendar");
var moneygiftBtn = document.getElementById("moneygift");

var closeBtn = document.getElementById("close-btn");

const btn = [
    rsvpBtn,
    contactBtn,
    locationBtn,
    bookBtn,
    calendarBtn,
    moneygiftBtn,
];
const modal = [
    rsvpModal,
    contactModal,
    locationModal,
    bookModal,
    calendarModal,
    moneygiftModal,
];

var featureMain = document.getElementsByClassName("feature-main");
var overlay = document.getElementsByClassName("overlay");

document.getElementById("rsvp").onclick = modalBtn;
document.getElementById("contact").onclick = modalBtn;
document.getElementById("location").onclick = modalBtn;
document.getElementById("book").onclick = modalBtn;
document.getElementById("calendar").onclick = modalBtn;
document.getElementById("moneygift").onclick = modalBtn;

if (document.getElementById("start-btn")) {
    document.getElementById("start-btn").onclick = startBtn;

    function startBtn(e) {
        startOverlayDiv[0].classList.add("animated");
        startOverlayDiv[0].classList.add("slideOutUp");

        setTimeout(() => {
            startDiv[0].remove();
            mainDiv[0].classList.remove("hidden");
            $(".gallery-content").slick("setPosition");
            $(".guestbook").slick("setPosition");

            if ($("#particles-js").length)
                initParticles($("#particle_color").val());

            if (document.getElementById("audio"))
                document.getElementById("audio").play();
        }, 750);

        if (localStorage.getItem("firstTime") != 1) {
            setTimeout(() => {
                tutorialDiv[0].classList.remove("hidden");
                tutorialDiv[0].classList.add("animated");
                tutorialDiv[0].classList.add("fadeIn");
            }, 2500);
            localStorage.setItem("firstTime", 1);
        }
    }
} else {
    setTimeout(() => {
        tutorialDiv[0].classList.remove("hidden");
        tutorialDiv[0].classList.add("animated");
        tutorialDiv[0].classList.add("fadeIn");
    }, 1500);
}

if (document.getElementById("tutorial-btn")) {
    document.getElementById("tutorial-btn").onclick = tutorialBtn;

    function tutorialBtn(e) {
        tutorialDiv[0].classList.add("animated");
        tutorialDiv[0].classList.add("fadeOut");
        setTimeout(() => {
            tutorialDiv[0].remove();
        }, 1000);
    }
}

function modalBtn(e) {
    var id = this.id;
    overlay[0].classList.add("active");
    overlay[0].classList.remove("preload");
    featureMain[0].classList.add("active");

    btn.forEach(function (e) {
        if (e.id == id) {
            if (e.classList.contains("active-link")) {
                overlay[0].classList.remove("active");
                e.classList.remove("active-link");
            } else {
                overlay[0].classList.add("active");
                e.classList.add("active-link");
            }
        } else {
            e.classList.remove("active-link");
        }
        show_rsvp_btn();
    });

    modal.forEach(function (e) {
        if (e.id.includes(id)) {
            if (e.classList.contains("active")) e.classList.remove("active");
            else {
                e.classList.add("active");
                $(".guestbook").slick("setPosition");
            }
        } else {
            e.classList.remove("active");
        }
    });
}

overlay[0].onclick = function () {
    closeModal();
};

closeBtn.onclick = function () {
    closeModal();
};

function closeModal() {
    btn.forEach(function (e) {
        e.classList.remove("active-link");
    });
    modal.forEach(function (e) {
        e.classList.remove("active");
    });
    contactModal.classList.remove("active");
    overlay[0].classList.remove("active");
    featureMain[0].classList.remove("active");
}

function copyAccount(data) {
    navigator.clipboard.writeText(data);
    copy_success();
}

function copy_success() {
    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
    });
    Toast.fire({
        icon: "success",
        title: "Copied to clipboard",
    });
}

function initParticles(color) {
    particlesJS(
        "particles-js",

        {
            particles: {
                number: {
                    value: 35,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: `${color}`,
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 10,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: false,
                    distance: 500,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "bottom-left",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: false,
                        mode: "bubble",
                    },
                    onclick: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 0.5,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 4,
                        duration: 0.3,
                        opacity: 1,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: false,
        }
    );
}
