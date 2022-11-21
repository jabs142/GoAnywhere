import { FavoriteCard } from "./FavoriteCard";
import { SimpleGrid } from '@chakra-ui/react'

export const FavoritesPage = ({ items, handleDeleteItem }) => {

    return (


        <div className="favorite-page">
            <h2 className="instructions-favorites"> Add weather favorites to this page. Weather information from OpenWeatherMap and images from Unsplashed API</h2>
            <SimpleGrid minChildWidth='120px' spacingX='40px' spacingY='20px' margin="20px" padding="20px" columns={2} >
                {items.map(({ countryName, temp, tempMin, tempMax, description, imageUrl }, index) =>
                    <FavoriteCard
                        padding="20px"
                        key={index}
                        imageUrl={imageUrl}
                        handleDelete={() => handleDeleteItem(countryName)}
                        countryName={`Country name: ${countryName} `}
                        temp={`Current temperature: ${temp} °C`}
                        tempMin={`Minimum temperature: ${tempMin} °C`}
                        tempMax={`Maximum temperature: ${tempMax}°C`}
                        description={description}
                    />
                )}
            </SimpleGrid>
        </div >
    )
}