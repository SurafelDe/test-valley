import styles from './Layout.module.css'
import Header from './Header'
import Banner from '../Banner.js'
function Layout(props) {
    return <div>
        <Header />
        <Banner />
        <main className={styles.main}>
            {props.children}
        </main>
    </div>
}

export default Layout