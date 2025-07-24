import reactLogo from "../assets/react.svg"

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React Icon" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}