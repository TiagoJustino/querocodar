---
title: LeetCode 242. Valid Anagram
published_at: 2024-06-24T19:45:39.000Z
snippet: Array, Hash Table, Sorting
---

# [LeetCode 242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

<!--
TODO
<p>
  <a
    href="https://www.youtube.com/watch?v=a87ZStuGVks"
    rel="noopener noreferrer">
      <img
        src="https://img.youtube.com/vi/a87ZStuGVks/0.jpg"
        width="95%"
        alt="Link para o vídeo do YouTube">
  </a>
</p>
-->

> Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
>
> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
>
> Example 1:
>
> > Input: s = "anagram", t = "nagaram"
> >
> > Output: true
>
> Example 2:
>
> > Input: s = "rat", t = "car"
> >
> > Output: false
>
> Constraints:
> - 1 <= s.length, t.length <= 5 * $10^4$
> - `s` and `t` consist of lowercase English letters.

## O problema - Identificando anagramas

O problema atual foca em identificarmos de forma eficiente se uma palavra é anagrama de outra. A descrição do problema
que um anagrama é formado rearranjando as letras de uma palavra. Isso equivale a dizer que um anagrama é uma permutação
de uma palavra que resulta em uma palavra diferente da original. Sendo mais preciso na definição, temos ainda que
nenhuma letra pode ser adicionada ou removida a palavra original para formação de um anagrama.

Dessa forma, iremos utilizar as seguintes características para a definição de nossa solução:

Uma palavra é anagrama de outra se somente se:

1. As duas palavras têm a mesma quantidade de letras;

2. Cada letra que está presente em uma palavra está presente também na outra palavra; e

3. Cada letra aparece a mesma quantidade de vezes nas duas palavras.

## Solução naïve

Considerando a definição do problema, a nossa solução consistirá nos seguintes passos:

1. Caso as duas strings tenham tamanho diferente a resposta final é `False`.

2. Em seguida, percorremos as duas palavras da entrada, contando a quantidade de vezes que cada letra aparece em cada
   palavra. Fazemos isso armazenando a frequência de cada letra de cada palavra em uma tabela hash onde a chave é cada
uma das letras do alfabeto (de `a` a `z`) e o valor é a frequência daquela letra.

3. Por último, comparamos a frequência de cada letra armazenada em cada uma das tabelas hash. Caso alguma delas seja
   diferente, a resposta final é `False`. Se todas forem iguais, a resposta final é `True`.

O código em python fica da seguinte forma:
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        table_s, table_t = dict(), dict()
        if len(s) != len(t):
            return False
        for letter in s:
            table_s[letter] = table_s.get(letter, 0) + 1
        for letter in t:
            table_t[letter] = table_t.get(letter, 0) + 1
        for key in table_s:
            if key not in table_t:
                return False
            if table_s[key] != table_t[key]:
                return False
        return True
```

### Complexidade temporal

Para esse algoritmo devemos percorrer todas as letras da string `s`, em seguida, todas as letras da string `t` e, por
último, todas as entradas da nossa tabela hash. Considerando que a string `s` tem tamanho `A` e a string `t` tem tamanho
`B` e que a nossa tabela hash terá no máximo tamanho 26 (número de caracteres minúsculos da língua inglesa), podemos
escrever a complexidade temporal da nossa solução como $\mathcal{O}(A + B + 26)$.

A título de simplificar a nossa expressão, podemos ignorar a constante (26) e em seguida podemos também considerar que
as duas string terão mesmo tamanho, `n`, o que nos permite reescrever a expressão como $\mathcal{O}(2 * n)$ que por sua
vez pode ser simplificado em $\mathcal{O}(n)$.

### Complexidade espacial

No pior caso precisamos inserir nas duas tabelas hash cada uma das 26 letras do alfabeto. Podemos considerar então que a
complexidade espacial da nossa solução é constante, ou $\mathcal{O}(1)$.

## Otimização

Para otimizarmos a nossa solução anterior, iremos utilizar apenas uma tabela hash ao invés de duas. Com isso, alteramos o
passo 2 da solução anterior para incrementar o contador de frequência enquanto estivermos passando na primeira string e
decrementar o contador de frequência enquanto estivermos passando na segunda string. Assim, podemos retornar `False`
imediatamente caso o contador de alguma letra seja menor que zero (isso indica que a presença daquela letra é maior na
segunda string do que na primeira).

Por último, alteramos o passo 2 da solução anterior para percorrer a frequência de cada uma das letras, verificando se
alguma delas é diferente de zero. Caso alguma seja diferente de zero, retornamos `False`. Caso contrário, retornamos
`True`.

O código em python fica da seguinte forma:

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count: Dict[srt, num] = {}
        for l in s:
            count[l] = count.get(l, 0) + 1
        for l in t:
            count[l] = count.get(l, 0) - 1
            if count[l] < 0:
                return False
        for key in count:
            if count[key] != 0:
                return False
        return True
```

### Complexidade temporal

Essa otimização pode melhorar o tempo de execução para alguns casos de entrada, no entanto, como ainda precisamos
percorrer toda a string `s` e, em alguns casos, toda a string `t`, temos que a complexidade temporal também é
$\mathcal{O}(n)$, assim como na solução anterior.

### Complexidade espacial

Diferente da solução anterior, alocamos apenas uma tabela hash ao invés de duas. No pior caso precisamos inserir cada
uma das 26 letras do alfabeto. Com isso, reduzimos o consumo de memória pela metade em relação a solução anterior. No
entanto, a complexidade temporal dessa solução é constante, ou $\mathcal{O}(1)$, assim como na solução anterior.
