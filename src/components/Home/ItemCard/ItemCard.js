import { useProductContext } from "../../../contexts/productContext";
import styles from "./itemCard.module.css";

export default function ItemCard(props) {
  const { name, image, price, category } = props.item;
  const { addToCart } = useProductContext();
  return (
    <>
     <div className={styles.cardContainer} >
                
                {/* image container */}
                <div className={styles.imageContainer}>
                    <img src={image} alt={category} />
                </div>

                {/* description of the product name,price, add button */}
                <div className={styles.itemInfo}>
                    <div className={styles.namePrice}>
                        {/* name of product */}
                        <div className={styles.name}>
                            {name}
                        </div>

                        {/* price of the product */}
                        <div className={styles.price}>
                        {price}TL  
                        </div>
                    </div>
                    

                    {/* add to cart button */}
                    <div className={styles.btnContainer}>
                        <button className={styles.addBtn}
                                onClick={() => addToCart(props.item)}>
                            Sepete Ekle
                        </button>
                    </div>

                </div>

            </div>
    </>
  );
}
