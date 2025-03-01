import Messaging from './ViewMessages.js'
import Sidebar from './Sidebar.js'

export default function ChatWindow() {
    return (
        <div style={{ 
            border: '20px solid rgb(3, 5, 139)', 
            width: '100%', 
            height: '100vh', 
            boxSizing: 'border-box', 
            display: 'flex',
            padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
            }}>
                <Sidebar /> {/*Sidebar options include buttons/menus for persona changes, and dynamic model selection with the dropdown*/}
                <div style={{ flex: 1}}>
                    <Messaging /> {/*Messaging Container*/}
                </div>
        </div>
    )
}