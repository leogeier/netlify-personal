function create_td(content) {
  const td_tag = document.createElement("td");
  const text = document.createTextNode(content);
  td_tag.appendChild(text);
  return td_tag;
}

window.onload = async () => {
  const scores = await ( await fetch("https://stuff.leonardgeier.com/highscore?count=9999") ).json();

  const table_tag = document.getElementById("leaderboard-body");
  for (let i = 0; i < scores.length; i++) {
    const {name, score} = scores[i];
    const tag = document.createElement("tr");
    tag.appendChild(create_td(String(i + 1) + "."));
    tag.appendChild(create_td(name));
    tag.appendChild(create_td(score));
    table_tag.appendChild(tag);
  }
};
