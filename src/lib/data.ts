import ArticleModel, { IArticle } from "@/models/Article";
import { connectDB } from "./db";
import { separateArticleBySection } from "./articleUtils";

export interface SeparatedArticles {
    editorPicksPrimary?: IArticle;
    editorPicksSecondary: IArticle[];
    trendingArticles: IArticle[];
    sliderArticles: IArticle[];    
    gridArticles: IArticle[];
    mostRecentArticles: IArticle[];
    allMostRecentGridArticles: IArticle[];
    popularArticles: IArticle[];
}   

interface HomePageData {
    articles: SeparatedArticles;
}

export async function getHomePageData(): Promise<HomePageData> {

    let allFetchedArticles: IArticle[] = [];

    try{
        await connectDB();
        const articles = await ArticleModel.find({}).sort({createdAt: -1}).lean();
        allFetchedArticles = JSON.parse(JSON.stringify(articles))

    } catch (error) {
        console.error("Error fetching for home page", error)
    }

    const separatedArticles = separateArticleBySection(allFetchedArticles)

    return {
        articles: separatedArticles
    }

}