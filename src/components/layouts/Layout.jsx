import Header from './Header.jsx'
import Banner from '../Banner.jsx'

function Layout(props) {
    return <div>
        <Header />
        <Banner />
        <main style={{margin: 'auto', maxWidth: '60rem'}}>
            {props.children}
        </main>
    </div>
}

export default Layout