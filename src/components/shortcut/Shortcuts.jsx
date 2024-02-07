
export default function Shortcuts(props) {
    
    const shortcutList = props.props

    return (
            <ul className="list-none p-0 my-12 flex justify-between gap-10">
            {
                shortcutList.map((shortcut) => 
                <li key={shortcut.sort}>
                    <div>
                        <img src={shortcut.imageUrl} alt={shortcut.sort}/>
                        <div className="mt-1 text-xs text-gray-700 text-center">
                            {shortcut.title}
                        </div>
                    </div>

                </li>
                    
            )
        }
        </ul>
        
    );
} 
