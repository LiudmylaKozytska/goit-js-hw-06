const num = document.querySelectorAll('.item');
console.log(`Number of category: ${num.length}`);


num.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});


