type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho =  Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}
// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao,
//     endereco: Endereco
// }

const venda: NovoCarrinho = {
    item: {
        nome: 'ass',
        descricao: 'asfad',
        valor: 2345
    },
    qtd: 1234,
    desconto: 1,
    frete: 112,
    tipoTransacao: 'credito',
    cartao: {
        numero: 2345667,
        validade: 'string',
        nome: 'string',
        cvv: 234
    },
    endereco:{
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
}