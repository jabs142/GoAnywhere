import {useState, useEffect} from "react"
import {NewsCard} from "./NewsCard"
import {
    Heading,
    } from "@chakra-ui/react";


export const NewsPage = () => {
    const [newsData, setNewsData] =  useState([])

    useEffect(() => {
        fetch("https://newsdata.io/api/1/news?apikey=pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f&q=breaking&country=sg,gb,us&language=en&category=business,politics,science,technology,world ")
            .then(res => res.json())
            .then(data => {
                setNewsData(data.results);
                console.log(data.results);
            })
    }, [])

    return (
        <>
            <h1> This is the news page  </h1>

            <Heading size="2xl" padding="20px"> Latest news </Heading>
                {newsData.map((newsDatum, index) => <NewsCard
                    // image={src=`${newsDatum.image_url}`}
                    key={index}
                    title={newsDatum.title}
                    pubDate={newsDatum.pubDate}
                    link={newsDatum.link}
                    description={newsDatum.description}
                />)}
        </>
    )
}