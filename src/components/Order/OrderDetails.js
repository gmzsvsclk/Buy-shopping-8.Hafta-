// importing styles
import styles from "./orderDetail.module.css"

// render each order detail
export default function OrderDetail(props) {
  // order details from props
  const { date, list, amount } = props.order;

  return (
    // single order container
    <div>
    {/* date of the order */}
    <h1 className={styles.orderHeading}>
        Ordered On: {date}
    </h1>

    {/* table containing order details */}
    <table>

        {/* first row of the table */}
        <tr>
            <th>Sipariş Numarası</th>
            <th>Ürün Adı</th>
            <th>Tutar</th>
            <th>Adet</th>
            <th>Toplam Tutar</th>
        </tr>

        {/* rendering all the product's within order  */}
        {list.map((product,i) => <tr>
                                    <td>{i + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>x{product.quantity}</td>
                                    <td>{product.quantity * product.price}TL</td>
                                </tr>)}
        
        {/* last row to show total amount of the order */}
        <tr>
            <td colSpan={4}>Grand Total</td>
            <td>{amount}TL</td>
        </tr>

    </table>
</div>
  );
}
