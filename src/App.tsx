import "./index.css"
import { Cards } from "./features/cards/Cards"

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                {/* Test Tailwind CSS Setup */}
                <div className="text-center bg-blue-500 text-white py-4">
                    battlegrounded
                </div>
                <Cards />

            </header>
        </div>
    )
}

export default App
