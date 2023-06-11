let categoryListEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryListEl.length}`);

categoryListEl.forEach((el) =>
    console.log(
        `Category: ${el.firstElementChild.textContent}`,
        `Elements: ${el.lastElementChild.children.length}`
    ),
);