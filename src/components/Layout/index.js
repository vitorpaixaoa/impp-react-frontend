import React, { Component } from 'react'
import Navbar from '../../components/Navbar';
import {Flex} from '@chakra-ui/react';
import Sidebar from "../Sidebar";




export default class Layout extends Component {

    render() {

        const { page, children, currentCateory, entidadeHref, entidade, pagina } = this.props;
        return (
            <Flex
            h={"100vh"}
            position={"absolute"}
            backgroundColor="#fff8e6"
            overflow={"hidden"}
            w="100%"
            flexDir="row"
            maxW="100%">

        <Sidebar page={page} entidade={entidade} categoria={currentCateory}/>
        <Flex
            w="100%"
            p={0}
            flexDir="column"
            overflow={"hidden"}
            >
        <Navbar/>
            <Flex
                pt={"20px"}
                px={["5px", "30px"]}
                h="100%"
                flexDir="column"
                w="100%"
                maxW="2000px"
                overflow="auto"
                pb={["10px", "20px"]}
            >
                {children}
            </Flex>

        </Flex>
    </Flex>
        )
    }
}