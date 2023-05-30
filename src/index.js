const $links = document.getElementById("links");
const $name = document.querySelector("h1");
const $h2 = document.querySelector("h2");
const $p = document.querySelector("p");

const data = {
  name: "Diego Iberri R.",
  nickname: "diegooiberri",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "platzi",
      url: "https://platzi.com/p/",
      username: "creativoo",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
      username: "creativoo",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      username: "creativoo",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "diegooiberri",
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "diegooiberri",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/",
      username: "creativoo",
    },
  ],

  links: [
    {
      name: "Sitio Web",
      url: "https://github.com/creativoo",
      color: "blue",
      emoji: "🌐",
    },
    {
      name: "Certificaciones",
      url: "https://platzi.com/p/creativoo/",
      color: "blue",
      emoji: "👨‍💻",
    },
    {
      name: "Blog",
      url: "https://besocialmx.wordpress.com/",
      color: "violet",
      emoji: "📖",
    },
  ],
  footer: "Made with Love in México",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links
    ?.map((link) => {
      return ` <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
            <a
              class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
              href="${link.url}"
              target="_blank">
              ${link.name}
            </a>
            <span>${link.emoji}</span>
          </div>`;
    })
    .join("");
  let newIten = document.createElement("section");
  newItem.innerHTM = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};

main();
