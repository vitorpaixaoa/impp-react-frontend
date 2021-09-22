import React, {useState} from 'react';
import {Flex, Image, IconButton} from '@chakra-ui/react';
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import NavItem from '../NavItem';
import logo from '../../Static/images/logo.png'
import logoGrande from '../../Static/images/LogoCompasso.png'
import {FaRegFileAlt, FaUsers, RiBankFill} from "react-icons/all";


export default function Sidebar(props) {
    const [navSize, setNavSize] = useState("large")
    return (
        <Flex

            h="100vh"
            display={["none", "none", "flex"]}
            position={["fixed", "relative"]}
            w={navSize === "small" ? "45px" : "300px"}
            maxW="300px"
            flexDirection="column"
            justifyContent="space-between"
            backgroundColor="#fc9105"
        >
            <Flex
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                {navSize === "small" ? (
                    <Image m="5%" alignSelf="center" w={170} src={logo} rounded="10px" mx={2} mt={10} mb={50}/>
                ) : (
                    <Image m="5%" alignSelf="center" my={10} w={"100%"} src={logoGrande}/>
                )}

                <NavItem navSize={navSize} href="/" icon={HiOutlineDesktopComputer} title="Dashboard"
                         active/>

            </Flex>
            <IconButton
                background="none"
                mt={5}
                alignSelf="flex-end"
                _hover={{background: 'none'}}
                icon={navSize === "small" ? <BsArrowBarRight/> : <BsArrowBarLeft/>}
                onClick={() => {
                    if (navSize === "small")
                        setNavSize("large")
                    else
                        setNavSize("small")
                }}
            />

        </Flex>

    )
};