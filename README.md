**⭐ Anime Search Web App**

A simple and responsive anime search application built with HTML, CSS, and Vanilla JavaScript. The app connects to an external Anime API (such as Jikan API) and allows users to search for anime titles, view cover images, descriptions, and essential details—all without any frameworks.

**📸 Features:**

1. 🔍 Search for any anime by keyword

2. ⚡ Fetch real-time data from a public API

3. 🎨 Responsive UI using pure CSS

4. 💡 Beginner-friendly codebase

**📚 Displays:**

1. Anime title

2. Cover image

3. Synopsis / description

**🛠️ Tech Stack:**
- HTML5:	Page structure
- CSS3: Layout & styling
- Vanilla JavaScript: Fetch API, DOM manipulation
- Anime API (Jikan API): Get anime search results

**📦 Installation & Setup:**

1. Clone the repository:

git clone https://github.com/your-username/anime-search-app.git


2. Navigate to the project folder:

cd anime-search-app


3. Open the index.html file in your browser:

Right-click → Open with Browser


4. No additional setup is required.

**🔗 API Used:**

This app uses the Jikan Anime API (Unofficial MyAnimeList API): 

https://api.jikan.moe/v4/anime?q={your-search}

Example request:
```
fetch(`https://api.jikan.moe/v4/anime?q=naruto`)
  .then(res => res.json())
  .then(data => console.log(data));
```

**🧠 What I Learned:**

1. While building this project, I improved my skills in:

2. Understanding REST APIs

3. Handling async JavaScript (fetch, promises)

4. Parsing JSON responses

5. DOM manipulation

6. Responsive layout using CSS

7. Debugging API errors and rate limits


