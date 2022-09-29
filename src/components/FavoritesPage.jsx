import { FavoriteCard } from "./FavoriteCard";
import { SimpleGrid } from '@chakra-ui/react'

export const FavoritesPage = ({ items, handleDeleteItem }) => {

    return (

    
        <div className="favorite-page">
            <SimpleGrid minChildWidth='120px' spacingX='40px' spacingY='20px' margin="20px" padding="20px">
                {items.map(({ countryName, temp, tempMin, tempMax }, index) =>
                    <FavoriteCard padding="20px"
                        key={index}
                        handleDelete={() => handleDeleteItem(countryName)}
                        countryName={`Country name: ${countryName} `}
                        temp={`Current temperature: ${temp} °C`}
                        tempMin={`Minimum temperature: ${tempMin} °C`}
                        tempMax={`Maximum temperature: ${tempMax}°C`} />

                )}
            </SimpleGrid>
        </div>
    )
}