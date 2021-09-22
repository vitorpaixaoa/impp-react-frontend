import { Flex, Link, Menu, MenuButton, Text } from '@chakra-ui/react';
import React, { Component } from 'react';



export default class SubNavItem extends Component {
    state={

    }
    render() {
        return (
            <div>
                <Flex
                    flexDir="column"
                    w="100%"
                    hidden={this.props.navSize === "small"}
                    alignItems={this.props.navSize === "small" ? "center" : "flex-start"}
                    backgroundColor="#135255"
                    mb={1}
                    py={2}
                    
                >
                    <Menu placement="right">
                        <Flex w="100%" alignItems={"center"} >
                            <Flex w={1} borderRightRadius={5} position="absolute" h="40px" backgroundColor={this.props.active && "#0A3739"}/>
                            <Link
                                backgroundColor={this.props.active && "#135255"}
                                _hover={{ textDecoration: "none", backgroundColor: "#135255" }}
                                w={this.props.navSize === "large" && "100%"}
                                mb={2}
                                href={this.props.href}
                            >

                                <MenuButton w="100%" >
                                    <Flex justifyContent={"left"} ml={16}>
                                        <Text  color={"white"} display={this.props.navSize === "small" ? "none" : "flex-start"}>{this.props.title}</Text>
                                    </Flex>
                                </MenuButton>
                            </Link>
                            
                        </Flex>
                    </Menu>
                </Flex>
            </div>
        )
    }
}
