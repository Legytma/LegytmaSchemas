# Text Decoration Style Schema

```txt
https://schema.legytma.com.br/2.0.0/schema/text_decoration_style.schema.json#/properties/decorationStyle
```

Text decoration style


> Used to identify parser. Every parser can permit only one type
>

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [text_style.schema.json\*](../schema/text_style.schema.json) |

## decorationStyle Type

`string` ([Text Decoration Style](text_style-properties-text-decoration-style.md))

## decorationStyle Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | ----------- |
| `"dashed"` |             |
| `"dotted"` |             |
| `"double"` |             |
| `"solid"`  |             |
| `"wavy"`   |             |

## decorationStyle Examples

```json
"dashed"
```

```json
"dotted"
```

```json
"double"
```

```json
"solid"
```

```json
"wavy"
```
