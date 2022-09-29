import { Box, Image, Button } from '@chakra-ui/react'

export const FavoriteCard = ({ imageUrl, countryName, temp, tempMin, tempMax, handleDelete }) => {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Button onClick={handleDelete}>Delete</Button>
            <Image src={imageUrl} alt="Country background picture" />
            <Box p='6'>
                {countryName}
            </Box>
            <Box p='6'>
                {temp}
            </Box>
            <Box p='6'>
                {tempMin}
            </Box>
            <Box p='6'>
                {tempMax}
            </Box>
        </Box>
    )
}