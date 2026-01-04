import { IArticle } from '@/models/Article'
import React from 'react'

interface HomeContentSectionProps {
    editorPicksPrimary?: IArticle;
    editorPicksSecondary: IArticle[];
    trendingArticles: IArticle[]
}

const HomeContentSection = ({editorPicksPrimary, editorPicksSecondary, trendingArticles}) => {
  return (
    <section>

    </section>
  )
}

export default HomeContentSection