
import styles from './brands.module.css';

const Brands = () => {

    const brands = ['apple', 'microsoft', 'hp', 'lenovo', 'asus', 'dell']

    return (
        <div className={styles.brands}>
            {
                brands.map((brand) => {
                    return (
                        <div className={styles.brand}>
                            <i className={`${styles.icon} ${styles[`icon__${brand}`]}`} ></i>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brands