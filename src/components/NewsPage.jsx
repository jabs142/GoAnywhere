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
    const API_KEY = 'pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f'
    const API_URL = `https://newsdata.io/api/1/news`

    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&country=${countries[country]}`)
            .then(res => res.json())
            .then(data => setNewsData(data.results))
    }, [country])

    return (
        <div className="news-page">
            <div className="search">
                <select value={country} onChange={(event) => setCountry(event.target.value)}>
                    {Object.keys(countries).map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
            {country ? null : <h2 style={{ textAlign: "center", color: "white", backgroundColor: "black" }}>Which country's news are you interested to find out? </h2>}

            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {newsData.map((datum, index) => (
                    <GridItem w='100%' h="500px" overflow="hidden" p="10" background="white" underline="none">
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