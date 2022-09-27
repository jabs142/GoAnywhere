import "../style.css"
import {Link , useNavigate} from "react-router-dom"
import {HStack} from "@chakra-ui/react"


export const Navbar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        console.log("Home");
        navigate("/home")
    }

    const linkStyle = {
        margin: '2px',
        padding: '10px',
        // border: '2px solid black',
        // borderRadius: '8px',
        // background: 'gray',
        width: '100px',
        fontSize: '15px',
        color: 'black',
        display: 'block',
        textDecoration: 'none' 
      };

    return (
        <nav className="nav"> 
            <HStack spacing={8} h='20px'> 
                <img src="src/assets/planeIcon.png" className="nav--image" onClick={goHome}/>
                <h2 className="nav--title"> Where will you go? </h2>
                <Link 
                    className="nav--text" 
                    to="/home"
                    style={linkStyle}> Home </Link>
                <Link 
                    className="nav--text" 
                    to="/news"
                    style={linkStyle} > News </Link>
                <Link 
                    className="nav--text" 
                    to="/weather"
                    style={linkStyle} > Weather </Link>
            </HStack>
        </nav>
    )
}