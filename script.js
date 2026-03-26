
const search = document.querySelector("#search");

// Show only 10 tools on page load
function showInitialTools(){
  const firstTen = tools.slice(0, 10);
  displayTools(firstTen);
}



function displayTools(data) {
  const container = document.querySelector(".tools-container");
  container.innerHTML = "";

 if (data.length === 0) {
  container.innerHTML = `<div class="tah">No tool found</div>`;
  return;
}

  data.forEach((tool) => {
    const card = `
        <div class="card">
                        
          <div class="title">
           <img src="${tool.img}">
           <h3>${tool.name}</h3>
        </div>

        <div class="desc">
            <p>${tool.desc}.</p>
        </div>

        <div class="actions">
            <a href="${tool.link}" target="_blank">
            <button class="btn fill">Visit ↗</button>
            </a>
            <button class="btn">Imágenes</button>
            <div class="icon-btn">❤</div>
            </div>
        </div>
    `;

    container.innerHTML += card;
  });
};

// displayTools(tools);
document.querySelector("#search").addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();
  if (value === "") {
    showInitialTools();
    return;
  }

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(value) ||
    tool.category.toLowerCase().includes(value)
  );

  displayTools(filtered);
});

// const all = document.querySelector(".all");
// all.addEventListener("click", () => {
//   displayTools(tools);
// });


showInitialTools();


const buttons = document.querySelectorAll("#button button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.className.toLowerCase();

    if (category === "all") {
      displayTools(tools);
      return;
    }

    const filtered = tools.filter(tool =>
      tool.category.toLowerCase() === category
    );

    displayTools(filtered);
  });
});