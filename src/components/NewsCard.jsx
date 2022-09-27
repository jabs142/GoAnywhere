import {
    Box,
    Flex,
    Heading,
    HStack,
    LinkBox,
    LinkOverlay,
    Text} from "@chakra-ui/react";

import { DateTime } from 'luxon'

export const NewsCard = ({ title, link, pubDate, description,image }) => {
    return (
        <div>
            <Flex
                flexWrap="wrap"
                align="flex-start"
            >
            <HStack>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Box>{DateTime.fromFormat(pubDate, "yyyy-MM-dd hh:mm:ss").toRelativeCalendar()}</Box>
                    <Heading size='md' my='2'>
                        <LinkOverlay href={link}>
                            {title}
                        </LinkOverlay>
                        {/* {image} */}
                    </Heading>
                    <Text>
                        {description}
                    </Text>
                </LinkBox>
            </HStack>
            </Flex>
            
        </div >
    )
}