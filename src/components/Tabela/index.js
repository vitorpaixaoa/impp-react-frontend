import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Link,
    Thead,
    Tr,
    Menu, MenuButton, MenuList, InputGroup, InputRightElement
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

import {useTable, useSortBy, usePagination, useFilters} from 'react-table';
import {ChevronDownIcon, Search2Icon} from "@chakra-ui/icons";


const Tabela = (props) => {
    const {
        data,
        columns,
        entidade,
        placeholderFilter
    } = props;


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        setFilter,
        state: {pageIndex, pageSize},

    } = useTable({
            columns,
            data
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const handleFilter = (field, value) => {
        setFilter(field, value)
    }

    function limparFiltros(e) {
        setFilter("user.name", "");
    }

    return (
        <Flex flexDir="column" w="100%">
            <Flex
                flexDir={["column", "row"]}
                justifyContent="space-between"
            >

                <Flex flexDir="row" w={["100%", "80%"]}>
                    <FormControl>
                        <Flex flexDir={["column", "row"]}>
                            <Flex alignItems={"center"} w={"85%"}>
                                <InputGroup>
                                    <InputRightElement
                                        pointerEvents={"none"}
                                        children={<Search2Icon color={"#B8BAC3"}/>}
                                    />
                                    <Input backgroundColor="white" w={["100%", "190%"]}
                                           id="situacaoJuridica"
                                           onChange={(e) => handleFilter("user.name", e.target.value)}
                                           placeholder={placeholderFilter}/>
                                </InputGroup>
                            </Flex>

                            <Flex ml={[0, 4]} mt={[4, 0]} w={["100vw", ""]}>
                                <Menu>
                                    <MenuButton textAlign={"left"} as={Button}
                                                rightIcon={<ChevronDownIcon/>}
                                                backgroundColor={"white"}>
                                        Adicionar Filtros...
                                    </MenuButton>
                                    <MenuList w={["auto", "400px"]} p={2}>
                                        <Flex flexDir={"column"} p={5}>
                                            <Flex flexDir={"row"} mb={4} justifyContent={"space-between"}>
                                                <Text>
                                                    Filtros avançados
                                                </Text>
                                                <Link color={"#409DF3"} _hover={{textDecoration: "none"}}
                                                      onClick={(e) => {
                                                          limparFiltros(e)
                                                      }}>
                                                    Limpar filtros
                                                </Link>
                                            </Flex>
                                            <Flex>
                                                <Select defaultChecked={""}
                                                        placeholder={"Selecione pelo dev..."}
                                                        onChange={(e) => handleFilter("user.name", e.target.value)}
                                                        backgroundColor="white">
                                                    <option value={"João"}>João</option>
                                                    <option value={"Maria"}>Maria</option>
                                                    <option value={"Zeca"}>Zeca</option>
                                                    <option value={"Mario"}>Mário</option>
                                                    <option value={"Gustavo"}>Gustavo</option>
                                                    <option value={"Camila"}>Camila</option>
                                                    <option value={"Pedro"}>Pedro</option>
                                                    <option value={"Juliana"}>Juliana</option>
                                                    <option value={"Gisele"}>Gisele</option>
                                                </Select>
                                            </Flex>

                                            <Flex mt={5} justifyContent={"flex-end"}>
                                                <Button px={10} backgroundColor={"#6DA656"} colorScheme={"whatsapp"}>
                                                    Aplicar
                                                </Button>
                                            </Flex>
                                        </Flex>
                                    </MenuList>
                                </Menu>
                            </Flex>


                        </Flex>
                    </FormControl>
                </Flex>

                <Flex>
                </Flex>
            </Flex>

            <Flex flexDir="column" width="100%" mt={6} h="100%">
                <Table {...getTableProps} backgroundColor="white">
                    <Thead backgroundColor="#ECEFF1">
                        {headerGroups.map(headerGroup => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        <Flex flexDir="row" alignContent="center">
                                            <Text as="p">
                                                {column.render('Header')}
                                            </Text>

                                            <Flex pl={3} alignItems="center">
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? (<IoIosArrowDown/>)
                                                        : (<IoIosArrowUp/>)
                                                    : (<IoIosArrowDown/>)}
                                            </Flex>
                                        </Flex>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <Td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                <Flex flexDir="row" alignItems="center" justifyContent="space-between" mt={[5, 10]}>
                    <Flex flexDir="row">
                        <FormControl flexDir="column">
                            <FormLabel htmlFor="porPagina">Por páginca: </FormLabel>
                            <Select id="porPagina"
                                    backgroundColor="white"
                                    value={pageSize}
                                    onChange={(e) => setPageSize(Number(e.target.value))}
                            >
                                <option value="1">1</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </Select>
                        </FormControl>

                    </Flex>
                    <Flex flexDir="row">
                        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            {"<"}
                        </Button>
                        <Input type="number"
                               textAlign="center"
                               mx={1}
                               w={16}
                               backgroundColor="white"
                               value={pageIndex + 1}
                               onChange={(e) => {
                                   const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                   gotoPage(page);
                               }}/>
                        <Button onClick={() => nextPage()} disabled={!canNextPage}>
                            {">"}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}
export default Tabela;