import React, { useState, useRef } from 'react';
import {
    Nav,
    NavMenu,
    NavItem,
    NavLinks,
    NavLogo,
    MobileIcon,
    NavbarContainer,
    NavIcon,
    Form,
    Button,
    Input
}
    from './styles/Header.styled';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
//import { Button } from './styles/Button.styled';
import { IconContext } from 'react-icons/lib';


export default function Header() {

    const [click, setClick] = useState(false);

    const [input, setInput] = useState("");

    const [barOpened, setBarOpened] = useState(false);

    const formRef = useRef();

    const inputFocus = useRef();

    const handleClick = () => { setClick(!click) };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setBarOpened(false);
        console.log(`Form was submitted with input: ${input}`);
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            React
                        </NavLogo>
                        <MobileIcon onClick={() => setClick(!click)}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click} className="mr-auto">
                            <NavItem>
                                <NavLinks to="/docs"> Docs </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/tutorials"> Tutorials </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/blog"> Blog </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/Community"> Community </NavLinks>
                            </NavItem>
                        </NavMenu>

                        <Form
                            barOpened={barOpened}
                            onClick={() => {
                                setBarOpened(true);
                                inputFocus.current.focus();
                            }}
                            onFocus={() => {
                                setBarOpened(true);
                                inputFocus.current.focus();
                            }}
                            onBlur={() => {
                                setBarOpened(false);
                            }}
                            onSubmit={onFormSubmit}
                            ref={formRef}>
                            <Button type="submit" barOpened={barOpened}>
                                <FaSearch />
                            </Button>
                            <Input onChange={e => setInput(e.target.value)}
                                ref={inputFocus}
                                value={input}
                                barOpened={barOpened}
                                placeholder="Search..."
                            />
                        </Form>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
