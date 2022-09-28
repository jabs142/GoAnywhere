import {useState} from "react"
import {
    Grid, 
    GridItem
    } from "@chakra-ui/react";
import { NewsCard } from "./NewsCard";
import axios from "axios"

export const NewsPage = () => {
    const [data, setData] =  useState([])
    const [country, setCountry] = useState("")
    const url= `https://newsdata.io/api/1/news?apikey=pub_11086a11d8b1e80e5c7a2e7c8c0dfde15609f&q=breaking&country=${country}`

    const searchCountry = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data.results)
                console.log(response.data)
            })
        setCountry('');
        }
    }

    return (
        <>
        <div className="app">
            <div className="search">
                <input 
                type="text"
                value={country}
                onChange= {event => setCountry(event.target.value)}
                placeholder="Enter country"
                onKeyPress={searchCountry}
                /> 
            </div>
            {country? null: <h2 style={{textAlign:"center"}}>Which country's news are you interested to find out? </h2>}



        
            <Grid templateColumns='repeat(5, 1fr)' gap={6}> 
                {data.map((datum,index) => (
                <>
                    <GridItem w='100%' h='100%' bg='blue.500'>
                    <NewsCard className="news-card"
                        key={index}
                        title={datum.title}
                        pubDate={datum.pubDate}
                        link={datum.link}
                        description={datum.description}
                    />
                    </GridItem>
                </>
                ))}
            </Grid> 
        </div>
        </>
    )
}