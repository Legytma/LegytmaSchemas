# Grid View Params Schema

```txt
https://schema.legytma.com.br/3.0.0/schema/grid_view_params.schema.json
```




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 07/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [grid_view_params.schema.json](../schema/grid_view_params.schema.json) |

## Grid View Params Type

`object` ([Grid View Params](grid_view_params.md))

# Grid View Params Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------------ | --------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [crossAxisCount](#crossAxisCount)     | Multiple  | Optional | cannot be null | [Grid View Params](color-allof-integer.md)                                             |
| [scrollDirection](#scrollDirection)   | `string`  | Optional | cannot be null | [Grid View Params](grid_view_params-properties-axis.md)                              |
| [reverse](#reverse)                   | `boolean` | Optional | cannot be null | [Grid View Params](button_bar_theme_data-properties-boolean.md)                              |
| [shrinkWrap](#shrinkWrap)             | `boolean` | Optional | cannot be null | [Grid View Params](button_bar_theme_data-properties-boolean.md)                           |
| [cacheExtent](#cacheExtent)           | Merged    | Optional | cannot be null | [Grid View Params](app_bar_theme-properties-double.md)                                 |
| [padding](#padding)                   | Multiple  | Optional | cannot be null | [Grid View Params](button_bar_theme_data-properties-edge-insets-geometry.md) |
| [mainAxisSpacing](#mainAxisSpacing)   | Merged    | Optional | cannot be null | [Grid View Params](app_bar_theme-properties-double.md)                             |
| [crossAxisSpacing](#crossAxisSpacing) | Merged    | Optional | cannot be null | [Grid View Params](app_bar_theme-properties-double.md)                            |
| [childAspectRatio](#childAspectRatio) | Merged    | Optional | cannot be null | [Grid View Params](app_bar_theme-properties-double.md)                            |
| [children](#children)                 | `array`   | Optional | cannot be null | [Grid View Params](grid_view_params-properties-list-of-widgets.md)                   |
| [pageSize](#pageSize)                 | Multiple  | Optional | cannot be null | [Grid View Params](color-allof-integer.md)                                                   |
| [loadMoreUrl](#loadMoreUrl)           | `string`  | Optional | cannot be null | [Grid View Params](grid_view_params-properties-load-more-url.md)             |
| [isDemo](#isDemo)                     | `boolean` | Optional | cannot be null | [Grid View Params](button_bar_theme_data-properties-boolean.md)                               |

## crossAxisCount

Define the representation of integer acceptable.


> Used to identify parser. Every parser can permit only one type
>

`crossAxisCount`

-   is optional
-   Type: any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))
-   cannot be null
-   defined in: [Grid View Params](color-allof-integer.md)

### crossAxisCount Type

any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))

### crossAxisCount Default Value

The default value is:

```json
10
```

### crossAxisCount Examples

```json
"123"
```

```json
"#32"
```

```json
"0b111001"
```

```json
"$23"
```

```json
"0x162"
```

```json
123
```

## scrollDirection




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`scrollDirection`

-   is optional
-   Type: `string` ([Axis](grid_view_params-properties-axis.md))
-   cannot be null
-   defined in: [Grid View Params](grid_view_params-properties-axis.md)

### scrollDirection Type

`string` ([Axis](grid_view_params-properties-axis.md))

### scrollDirection Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | ----------- |
| `"horizontal"` |             |
| `"vertical"`   |             |

### scrollDirection Default Value

The default value is:

```json
"vertical"
```

## reverse

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`reverse`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Grid View Params](button_bar_theme_data-properties-boolean.md)

### reverse Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### reverse Default Value

The default value is:

```json
true
```

### reverse Examples

```json
true
```

```json
false
```

## shrinkWrap

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`shrinkWrap`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Grid View Params](button_bar_theme_data-properties-boolean.md)

### shrinkWrap Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### shrinkWrap Default Value

The default value is:

```json
true
```

### shrinkWrap Examples

```json
true
```

```json
false
```

## cacheExtent

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`cacheExtent`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Grid View Params](app_bar_theme-properties-double.md)

### cacheExtent Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-definitions-doublenumber.md)
-   [Untitled string in Double](double-definitions-doublestring.md)
-   [Untitled string in Double](double-definitions-doubleenum.md)

### cacheExtent Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### cacheExtent Default Value

The default value is:

```json
1
```

## padding




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`padding`

-   is optional
-   Type: any of the folllowing: `string` or `object` ([Edge Insets Geometry](button_bar_theme_data-properties-edge-insets-geometry.md))
-   cannot be null
-   defined in: [Grid View Params](button_bar_theme_data-properties-edge-insets-geometry.md)

### padding Type

any of the folllowing: `string` or `object` ([Edge Insets Geometry](button_bar_theme_data-properties-edge-insets-geometry.md))

### padding Default Value

The default value is:

```json
{
  "type": "only",
  "bottom": 8
}
```

## mainAxisSpacing

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`mainAxisSpacing`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Grid View Params](app_bar_theme-properties-double.md)

### mainAxisSpacing Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-definitions-doublenumber.md)
-   [Untitled string in Double](double-definitions-doublestring.md)
-   [Untitled string in Double](double-definitions-doubleenum.md)

### mainAxisSpacing Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### mainAxisSpacing Default Value

The default value is:

```json
1
```

## crossAxisSpacing

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`crossAxisSpacing`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Grid View Params](app_bar_theme-properties-double.md)

### crossAxisSpacing Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-definitions-doublenumber.md)
-   [Untitled string in Double](double-definitions-doublestring.md)
-   [Untitled string in Double](double-definitions-doubleenum.md)

### crossAxisSpacing Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### crossAxisSpacing Default Value

The default value is:

```json
1
```

## childAspectRatio

Define the representation of double acceptable.


> Used to identify parser. Every parser can permit only one type
>

`childAspectRatio`

-   is optional
-   Type: merged type ([Double](app_bar_theme-properties-double.md))
-   cannot be null
-   defined in: [Grid View Params](app_bar_theme-properties-double.md)

### childAspectRatio Type

merged type ([Double](app_bar_theme-properties-double.md))

one (and only one) of

-   [Untitled number in Double](double-definitions-doublenumber.md)
-   [Untitled string in Double](double-definitions-doublestring.md)
-   [Untitled string in Double](double-definitions-doubleenum.md)

### childAspectRatio Constraints

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### childAspectRatio Default Value

The default value is:

```json
1
```

## children

List of Schema to validation of JSON used to parse Widgets.


> You can add any widget inheritance's.
>

`children`

-   is optional
-   Type: `object[]` ([Widget](list_widget-widget.md))
-   cannot be null
-   defined in: [Grid View Params](grid_view_params-properties-list-of-widgets.md)

### children Type

`object[]` ([Widget](list_widget-widget.md))

### children Default Value

The default value is:

```json
[]
```

## pageSize

Define the representation of integer acceptable.


> Used to identify parser. Every parser can permit only one type
>

`pageSize`

-   is optional
-   Type: any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))
-   cannot be null
-   defined in: [Grid View Params](color-allof-integer.md)

### pageSize Type

any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))

### pageSize Default Value

The default value is:

```json
10
```

### pageSize Examples

```json
"123"
```

```json
"#32"
```

```json
"0b111001"
```

```json
"$23"
```

```json
"0x162"
```

```json
123
```

## loadMoreUrl




`loadMoreUrl`

-   is optional
-   Type: `string` ([Load More URL](grid_view_params-properties-load-more-url.md))
-   cannot be null
-   defined in: [Grid View Params](grid_view_params-properties-load-more-url.md)

### loadMoreUrl Type

`string` ([Load More URL](grid_view_params-properties-load-more-url.md))

## isDemo

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`isDemo`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Grid View Params](button_bar_theme_data-properties-boolean.md)

### isDemo Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### isDemo Default Value

The default value is:

```json
true
```

### isDemo Examples

```json
true
```

```json
false
```
