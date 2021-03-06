# Box Constraints Schema

```txt
https://schema.legytma.com.br/1.1.2/schema/box_constraints.schema.json
```




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Allowed               | none                | [box_constraints.schema.json](../schema/box_constraints.schema.json) |

## Box Constraints Type

`object` ([Box Constraints](box_constraints.md))

# Box Constraints Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                           |
| :------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Optional | cannot be null | [Box Constraints](box_constraints-properties-type.md) |

## type

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`type`

-   is optional
-   Type: `string` ([Type](box_constraints-properties-type.md))
-   cannot be null
-   defined in: [Box Constraints](box_constraints-properties-type.md)

### type Type

`string` ([Type](box_constraints-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | ----------- |
| `"loose"`          |             |
| `"tightFor"`       |             |
| `"expand"`         |             |
| `"tightForFinite"` |             |
| `"lerp"`           |             |
| `"default"`        |             |

# Box Constraints Definitions

## Definitions group type

Reference this group by using

```json
{"$ref":"https://schema.legytma.com.br/1.1.2/schema/box_constraints.schema.json#/definitions/type"}
```

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`type`

-   is optional
-   Type: `string` ([Type](box_constraints-definitions-type.md))
-   cannot be null
-   defined in: [Box Constraints](box_constraints-definitions-type.md)

### type Type

`string` ([Type](box_constraints-definitions-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | ----------- |
| `"loose"`          |             |
| `"tightFor"`       |             |
| `"expand"`         |             |
| `"tightForFinite"` |             |
| `"lerp"`           |             |
| `"default"`        |             |
