import PropTypes from "prop-types";
import { Wraper, Online, TextName } from './FriendListItem.styled';

export const FriendListItem = ({ friends: avatar, name, isOnline }) => {
    return (
        <Wraper>
            <Online style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Online>
            <img src={avatar} alt="User avatar" width="48" />
            <TextName>{name}</TextName>
        </Wraper>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }),
}