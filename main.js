async function loadVideos() {
    const response = await fetch("videos.json");
    const videos = await response.json();

    const container = document.getElementById("videos-container");

    videos.forEach(video => {
        const div = document.createElement("div");
        div.className = "video";

        if(video.youtubeId){
            div.innerHTML = `
                <iframe
                    src="https://www.youtube.com/embed/${video.youtubeId}"
                    allowfullscreen>
                </iframe>
            `;
        } else {
            div.textContent = video.title;
        }

        container.appendChild(div);
    });
}

async function loadNews() {
    const response = await fetch("news.json");
    const news = await response.json();

    const container = document.getElementById("news-container");

    news.forEach(article => {
        const div = document.createElement("div");
        div.className = "news";
        div.textContent = article.title;

        container.appendChild(div);
    });
}

loadVideos();
loadNews();
