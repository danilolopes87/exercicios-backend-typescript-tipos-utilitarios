type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type OmitirRg = Omit<Usuario, 'rg'>;
type CamposObrigatorios = Required<Usuario>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

