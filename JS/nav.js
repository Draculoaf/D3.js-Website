const navList = [
  { title: "home", link: "/IM3B/index.html" },
  { title: "design", link: "/IM3B/design.html" },
  { title: "blog", link: "/IM3B/blog.html" },
  { title: "art", link: "/IM3B/data_art.html" },
  { title: "visualisation", link: "/IM3B/data_vis.html" },
];

const navigations = document.getElementsByClassName("navigation");

for (var i = 0; 1 < navigations.length; i++) {
  let list = document.createElement("ul");

  for (var j = 0; j < navList.length; j++) {
    let listItemLink = document.createElement("a");
    listItemLink = navList[j].title;
    listItemLink.setAttribute("href", navList[j].link);
    let listItem = document.createElement("li");
    listItem.appendChild(listItemLink);
    list.append(listItem);
  }

  navigations[i].appendChild(list);
}
