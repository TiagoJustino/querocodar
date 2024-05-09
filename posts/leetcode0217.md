---
title: LeetCode 217. Contains Duplicate
published_at: 2024-05-09T20:43:39.000Z
snippet: Array, Hash Table, Sorting
---

# [LeetCode 217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

> Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.
>
> Example 1:
>
> > Input: nums = [1,2,3,1]
> >
> > Output: true
>
> Example 2:
>
> > Input: nums = [1,2,3,4]
> >
> > Output: false
> 
> Constraints:
> - 1 <= nums.length <= $10^5$
> - $-10^9$ <= nums[i] <= $10^9$


## Solução naïve

Uma forma simples de resolvermos esse problema é combinarmos todos os elementos
dois a dois, verificando se eles são iguais entre si. Por exemplo, no caso da
entrada [1,2,3,4], pegamos o elemento 1 e comparamos com os elementos 2, 3 e 4.
Em seguida, pegamos o elemento 2 e comparamos com os elementos 3 e 4 (note que
não precisamos comparar com o elemento 1 pois já fizemos essa comparação).

O código em python fica da seguinte forma:

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums), 1):
                if nums[i] == nums[j]:
                    return True
        return False
```

### Complexidade temporal

Para este algoritmo temos a seguinte complexidade temporal:

$$ (n - 1) + (n - 2) + (n - 3) + ... + 2 + 1 $$
$$ = \sum_{x = 1}^{n - 1} x $$
$$ = \frac{n * (n - 1)}{2} $$
$$ = \mathcal{O}(n^2) $$

### Complexidade espacial

Como não usamos qualquer memória extra, temos que a complexidade temporal é $\mathcal{O}(1)$.

## Solução otimizada

Considerando que a entrada pode ter tamanho até 100000, a complexidade temporal de $\mathcal{O}(n^2)$ não é ideal.
Conseguimos chegar a uma segunda solução desse problema utilizando uma [tabela hash](https://pt.wikipedia.org/wiki/Tabela_de_dispers%C3%A3o).
Uma tabela hash nos permite inserir e consultar valores com complexidade temporal $\mathcal{O}(1)$. Dessa forma,
Para solucionar o problema, devemos percorrer a entrada verificando, para cada elemento, se existe em nossa tabela hash.
Caso não exista, inserimos na tabela e passsamos para o elemento seguinte.

O código em python fica da seguinte forma:

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map: Dict[int, bool] = {}
        for num in nums:
            if num in map:
                return True
            map[num] = True
        return False
```

### Complexidade temporal

Considerando o fato que a inserção e a consulta de valores na tabela hash é feita em complexidade temporal
$\mathcal{O}(1)$ e considerando que no pior caso precisamos passar por cada um dos elementos
da entrada, temos que a complexidade temporal para esse algoritmo é $\mathcal{O}(n)$.

### Complexidade espacial

Como no pior caso precisamos inserir na tabela hash cada um dos elementos da entrada, temos que a complexidade
espacial para esse algoritmo é $\mathcal{O}(n)$.
