import styles from './Shortcuts.module.css'

export default function Shortcuts(props) {
    
    const shortcutList = props.props

    return (
            <ul className={styles.list}>
            {
                shortcutList.map((shortcut) => 
                <li key={shortcut.sort} className={styles.li}>
                    <div className={styles.icon_container}>
                        <img src={shortcut.imageUrl} alt={shortcut.sort} className={styles.image}/>
                        <div className={styles.text}>{shortcut.title}</div>
                    </div>

                </li>
                    
            )
        }
        </ul>
        
    );
} 
