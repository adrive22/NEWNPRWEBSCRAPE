import axios from "axios";

export default{
    //gets all articles
    getArticles: function(){
        return axios.get("/api/articles");
    },

    //gets articles with given id

    getArticles: function(id){
        return axios.get("api/articles/"+ id);
    },

    //deletes the article with a given id

    deleteArticle: function(id){
        return axios.delete("/api/article/" + id);
    },

    //saves a book to the article collection in the NPRreact database
    saveArticle: function(article){
        return axios.post("/api/books", article);
    }
};


