import {useState, useEffect} from "react"
import {NewsCard} from "./NewsCard"
import {
    Heading,
    } from "@chakra-ui/react";


export const NewsPage = () => {
    const [newsData, setNewsData] =  useState([])
    const [country, setCountry] = useState("")
    const url= `https://newsdata.io/api/1/news?apikey=pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f&q=breaking&country=${country}`

    useEffect(() => {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f&q=breaking&country=${country}`)
            .then(res => res.json())
            .then(data => {
                setNewsData(data.results);
                console.log(data.results);
            })
    }, [])


    const searchCountry = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        setLocation('');
        }
    }

    return (
        <>
            <h1> This is the news page</h1>
            <div className="search">
                <input 
                type="text"
                value={country}
                onChange= {event => setCountry(event.target.value)}
                placeholder="Enter country"
                onKeyPress={searchLocation}
                /> 
            </div>


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