interface MensagemProps{
    mensagem: number;
}

const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {
    return(
        <div>
            {props.mensagem}
        </div>
    )    
}

const MeuComponente = () => {
    return(
        <div>
            <Mensagem mensagem = {10} />
        </div>

    )
}

export default MeuComponente;















// arrow function
// const MeuComponente = () => {
//  return(
//      <div>
//          <Mensagem mensagem = "Mudei a msg" />
//      </div>
//    
//  )

// }