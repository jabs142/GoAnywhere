import {
    Box,
    Grid,
    Heading,
    LinkBox,
    LinkOverlay,
    Text} from "@chakra-ui/react";
import { DateTime } from 'luxon'

export const NewsCard = ({ title, link, pubDate, description}) => {
    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500'>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Box>{DateTime.fromFormat(pubDate, "yyyy-MM-dd hh:mm:ss").toRelativeCalendar()}</Box>
                    <Heading size='md' my='2'>
                        <LinkOverlay href={link}>
                            {title}
                        </LinkOverlay>
                    </Heading>
                    <Text>
                        {description}
                    </Text>
                </LinkBox>

                </GridItem>    
            </Grid>
            
        </div >
    )
}