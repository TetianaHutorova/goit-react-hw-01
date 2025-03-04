import clsx from "clsx";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, ind) => (
          <tr key={id} className={clsx(ind % 2 === 0 ? "" : css.gray)}>
            <td className={css.type}>
              {type[0].toUpperCase() + type.slice(1)}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 