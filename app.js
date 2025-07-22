import express from 'express';
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev";

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

let categories = [];
let jokeLanguages = [];


(async () => {
  const categoriesResponse = await axios.get(API_URL + "/categories");
  categories = categoriesResponse.data.categories;

  const languagesResponse = await axios.get(API_URL + "/languages");
  const jokeLanguageCodes = languagesResponse.data.jokeLanguages;
  const possibleLanguages = languagesResponse.data.possibleLanguages;
  jokeLanguages = possibleLanguages.filter(lang => jokeLanguageCodes.includes(lang.code));
})();

app.get("/", async (req, res) => {
    try {
         res.render("index.ejs", {categories: categories, languages: jokeLanguages });

    } catch (error) {
        console.log(error);
    }
});

app.post("/", async (req, res) => {   
    try {
        const { category, ...queryParams } = req.body;
        const categoryPath = Array.isArray(category) ? category.join(',') : 'Any';
        const jokeResponse = await axios.get(`https://v2.jokeapi.dev/joke/${categoryPath}`, {
            params: queryParams,
        }); 

        console.log(`https://v2.jokeapi.dev/joke/${categoryPath}`);
        
        res.render("index.ejs", {categories: categories, languages: jokeLanguages, joke: jokeResponse.data});
        
    } catch (error) {
        console.log(error);
        res.render("index.ejs", {
            error: "Ups! We couldn't find a Joke for you",
            categories,
            languages: jokeLanguages,
        });
    }
});


app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});