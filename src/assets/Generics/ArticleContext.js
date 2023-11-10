import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const ApiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
    getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(ApiUrl)
        setArticles(await result.json())
    }
    const getArticle = async (id) => {
        const result = await fetch(`${ApiUrl}/${id}`)
        setArticle(await result.json())
    }

    return (
        <ArticleContext.Provider value={{article, articles, getArticles, getArticle}}>
            {children}
        </ArticleContext.Provider>
    )

}
