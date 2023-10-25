// Variables
const ratingCard = document.querySelector(".rating-card");
const thankingCard = document.querySelector(".thanking-card");

const ratingBtn = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit");

const ratingResults = document.querySelector(".rating-results");

const submitMethod = () => {
  // Submit Button Functionality
  submitBtn.addEventListener("click", () => {
    ratingCard.classList.add("hidden"); // Adds Hidden Class To ratingCard
    thankingCard.classList.remove("hidden"); // Removes Hidden Class From thankingCard
    // Hidden Class Description From CSS File
  });
};
// Submit Results
submitMethod();

// Clickable buttons + Rating buttons functionality
ratingBtn.forEach((e) => {
  // For all rating buttons
  e.addEventListener("click", (event) => {
    // Clicking event

    // This is what happens when clicked
    ratingBtn.forEach((btn) => {
      // Clicks for all rating buttons
      btn.classList.remove("active"); // Removes .active from every rating button
      event.target.classList.add("active"); // Adds .active to the current button

      const choice = document.querySelector(".active").innerHTML; // Stores innerHTML of new active class added into the choice variable
      ratingResults.innerHTML = `You selected ${choice} out of 5`; // Displays this message as a function of the choice variable
    });
  });
});
