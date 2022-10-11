import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { Container, WraperItem } from './FriendsList.styled'
export const FriendsList = ({ friends }) => {
    return (
            <Container>
                {friends.map((friend) => (
                    <WraperItem key={friend.id}>
                        <FriendListItem
                            isOnline={friend.isOnline} 
                            avatar={friend.avatar}
                            name={friend.name}
                            />
                    </WraperItem>    
              ))}
            </Container>
         
    )
} 

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}