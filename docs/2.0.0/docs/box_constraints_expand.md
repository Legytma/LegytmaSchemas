# Box Constraints Expand Schema

```txt
https://schema.legytma.com.br/2.0.0/schema/box_constraints_expand.schema.json
```




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [box_constraints_expand.schema.json](../schema/box_constraints_expand.schema.json) |

## Box Constraints Expand Type

`object` ([Box Constraints Expand](box_constraints_expand.md))

any of

-   [Box Constraints](box_constraints_default-anyof-box-constraints.md)

# Box Constraints Expand Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)     | `string` | Optional | cannot be null | [Box Constraints Expand](box_constraints_expand-properties-type.md) |
| [width](#width)   | Merged   | Optional | cannot be null | [Box Constraints Expand](app_bar_theme-properties-double.md)                       |
| [height](#height) | Merged   | Optional | cannot be null | [Box Constraints Expand](app_bar_theme-properties-double.md)                      |

## type

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`type`

-   is optional
-   Type: `string` ([Type](box_constraints_expand-properties-type.md))
-   cannot be null
-   defined in: [Box Constraints Expand](box_constraints_expand-properties-type.md)

### type Type

`string` ([Type](box_constraints_expand-properties-type.md))

### type Constraints

**constant**: the value of this property must be equal to:

```json
"expand"
```

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | ----------- |
| `"loose"`          |             |
| `"tightFor"`       |             |
| `"expand"`         |             |
| `"tightForFinite"` |             |
| `"lerp"`           |             |
| `"default"`        |             |

## width

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`width`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Box Constraints Expand](app_bar_theme-properties-double.md)

### width Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-oneof-0.md)
-   [Untitled string in Double](double-oneof-1.md)
-   [Untitled string in Double](double-oneof-2.md)

### width Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### width Default Value

The default value is:

```json
1
```

## height

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`height`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Box Constraints Expand](app_bar_theme-properties-double.md)

### height Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-oneof-0.md)
-   [Untitled string in Double](double-oneof-1.md)
-   [Untitled string in Double](double-oneof-2.md)

### height Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### height Default Value

The default value is:

```json
1
```
