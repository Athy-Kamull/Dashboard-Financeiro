import { useState, useEffect, useCallback } from "react";
import { buscarTransacoes } from "../data/transactions";

export function useTransactions() {
    const [transacoes, setTransacoes] = useState ([]);
    const [categorias, setCategorias] = useState ([]);
    const [carregando, setCarregando] = useState (true);
    const [erro, setErro] = useState (null);

    const carregar = useCallback(() => {
        setCarregando(true);
        setErro(null);

        buscarTransacoes()
        .then((dados)=> {
            setTransacoes(dados.transacoes);
            setCategorias(dados.categorias);
        })
        .catch(() => {
            setErro('Não foi possível carregar suas transações');
        })
        .finally(() => {
            setCarregando(false);
        });
    },[]);

    useEffect(() => {
        carregar();
    }, [carregar]);

    return {transacoes, categorias, carregando, erro, recarregar: carregar};
}