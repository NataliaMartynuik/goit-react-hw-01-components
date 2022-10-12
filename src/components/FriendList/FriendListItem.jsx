import PropTypes from "prop-types";
import { Wraper, Online, TextName, UserPhoto } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, name, avatar }) => {
    return (
        <Wraper>
            <Online style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Online>
            <UserPhoto src={avatar} alt={name} width="48" />
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