import {
    Box,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react";
import { DateTime } from 'luxon'

export const NewsCard = ({ title, link, pubDate, description }) => {
    return (
        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' overflow="hidden" textDecoration="none">
            <Box className="news-date">{DateTime.fromFormat(pubDate, "yyyy-MM-dd hh:mm:ss").toRelativeCalendar()}</Box>
            <LinkOverlay href={link}>
                <h3 className="news-title"> {title}</h3>
            </LinkOverlay>
            <h3 className="news-description">{description}</h3>
        </LinkBox>

    )
}