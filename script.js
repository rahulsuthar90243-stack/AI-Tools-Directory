
const search = document.querySelector("#search");

function displayTools(data) {
  const container = document.querySelector(".tools-container");
  container.innerHTML = "";

  if (data.lenght == 0) {
    container.innerHTML = "<p>No tool found</p>";
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
    document.getElementById(".tools-container").innerHTML = "";
    return;
  }

  const filtered = tools.filter((tool) =>
    tool.category.toLowerCase().includes(value),
  );

  displayTools(filtered);
});

const all = document.querySelector("#all");
all.addEventListener("click", () => {
  displayTools(tools);
});

