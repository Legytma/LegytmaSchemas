# Color Scheme Schema

```txt
https://schema.legytma.com.br/2.0.0/schema/color_scheme.schema.json
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [color_scheme.schema.json](../schema/color_scheme.schema.json) |

## Color Scheme Type

`object` ([Color Scheme](color_scheme.md))

# Color Scheme Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :------------------------------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [primary](#primary)                   | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)              |
| [primaryVariant](#primaryVariant)     | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)       |
| [secondary](#secondary)               | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)            |
| [secondaryVariant](#secondaryVariant) | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)     |
| [surface](#surface)                   | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)              |
| [background](#background)             | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)           |
| [error](#error)                       | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)                |
| [onPrimary](#onPrimary)               | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)            |
| [onSecondary](#onSecondary)           | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)          |
| [onSurface](#onSurface)               | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)            |
| [onBackground](#onBackground)         | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)         |
| [onError](#onError)                   | Merged   | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-color.md)              |
| [brightness](#brightness)             | `string` | Optional | cannot be null | [Color Scheme](app_bar_theme-properties-brightness.md) |

## primary

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`primary`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### primary Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### primary Default Value

The default value is:

```json
"0xFF000000"
```

### primary Examples

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

## primaryVariant

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`primaryVariant`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### primaryVariant Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### primaryVariant Default Value

The default value is:

```json
"0xFF000000"
```

### primaryVariant Examples

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

## secondary

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`secondary`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### secondary Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### secondary Default Value

The default value is:

```json
"0xFF000000"
```

### secondary Examples

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

## secondaryVariant

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`secondaryVariant`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### secondaryVariant Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### secondaryVariant Default Value

The default value is:

```json
"0xFF000000"
```

### secondaryVariant Examples

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

## surface

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`surface`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### surface Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### surface Default Value

The default value is:

```json
"0xFF000000"
```

### surface Examples

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

## background

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`background`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### background Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### background Default Value

The default value is:

```json
"0xFF000000"
```

### background Examples

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

## error

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`error`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### error Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### error Default Value

The default value is:

```json
"0xFF000000"
```

### error Examples

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

## onPrimary

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`onPrimary`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### onPrimary Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### onPrimary Default Value

The default value is:

```json
"0xFF000000"
```

### onPrimary Examples

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

## onSecondary

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`onSecondary`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### onSecondary Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### onSecondary Default Value

The default value is:

```json
"0xFF000000"
```

### onSecondary Examples

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

## onSurface

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`onSurface`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### onSurface Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### onSurface Default Value

The default value is:

```json
"0xFF000000"
```

### onSurface Examples

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

## onBackground

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`onBackground`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### onBackground Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### onBackground Default Value

The default value is:

```json
"0xFF000000"
```

### onBackground Examples

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

## onError

A number in format string or integer


> Used to identify parser. Every parser can permit only one type
>

`onError`

-   is optional
-   Type: merged type ([Color](app_bar_theme-properties-color.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-color.md)

### onError Type

merged type ([Color](app_bar_theme-properties-color.md))

all of

-   [Integer](color-allof-integer.md)

### onError Default Value

The default value is:

```json
"0xFF000000"
```

### onError Examples

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

## brightness




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 01/05/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

`brightness`

-   is optional
-   Type: `string` ([Brightness](app_bar_theme-properties-brightness.md))
-   cannot be null
-   defined in: [Color Scheme](app_bar_theme-properties-brightness.md)

### brightness Type

`string` ([Brightness](app_bar_theme-properties-brightness.md))

### brightness Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | ----------- |
| `"dark"`  |             |
| `"light"` |             |
