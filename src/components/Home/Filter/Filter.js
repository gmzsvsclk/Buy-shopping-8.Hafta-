import styles from "./filter.module.css"
// Render Filter
export default function Filter(props) {
  const { price, setPrice, setCategory } = props;
  return (
    <>
    <div className={styles.filterBar}>
      <h1> Filter</h1>
      <div className={styles.priceRange}>
        <span>Tutar</span>
        {`<=${price}`} TL
        <br />
        <input
          type="range"
          min="100"
          max="50000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className={styles.categoryBox}>
        {/* sub heading */}
        <span>Kategori</span>

        {/* radio buttons for differnet category */}
        <div>
          {/* men category */}
          <input
            type="radio"
            id="men"
            value="men"
            name="category"
            onClick={() => setCategory("men")}
          />
          <label for="men">ERKEK</label>

          {/* women category */}
          <input
            type="radio"
            id="women"
            value="women"
            name="category"
            onClick={() => setCategory("women")}
          />
          <label for="women">KADIN</label>

          {/* electronic */}
          <input
            type="radio"
            id="electric"
            value="electric"
            name="category"
            onClick={() => setCategory("electric")}
          />
          <label for="electric">ÇOCUK</label>

          {/* jewellery */}
          <input
            type="radio"
            id="jewellery"
            value="jewellery"
            name="category"
            onClick={() => setCategory("jewellery")}
          />
          <label for="jewellery">HOME</label>
         
        </div>
      </div>
    </div>
    </>
  );
}
