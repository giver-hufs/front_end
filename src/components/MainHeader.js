import { HeaderStyled } from "../styles/ComponentStyled";
import Logo from "../components/Logo";
import React,{useState} from 'react'

export default function BasicHeader() {
    const [drop, setDrop] = useState(false);

    return(
        <HeaderStyled>
            <Logo/>
            <img className = "main-menu" src = "images/menu.png" alt = "menu" onClick = {() => setDrop(!drop)} />
            { drop &&
            <div className = "main-dropbar">
                <div>사이트 소개</div>
                <div>매칭</div>
                <div>기부</div>
                <div>마이페이지</div>
            </div>
            }
        </HeaderStyled>
    )
}