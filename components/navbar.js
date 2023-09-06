export const navbar = document.createElement("nav")
const registrationA = document.createElement("a")
registrationA.textContent = "Registration"
registrationA.href = "/index.html"
const dashboardA = document.createElement("a")
dashboardA.textContent = "Dashboard"
dashboardA.href = "/dashboard.html"
const bookingA = document.createElement("a")
bookingA.textContent = "Bookings"
bookingA.href = "/booking.html"

navbar.append(registrationA,dashboardA,bookingA)
