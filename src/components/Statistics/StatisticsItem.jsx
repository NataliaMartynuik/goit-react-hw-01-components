import PropTypes from "prop-types";
import { InfoStatic, StaticText } from './StatisticsItem.styled'
import { getRandomHexColor } from './RandomColor.js'

export const StatisticsItem = ({ stats: id, label, percentage }) => {
    return (
      <InfoStatic key={id} style={{ backgroundColor: getRandomHexColor() }} >
        <StaticText>{label}</StaticText>
        <StaticText>{percentage}%</StaticText>
      </InfoStatic>
      )
}

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
})
}