import React, {useEffect, useState} from 'react'



function formatPublishedDate(published) {
    const date = new Date(published);
    const day = date.getDate();
    const month = date.toLocaleString('defaul', {month: 'short'});

    return {day, month};
}

const GetArticles = async () => {
    try {
        const result = await fetch("https://win23-assignment.azurewebsites.net/api/articles")
        const articles = await result.json()
        return articles;
        // for (let article of articles) {
        //     return articles
        // }
    } catch(error) {
        console.log(error)
        return [];
    }
}

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(()  => {
        async function fetchArticles() {
            const fetchedArticles = await GetArticles();
            setArticles(fetchedArticles);
        }

        fetchArticles();
    }, []);


    const newestArticle = articles.slice(0,3);

    return (
        <div className="articles-images">
            {newestArticle.map((article) => {
                const {day, month} = formatPublishedDate(article.published);

                return(

                <div key={article.id} className="boxes">
    <img src={article.imageUrl} loading="lazy" alt="Woman at work"/>
    <div className="date-box">
    <h5>{day}</h5>
    <p>{month}</p>
</div>
    <p id="business-text">{article.category}</p>
    <h5>{article.title}</h5>
    <p id="business-text">{article.content}</p>



            
            </div>
            )})}
        </div>
    )
}

export default ArticleList;

// const GetArticle = async (id) => {
//     try {
//         const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
//         const article = await result.json()
//         return article
//     } catch(error) {
//         console.log(error)
//     }
// }


// const displayArticles = async () => {
//     const articles = await GetArticles()

//     const articlesContainer = document.querySelector(".articles");
// articlesContainer.innerHTML = articles.map((article) => `
// <div className="boxes">
//     <img src=${article.imageUrl} loading="lazy" alt="Woman at work"/>
//     <div className="date-box">
//     <h5>25</h5>
//     <p>Mar</p>
// </div>
//     <p id="business-text">Business</p>
//     <h5>${article.title}</h5>
//     <p id="business-text">${article.content}</p>
// </div>
//     `).join('')
   
// }
// export default GetArticles
// export default displayArticles