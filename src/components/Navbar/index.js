import {
    Avatar, Box,
    Button,
    Divider, Flex,
    Heading, HStack,
    Menu,
    MenuButton,
    MenuDivider, MenuItem, MenuList,
    Text
} from '@chakra-ui/react';
import React from 'react';

const Navbar = (props) => {

    const {
        page,
        categoria,
        pagina,
        entidade,
        entidadeHref
    } = props;

    // if (!isMobile) {
        return (
            <>
                <Box
                    px={4}
                    // left={navSize === "small" ? "75px" : "300px"}
                    // w={navSize === "small" ? "calc(100vw - 75px)" : "calc(100vw - 22vw)"}
                    w="100%"
                    background="#fff8e6"
                    zIndex="overlay"
                    h={["50px","75px"]}
                >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                        <HStack spacing={8} alignItems={'center'}>
                            <Text> Dashboard </Text>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{base: 'none', md: 'flex'}}>
                                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
                            </HStack>
                        </HStack>

                        <Flex alignItems={'center'}>
                            <Divider orientation="vertical" h={30} mr={5}/>
                            <Text
                                variant={'solid'}
                                colorScheme={'teal'}
                                size={'sm'}
                                mr={4}>
                                Fabiana Castro
                            </Text>
                            <Menu>

                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Link 1</MenuItem>
                                    <MenuItem>Link 2</MenuItem>
                                    <MenuDivider/>
                                    <MenuItem>Link 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>


                </Box>

            </>
        );
    // }


    // else {
    //     return (
    //         <>
    //             <Box px={4}
    //
    //                  w="100%"
    //                  backgroundColor="#F7F8FC"
    //                  position="absolute"
    //                  zIndex="overlay"
    //                  h="55px"
    //             >
    //
    //                 <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    //                     <DrawerSidebar/>
    //                     <HStack spacing={8} alignItems={'center'}>
    //                         <Heading as="h2" size="lg">{page}</Heading>
    //                         <HStack
    //                             as={'nav'}
    //                             spacing={4}
    //                             display={{base: 'none', md: 'flex'}}>
    //                             {/* {Links.map((link) => (
    //               <NavLink key={link}>{link}</NavLink>
    //             ))} */}
    //                         </HStack>
    //                     </HStack>
    //                     <Flex alignItems={'center'} ml={2}>
    //                         <Divider orientation="vertical" h={30} mr={5}/>
    //                         <Text
    //                             display={["none", "flex"]}
    //                             variant={'solid'}
    //                             colorScheme={'teal'}
    //                             size={'sm'}
    //                             mr={4}>
    //                             Fabiana Castro
    //                         </Text>
    //                         <Menu>
    //
    //                             <MenuButton
    //                                 as={Button}
    //                                 rounded={'full'}
    //                                 variant={'link'}
    //                                 cursor={'pointer'}
    //                                 minW={0}>
    //                                 <Avatar
    //                                     size={'sm'}
    //                                     src={
    //                                         'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
    //                                     }
    //                                 />
    //                             </MenuButton>
    //                             <MenuList>
    //                                 <MenuItem>Link 1</MenuItem>
    //                                 <MenuItem>Link 2</MenuItem>
    //                                 <MenuDivider/>
    //                                 <MenuItem>Link 3</MenuItem>
    //                             </MenuList>
    //                         </Menu>
    //                     </Flex>
    //                 </Flex>
    //
    //
    //             </Box>
    //
    //         </>
    //     );
    // }

}

export default Navbar;