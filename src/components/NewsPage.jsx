import { useState, useEffect } from "react"
import {
    Grid,
    GridItem
} from "@chakra-ui/react";
import { NewsCard } from "./NewsCard";
import { countries } from "../../countries";

export const NewsPage = () => {
    const [newsData, setNewsData] = useState([])
    const [country, setCountry] = useState("Singapore")
    const [newsCategory, setNewsCategory] = useState("Top")
    const API_KEY = 'pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f'
    const API_URL = `https://newsdata.io/api/1/news`
    const newsCategories = ["Business", "Entertainment", "Environment", "Food", "Health", "Politics", "Science", "Sports", "Technology", "Top"]

    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&country=${countries[country]}&category=${newsCategory}`)
            .then(res => res.json())
            .then(data => setNewsData(data.results))
    }, [country, newsCategory])

    return (
        <div className="news-page">
            <h2 className="instructions-news"> Find out more about your destination country. News data from NewsData IO</h2>
            <div className="search">
                <select value={country} onChange={(event) => setCountry(event.target.value)}>
                    {Object.keys(countries).map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <select value={newsCategory} onChange={(event) => setNewsCategory(event.target.value)}>
                    {newsCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            {country ? null : <h2 style={{ textAlign: "center", color: "white", backgroundColor: "black" }}>Which country's news are you interested to find out? </h2>}

            <Grid templateColumns='repeat(5, 1fr)' gap={20} margin="40px" padding="40px">
                {newsData.map((datum, index) => (
                    <GridItem w='100%' h="500px" overflow="hidden" p="10" background="white" underline="none" border="1px" borderRadius="md" borderColor="gray.200">
                        <NewsCard className="news-card"
                            key={index}
                            title={datum.title}
                            pubDate={datum.pubDate}
                            link={datum.link}
                            description={datum.description}
                        />
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}