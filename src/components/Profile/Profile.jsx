import PropTypes from "prop-types";
import { Container, WrapImg, Avatar, MainText, Contact, Wraper, InfoBlock, InfoText } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <Container>
        <WrapImg>
            <Avatar
            src={avatar}
            alt={username}
            />
            <MainText>{username}</MainText>
            <Contact>@{tag}</Contact>
            <Contact>{location}</Contact>
        </WrapImg>

        <Wraper>
            <InfoBlock>
            <InfoText>Followers</InfoText>
            <MainText>{stats.followers}</MainText>
            </InfoBlock>
            <InfoBlock>
            <InfoText>Views</InfoText>
            <MainText>{stats.views}</MainText>
            </InfoBlock>
            <InfoBlock>
            <InfoText>Likes</InfoText>
            <MainText>{stats.likes}</MainText>
            </InfoBlock>
        </Wraper>
        </Container>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number)
    })   
}