import logo from './assets/logo.png'
import './App.css'

export default function App() {
    return ( // WebApp
        <nav>
            <div>
                <a href="https://websitewaale.com" target="_blank">
                    <img src={logo} className="logo react" alt="website.waale"/>
                </a>
                <h1>WebsiteWaale Solutions</h1>
            </div>
        </nav>
    )
}
