import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import { GoTriangleDown, GoTriangleLeft } from 'react-icons/go'
class NavItem extends Component {
    constructor(props){
        super(props)
        this.changeSubmenu = this.changeSubmenu.bind(this);
    }
    state={
        isOpen : this.props.isOpen
    }


    changeSubmenu(){
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){
        
            return (
                <Flex
                    flexDir="column"
                    w="100%"
                    alignItems={this.props.navSize === "small" ? "center" : "flex-start"}
                >
                    <Menu placement="right">
                        <Flex w="100%" >
                            <Flex w={1} borderRightRadius={5} position="absolute" h="50px" backgroundColor={this.props.active && "#0A3739"}/>
                            <Link
                                backgroundColor={this.props.active   ? "#996011" : ""}
                                p={3}
                                _hover={{ textDecoration: "none", backgroundColor: "#996011" }}
                                w={this.props.navSize === "large" && "100%"}
                                mb={this.props.children ? 0 :  1}
                                href={this.props.href}
                                onClick={ this.props.children ? this.changeSubmenu : null }
                            >
                                <MenuButton w="100%" >
                                    <Flex>
                                        <Icon as={this.props.icon} fontSize="xl" color={this.props.active ? "white" : "white"}/>
                                        <Flex flexDir={"row"} alignContent={"space-between"} >
                                            <Flex>
                                                <Text ml={5} color={"white"} display={this.props.navSize === "small" ? "none" : "flex-start"}>{this.props.title}</Text>
                                            </Flex>
                                            { this.props.children ? (
                                                    <Flex>
                                                        <Icon  as={this.state.isOpen ? GoTriangleDown : GoTriangleLeft}
                                                               fontSize="md"
                                                               display={this.props.navSize === "small" && "none"} ml={20} mt={1}
                                                               color="white"/>
                                                    </Flex>
                                            ) : ("")  }
                                        </Flex>

                                    </Flex>
                                </MenuButton>
                            </Link>
                            
                        </Flex>
                    </Menu>
                    
                    {this.state.isOpen ? (
                        <Flex
                        flexDir="column"
                        w="100%">
                        {this.props.children}
                    </Flex>
                    ): ""}
                </Flex>
            )
    }
}
export default NavItem;