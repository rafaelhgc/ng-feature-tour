# NgFeatureTour

Permite disponibilizar um tour por elementos ou funcionalidades de uma página de forma acessível

<br/>

<h2>Controles</h2>
<p>
  O tour conta com 4 controles explicitos utilizados para a navegação entre os passos e interromper o tour.
</p>
<table width="100%">
  <thead>
    <tr>
      <th>Controle</th>
      <th>Opcional</th>
      <th>Visibilidade</th>
    </tr>    
  </thead>
  <tbody>
    <tr>
      <td>abort</td>
      <td>Não</td>
      <td>
        exibido em todos os passos do tour
      </td>
    </tr>
    <tr>
      <td>previous</td>
      <td>Não</td>
      <td>
        exibido no segundo passo do tour em diante
      </td>
    </tr>
    <tr>
      <td>next</td>
      <td>Não</td>
      <td>
        exibido até o penúltimo passo do tour
      </td>
    </tr>
    <tr>
      <td>done</td>
      <td>Não</td>
      <td>
        exibido no último passo do tour
      </td>
    </tr>
  </tbody>
</table>

<br/>

<h2>Outputs</h2>
<p>
  É possível interceptar as ações do usuários com os controlers através dos outputs, que recebem eventos emitidos pelo tour com o tipo do evento e o passo ativo.
</p>

<table width="100%">
  <thead>
    <tr>
      <th>Output</th>
      <th>Descrição</th>
    </tr>    
  </thead>
  <tbody>
    <tr>
      <td>close</td>
      <td>emitido quando o usuário utilizar os controles done, abort, digitar a tecla ESC ou clicar na sobreposição transparente do tour.</td>
    </tr>
    <tr>
      <td>previous</td>
      <td>emitido quando o usuário utilizar o controle previous</td>
    </tr>
    <tr>
      <td>next</td>
      <td>emitido quando o usuário utilizar o controle next</td>
    </tr>     
  </tbody>
</table>

<h2>Eventos</h2>
<p>
  Os eventos são enumerados para distinguir cada ação, permitindo que seja possível controlar a exibição ou gerar dados para análise
</p>
<table width="100%">
  <thead>
    <tr>
      <th>Evento</th>
      <th>Descrição</th>
    </tr>    
  </thead>
  <tbody>
    <tr>      
      <td>NEXT</td>
      <td>
        emitido sempre que o usuário passa para o próximo passo do tour através do controle <code>next</code>.
      </td>
    </tr>
    <tr>      
      <td>PREVIOUS</td>
      <td>
        emitido sempre que o usuário volta ao passo anterior do tour através do controle <code>previous</code>.
      </td>
    </tr>
    <tr>      
      <td>ABORT</td>
      <td>
        emitido sempre que o usuário opitar por encerrar o tour por meio do controle <code>abort</code>.
      </td>
    </tr>
    <tr>      
      <td>DONE</td>
      <td>
        emitido sempre que o usuário encerrar o tour por meio do controle <code>done</code>.
      </td>
    </tr>
    <tr>      
      <td>ESCAPE</td>
      <td>
        emitido sempre que o usuário fechar o tour por meios da tecla <code>esc</code> ou clicando na sobreposição transparente do tour.
      </td>
    </tr>      
  </tbody>
</table>

<br/>

<h2>Configuração</h2>
<p>
  Para exibir o tour é necessário informar um arquivo de configuração em formato JSON com a seguinte estrutura
</p>
<table width="100%">
  <thead>
    <tr>
      <th>Chave</th>
      <th>Default</th>
      <th>Opcional</th>
      <th>Valor</th>
    </tr>    
  </thead>
  <tbody>
    <tr>
      <td>a11y.pagination</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto utilizado para a leitura da paginação pelo leitor de tela. É possível usar as notações {index} e {total} para se referir ao passo atual e total de passos</td>
    </tr>
    <tr>
      <td>controls.abort</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto utilizado para a label do controle abort</td>
    </tr>
    <tr>
      <td>controls.previous</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto utilizado para a label do controle previous</td>
    </tr>
    <tr>
      <td>controls.next</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto utilizado para a label do controle next</td>
    </tr>
    <tr>
      <td>controls.done</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto utilizado para a label do controle done</td>
    </tr>
    <tr>
      <td>steps[i].target</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Id do elemento que será colocado em foco durante a exibição do passo</td>
    </tr>
    <tr>
      <td>steps[i].title</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Título que será exibido no passo</td>
    </tr>
    <tr>
      <td>steps[i].description</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Descrição que será exibida no passo</td>
    </tr>
    <tr>
      <td>steps[i].ariaDescription</td>
      <td>n\a</td>
      <td>Não</td>
      <td>Texto para o leitor de telas descrever o elemento que está em foco durante a exibição do passo</td>
    </tr>
  </tbody>
</table>
