# Input Decoration Theme Schema

```txt
https://schema.legytma.com.br/3.0.0/schema/input_decoration_theme.schema.json
```




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 23/04/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [input_decoration_theme.schema.json](../schema/input_decoration_theme.schema.json) |

## Input Decoration Theme Type

`object` ([Input Decoration Theme](input_decoration_theme.md))

# Input Decoration Theme Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :---------------------------------------------- | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hoverColor](#hoverColor)                       | Merged    | Optional | cannot be null | [Input Decoration Theme](app_bar_theme-properties-color.md)                                           |
| [focusColor](#focusColor)                       | Merged    | Optional | cannot be null | [Input Decoration Theme](app_bar_theme-properties-color.md)                                           |
| [contentPadding](#contentPadding)               | Multiple  | Optional | cannot be null | [Input Decoration Theme](button_bar_theme_data-properties-edge-insets-geometry.md) |
| [isDense](#isDense)                             | `boolean` | Optional | cannot be null | [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)                                     |
| [errorStyle](#errorStyle)                       | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                             |
| [alignLabelWithHint](#alignLabelWithHint)       | `boolean` | Optional | cannot be null | [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)                          |
| [border](#border)                               | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                                    |
| [counterStyle](#counterStyle)                   | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                           |
| [disabledBorder](#disabledBorder)               | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                            |
| [enabledBorder](#enabledBorder)                 | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                             |
| [errorBorder](#errorBorder)                     | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                               |
| [errorMaxLines](#errorMaxLines)                 | Multiple  | Optional | cannot be null | [Input Decoration Theme](color-allof-integer.md)                                                     |
| [fillColor](#fillColor)                         | Merged    | Optional | cannot be null | [Input Decoration Theme](app_bar_theme-properties-color.md)                                            |
| [filled](#filled)                               | `boolean` | Optional | cannot be null | [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)                                      |
| [focusedBorder](#focusedBorder)                 | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                             |
| [focusedErrorBorder](#focusedErrorBorder)       | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                        |
| [floatingLabelBehavior](#floatingLabelBehavior) | Multiple  | Optional | can be null    | [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)                     |
| [helperMaxLines](#helperMaxLines)               | Multiple  | Optional | cannot be null | [Input Decoration Theme](color-allof-integer.md)                                                    |
| [helperStyle](#helperStyle)                     | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                            |
| [hintStyle](#hintStyle)                         | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                              |
| [isCollapsed](#isCollapsed)                     | `boolean` | Optional | cannot be null | [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)                                 |
| [labelStyle](#labelStyle)                       | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                             |
| [prefixStyle](#prefixStyle)                     | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                            |
| [suffixStyle](#suffixStyle)                     | `object`  | Optional | cannot be null | [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)                            |

## hoverColor

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`hoverColor`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Input Decoration Theme](app_bar_theme-properties-color.md)

### hoverColor Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### hoverColor Default Value

The default value is:

```json
"0xFF000000"
```

### hoverColor Examples

```json
"#FFFFFFFF"
```

```json
"0xFFFFFFFF"
```

```json
"4294967295"
```

```json
4294967295
```

## focusColor

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`focusColor`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Input Decoration Theme](app_bar_theme-properties-color.md)

### focusColor Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### focusColor Default Value

The default value is:

```json
"0xFF000000"
```

### focusColor Examples

```json
"#FFFFFFFF"
```

```json
"0xFFFFFFFF"
```

```json
"4294967295"
```

```json
4294967295
```

## contentPadding




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`contentPadding`

-   is optional
-   Type: any of the folllowing: `string` or `object` ([Edge Insets Geometry](button_bar_theme_data-properties-edge-insets-geometry.md))
-   cannot be null
-   defined in: [Input Decoration Theme](button_bar_theme_data-properties-edge-insets-geometry.md)

### contentPadding Type

any of the folllowing: `string` or `object` ([Edge Insets Geometry](button_bar_theme_data-properties-edge-insets-geometry.md))

### contentPadding Default Value

The default value is:

```json
{
  "type": "only",
  "bottom": 8
}
```

## isDense

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`isDense`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)

### isDense Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### isDense Default Value

The default value is:

```json
true
```

### isDense Examples

```json
true
```

```json
false
```

## errorStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`errorStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### errorStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## alignLabelWithHint

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`alignLabelWithHint`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)

### alignLabelWithHint Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### alignLabelWithHint Default Value

The default value is:

```json
true
```

### alignLabelWithHint Examples

```json
true
```

```json
false
```

## border




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`border`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### border Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## counterStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`counterStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### counterStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## disabledBorder




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`disabledBorder`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### disabledBorder Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## enabledBorder




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`enabledBorder`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### enabledBorder Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## errorBorder




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`errorBorder`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### errorBorder Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## errorMaxLines

Define the representation of integer acceptable.


> Used to identify parser. Every parser can permit only one type
>

`errorMaxLines`

-   is optional
-   Type: any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))
-   cannot be null
-   defined in: [Input Decoration Theme](color-allof-integer.md)

### errorMaxLines Type

any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))

### errorMaxLines Default Value

The default value is:

```json
10
```

### errorMaxLines Examples

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

## fillColor

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`fillColor`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Input Decoration Theme](app_bar_theme-properties-color.md)

### fillColor Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### fillColor Default Value

The default value is:

```json
"0xFF000000"
```

### fillColor Examples

```json
"#FFFFFFFF"
```

```json
"0xFFFFFFFF"
```

```json
"4294967295"
```

```json
4294967295
```

## filled

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`filled`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)

### filled Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### filled Default Value

The default value is:

```json
true
```

### filled Examples

```json
true
```

```json
false
```

## focusedBorder




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`focusedBorder`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### focusedBorder Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## focusedErrorBorder




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`focusedErrorBorder`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### focusedErrorBorder Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## floatingLabelBehavior




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 15/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`floatingLabelBehavior`

-   is optional
-   Type: any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))
-   can be null
-   defined in: [Input Decoration Theme](bottom_app_bar_theme-properties-dynamic.md)

### floatingLabelBehavior Type

any of the folllowing: `array` or `boolean` or `integer` or `number` or `object` or `string` ([Dynamic](bottom_app_bar_theme-properties-dynamic.md))

## helperMaxLines

Define the representation of integer acceptable.


> Used to identify parser. Every parser can permit only one type
>

`helperMaxLines`

-   is optional
-   Type: any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))
-   cannot be null
-   defined in: [Input Decoration Theme](color-allof-integer.md)

### helperMaxLines Type

any of the folllowing: `string` or `integer` ([Integer](color-allof-integer.md))

### helperMaxLines Default Value

The default value is:

```json
10
```

### helperMaxLines Examples

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

## helperStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`helperStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### helperStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## hintStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`hintStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### hintStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## isCollapsed

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`isCollapsed`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Input Decoration Theme](button_bar_theme_data-properties-boolean.md)

### isCollapsed Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### isCollapsed Default Value

The default value is:

```json
true
```

### isCollapsed Examples

```json
true
```

```json
false
```

## labelStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`labelStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### labelStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## prefixStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`prefixStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### prefixStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))

## suffixStyle

Identify the widget type


> Used to identify parser. Every parser can permit only one type
>

`suffixStyle`

-   is optional
-   Type: `object` ([Text Style](chip_theme_data-properties-text-style-1.md))
-   cannot be null
-   defined in: [Input Decoration Theme](chip_theme_data-properties-text-style-1.md)

### suffixStyle Type

`object` ([Text Style](chip_theme_data-properties-text-style-1.md))
