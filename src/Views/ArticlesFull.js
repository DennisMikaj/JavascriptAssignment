import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Oval from '../assets/images/OvalCopy.svg'
import NewsAndArticles from '../Components/NewsAndArticles'
import BottomLinks from '../Components/BottomLinks'
import SearchRecentPosts from '../Components/SearchRecentPosts'
import RecentPosts from '../Components/RecentPosts'

const ArticlesFull =  () => {

    const {id} = useParams();
    const [article, setArticle] = useState(null)


    const formatArticleDate = (dateString) => {
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
                const articleData = await result.json()
                articleData.published = formatArticleDate(articleData.published)
                setArticle(articleData)
            } catch(error) {
                console.log(error)
                return [];
            }
        }

        fetchArticle()
    }, [id])


return (
    <div className="wrapper">
    <Header/>
    <main>
        <div className="container news-flex">
    {article ? (
        <div key={article.id} className="container-xl">
        <h2>{article.title}</h2>
        <div className="article-info">
        <p>{article.published}</p>
        <img src={Oval} alt="yellow circle"></img>
        <p>{article.category}</p>
        <img src={Oval} alt="yellow circle"></img>
        <p>{article.author}</p>
        </div>
        <img className="article-full-img" src={article.imageUrl} loading="lazy" alt="article"></img>
        <p>{article.content}</p>
        </div>
    ) : (
    <p>No Article To show</p>
    )
    }
    <div className="news-column">
    <SearchRecentPosts/>
    <RecentPosts/>
    </div>
    </div>
    <div className="news-background">
    <NewsAndArticles/>
    </div>
    <BottomLinks/>
    </main>
    <Footer/>
    </div>
  )

}
export default ArticlesFull