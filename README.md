# Referencia sobre REGEX

### Caracteres Especiais

<strong>`.`:</strong>  
Corresponde a qualquer caractere, exceto quebra de linha. Por exemplo `/.at/`
corresponde a `"cat"`, `"bat"`, e `"rat"`. <br>

<strong>`\d`:</strong>  
Corresponde a qualquer digito de 0 a 9 <br>

<strong>`\D`:</strong>  
Corresponde a caractere que nao seja um digito de 0 a 9

<strong>`\w`:</strong>  
Corresponde a qualquer caractere alfanumérico, incluindo o sublinhado (_).
Equivalente a `[A-Za-z0-9_]`.

<strong>`\W`:</strong>  
Corresponde a qualquer caractere que não seja alfanumérico.

<strong>`\s`:</strong>  
Corresponde a qualquer caractere de espaço em branco, incluindo espaço,
tabulação, alimentação de formulário e quebras de linha.

<strong>`\S`:</strong>  
Corresponde a qualquer caractere que não seja de espaço em branco.

<strong>`\b`:</strong>  
Corresponde a uma fronteira de palavra, como o espaço entre duas palavras.

<strong>`\B`:</strong>  
Corresponde a uma posição que não é uma fronteira de palavra.

<strong>`^`:</strong>  
Corresponde ao início de uma string, ou ao início de uma linha se a flag m for
utilizada.

<strong>`$`:</strong>  
Corresponde ao final de uma string, ou ao final de uma linha se a flag m for
utilizada.

<strong>`[]`:</strong>  
Usado para especificar um conjunto de caracteres. Por exemplo, `[abc]`
corresponde a qualquer um dos caracteres `"a"`, `"b"` ou `"c"`.

<br>

---

### Quantificadores

<strong>`*`:</strong>  
Corresponde a zero ou mais ocorrências do elemento anterior.

<strong>`+`:</strong>  
Corresponde a uma ou mais ocorrências do elemento anterior.

<strong>`?`:</strong>  
Corresponde a zero ou uma ocorrência do elemento anterior.

<strong>`{n}`:</strong>  
Corresponde exatamente a n ocorrências do elemento anterior.

<strong>`{n,}`:</strong>  
Corresponde a n ou mais ocorrências do elemento anterior.

<strong>`{n,m}`:</strong>  
Corresponde de n a m ocorrências do elemento anterior, sendo ambas inclusivas.

<br>

---

### Caracteres de Escape

<strong>`\`:</strong>  
É usado para escapar um metacaractere, permitindo que você corresponda ao
próprio caractere, como \. para corresponder a um ponto literal, ou \/ para
corresponder a uma barra, ou \\ para corresponder a uma barra invertida.

<br>

---

### Grupos e Intervalos

<strong>`()`:</strong>  
Usado para agrupar caracteres e capturar o texto correspondente.

<strong>`(?:)`:</strong>  
Agrupa caracteres sem capturar o texto correspondente.

<strong>`|`:</strong>  
Operador OR, corresponde a qualquer um dos padrões separados por ele.

<br>

---

### Flags

<strong>`g`:</strong>  
Realiza uma correspondência global, ou seja, encontra todas as correspondências,
em vez de parar após a primeira correspondência.

<strong>`i`:</strong>  
Torna a correspondência insensível a maiúsculas e minúsculas.

<strong>`m`:</strong>  
Multilinha, faz com que ^ e $ correspondam ao início e ao fim de cada linha, em
vez de apenas o início e o fim de toda a string.

<strong>`s`:</strong>  
Permite que o . corresponda também a quebras de linha.

<strong>`u`:</strong>  
Trata o padrão como uma sequência Unicode.

<strong>`y`:</strong>  
Realiza uma correspondência "sticky", buscando correspondências apenas a partir
do índice indicado pela propriedade `lastIndex` do objeto `RegExp`.

<br>

---

### Algumas regex comuns

<strong>Exemplo de prompt para ChatGPT:</strong>  
Elabore uma regex para telefone no padrão do Brasil. Explique o padrão adotado.

<strong>Atenção:</strong>  
repare que todas as regex a seguir começam e terminam com ^ e $ respectivamente.
Isso significa que a string toda deverá ser verificada para o padrão da regex,
não podendo conter outros conteúdos antes e depois do padrão.

Email (simplificada)  
`/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/`

URL (simplificada)  
`/^((https?|ftp):\/\/)?(([a-z0-9-]+\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d{2,5}))?(\/[a-z0-9-\.\/?#@&%;=~_|]\*)?$/`

Telefone brasileiro  
`/^(?:\+55\s?)?(?:\([1-9]{2}\)|[1-9]{2})\s?(?:9\s?)?[6789][0-9]{3}\s?-?\s?[0-9]{4}$/`

CEP brasileiro  
`/^\d{5}-?\d{3}$/`

Data no formato aaaa-mm-dd (simplificada)  
`/^\d{4}-\d{2}-\d{2}$/`

<br>

---
