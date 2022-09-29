import axios from "axios"
import { useState } from "react"
import { FavoriteCard } from "./FavoriteCard";
import { SimpleGrid } from '@chakra-ui/react'

export const FavoritesPage = ({ items, handleDeleteItem }) => {
    return (
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            {items.map(({ countryName, temp, tempMin, tempMax }, index) =>
                <FavoriteCard key={index} handleDelete={() => handleDeleteItem(countryName)} countryName={countryName} temp={temp} tempMin={tempMin} tempMax={tempMax} />
            )}
        </SimpleGrid>
    )
}