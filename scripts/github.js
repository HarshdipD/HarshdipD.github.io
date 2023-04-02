document.addEventListener('DOMContentLoaded', function (event) {
    const githubRepos = document.getElementById("github-repos");

    fetch('https://api.github.com/users/HarshdipD/repos?per_page=30&sort=created&type=owner')
        .then((response) => response.json())
        .then((repos) => {
            githubRepos.innerHTML = '';

            arr = ['eztrackr', 'hub', 'WDBorderTraffic', 'share-the-ride']

            repos.forEach((repo) => {
                if(arr.includes(repo.name)) {
                    const tile = document.createElement("a");
                    tile.className = "tile";
                    tile.setAttribute("href", repo.html_url);
                    tile.setAttribute("target", "_blank");

                    const pill = document.createElement("div");
                    pill.className = "pill";
                    pill.innerText = repo.name === 'share-the-ride' ? 'Share the Ride' : repo.name;
                    tile.appendChild(pill);

                    const description = document.createElement("div");
                    description.className = "description";
                    description.innerText = repo.description ?? "";
                    tile.appendChild(description);

                    githubRepos.appendChild(tile);
                }
            });
        });
});
