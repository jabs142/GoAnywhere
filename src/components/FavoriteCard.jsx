import { Box, Image} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export const FavoriteCard = ({ imageUrl, countryName, temp, tempMin, tempMax, handleDelete }) => {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' padding="20px" maxWidth="500px" bg="#E2E8F0" spacing="40px" margin="40pax">
            <CloseIcon onClick={handleDelete} className="delete-button" />
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