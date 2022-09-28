import { useNavigate } from "react-router";
import { HStack } from '@chakra-ui/react'

export const HomePage = () => {

    const navigate = useNavigate()

    const goNews= () => {
        navigate("/news")
    }

    const goWeather = () => {
        navigate("/weather")
    }

    const goCurrency = () => {
        navigate("/currency")
    }

    return (
        <>
        <div className="home-page">

            <div className="top"> 
                <h1 className="home-page-text"> Ready for your next destination? </h1>
            </div>
            <HStack>
                    <button className="btn1" onClick={goNews}>News</button>
                    <button className="btn2" onClick={goWeather}>Weather</button>
                    <button className="btn3" onClick={goCurrency}>Currency</button>
            </HStack>
        </div>        
    </>
    )
}