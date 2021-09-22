import Layout from "../components/Layout";
import {useEffect, useRef, useState} from "react";
import imPPService from "../Services/imPPService";
import Tabela from "../components/Tabela";
import {Flex, Icon, Text} from "@chakra-ui/react";
import {AiOutlineWhatsApp, IoLogoWhatsapp} from "react-icons/all";

export default function Home() {
    const _isMounted = useRef(false);
    const [data, setData]= useState([]);
    const [fixedData, setFixedData] = useState([]);
    const [filter] = useState('');
    const [columns] = useState([
        {
            Header: 'Próximos dias',
            accessor: 'date',
            Cell: (props) => {
                const custom_date = new Date(props.value).toLocaleDateString("pt-BR")
                return <span>{custom_date}</span>
            }
        },
        {
            Header: 'Desenvolvedor',
            accessor: 'user.name',
            Cell: (props) => {
                if (props.value === null || props.value === undefined){
                    return (<Flex>
                        <Icon as={IoLogoWhatsapp} fontSize={"2xl"} color={"green"}/>
                    </Flex>)
                }
                return <span>{props.value}</span>
            }
        }
    ]);

    useEffect(() => {
        _isMounted.current = true;
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function getDays(){
        return imPPService.listDayUsers();
    }

    function fetchData(){
        getDays().then( res => {
            setData(res.data)
        }).catch((error) => {
            console.warn(error)
        })
    }

    return (
        <Layout currentCategory={"Dashboard"}>
            <Flex>
                <Tabela data={data}
                        columns={columns}
                        filter={filter}
                        setData={setData}
                        fixedData={fixedData}
                        placeholderFilter="Pesquise pela doença..."
                        entidade="doenca"/>
            </Flex>
        </Layout>
    )
}