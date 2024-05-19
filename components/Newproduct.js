import styles from '../styles/Newproduct.module.css';

function NewProduct() {
    return (
        <div className={styles.main}>
            <div className={styles.newProductTitleContainer}>
                <span className={styles.thinTitle}>LATEST LAUNCH</span>
                <span className={styles.boldTitle}>DIONE SOUNDBAR</span>
            </div>

            <img className={styles.image} src="soundbar.png" alt="Soundbar" />

            <button className={styles.discoverButton}>DISCOVER</button>
        </div>
    )
}

export default NewProduct;