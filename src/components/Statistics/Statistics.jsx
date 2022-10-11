import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem";
import { Container, Title, Wraper } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
      <Container>
            {title && <Title>{title}</Title>}
            <Wraper>
                {stats.map((stat) => (
                    <StatisticsItem
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                ))}
            </Wraper>
      </Container>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
}