const totalRooms = 20;
const storageKey = "hmsBookings";

function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slides.length || !nextBtn || !prevBtn) {
    return;
  }

  let currentSlide = 0;
  let interval = setInterval(nextSlide, 3000);

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  }
}

function getBookings() {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : [];
}

function saveBookings(bookings) {
  localStorage.setItem(storageKey, JSON.stringify(bookings));
}

function renderBookingSummary(bookings) {
  const bookingCount = document.querySelector("#bookingCount");
  const roomStatus = document.querySelector("#roomStatus");
  const bookedRooms = document.querySelector("#bookedRooms");
  const availableRooms = Math.max(0, totalRooms - bookings.length);

  if (bookingCount) {
    bookingCount.textContent = bookings.length;
  }
  if (bookedRooms) {
    bookedRooms.textContent = bookings.length;
  }
  if (roomStatus) {
    roomStatus.textContent = availableRooms > 0 ? `${availableRooms} rooms available` : "Fully booked";
  }
}

function renderBookingList(bookings) {
  const bookingList = document.querySelector("#bookingList");
  const noBookingsText = document.querySelector("#noBookingsText");

  if (!bookingList) {
    return;
  }

  if (!bookings.length) {
    bookingList.innerHTML = "";
    if (noBookingsText) {
      noBookingsText.style.display = "block";
    }
    return;
  }

  if (noBookingsText) {
    noBookingsText.style.display = "none";
  }

  bookingList.innerHTML = bookings
    .map(
      (booking, index) => `
        <li class="booking-item">
          <div>
            <strong>${booking.studentName}</strong>
            <span class="booking-meta">${booking.service} &#8226; Room ${booking.roomNo} &#8226; ${booking.date}</span>
          </div>
          <button type="button" class="delete-booking" data-index="${index}">Delete</button>
        </li>
      `
    )
    .join("");

  bookingList.querySelectorAll(".delete-booking").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      deleteBooking(index);
    });
  });
}

function deleteBooking(index) {
  const bookings = getBookings();
  bookings.splice(index, 1);
  saveBookings(bookings);
  renderBookingSummary(bookings);
  renderBookingList(bookings);
}

function initBookingPage() {
  const bookingForm = document.querySelector("#bookingForm");

  if (!bookingForm) {
    return;
  }

  const bookings = getBookings();
  renderBookingSummary(bookings);
  renderBookingList(bookings);

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const studentName = formData.get("studentName").trim();
    const studentId = formData.get("studentId").trim();
    const roomNo = formData.get("roomNo").trim();
    const service = formData.get("service").trim();
    const details = formData.get("details").trim();

    if (!studentName || !studentId || !roomNo || !service) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    const newBooking = {
      studentName,
      studentId,
      roomNo,
      service,
      details,
      date: new Date().toLocaleDateString(),
    };

    const currentBookings = getBookings();
    currentBookings.push(newBooking);
    saveBookings(currentBookings);

    renderBookingSummary(currentBookings);
    renderBookingList(currentBookings);
    bookingForm.reset();
  });
}

function initAuthForms() {
  const loginForm = document.querySelector("#loginForm");
  const registerForm = document.querySelector("#registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Login is not connected to a server in this demo. Use this form as a placeholder for college projects.");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Registration is not connected to a server in this demo. Use this form as a placeholder for college projects.");
    });
  }
}

function initPage() {
  initSlider();
  initBookingPage();
  initAuthForms();
}

document.addEventListener("DOMContentLoaded", initPage);
