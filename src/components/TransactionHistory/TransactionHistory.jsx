import PropTypes from "prop-types";
import { TableWraper, TableHead, TableHeadName, TableRow } from "./TransactionHistory.styled";


export const TransactionHistory = ({ transactions }) => {
    return (
        <TableWraper>
            <TableHead>
                <tr>
                <TableHeadName>Type</TableHeadName>
                <TableHeadName>Amount</TableHeadName>
                <TableHeadName>Currency</TableHeadName>
                </tr>
            </TableHead>
                
            <tbody>
                { transactions.map(transaction =>(
                    <tr key={transaction.id}>
                        <TableRow>{transaction.type}</TableRow>
                        <TableRow>{transaction.amount}</TableRow>
                        <TableRow>{transaction.currency}</TableRow>
                    </tr>
                ))}
            </tbody> 
        </TableWraper>
)
}

TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};