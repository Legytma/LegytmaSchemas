# Toolbar Options Schema

```txt
https://schema.legytma.com.br/1.1.2/schema/toolbar_options.schema.json
```




> Created by Windol [windol@legytma.com.br](mailto:windol@legytma.com.br) at 30/04/2020.
> Copyright (c) 2020 Legytma Soluções Inteligentes (<https://legytma.com.br>). All rights reserved.
>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [toolbar_options.schema.json](../schema/toolbar_options.schema.json) |

## Toolbar Options Type

`object` ([Toolbar Options](toolbar_options.md))

# Toolbar Options Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :---------------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [copy](#copy)           | `boolean` | Optional | cannot be null | [Toolbar Options](button_bar_theme_data-properties-boolean.md)      |
| [cut](#cut)             | `boolean` | Optional | cannot be null | [Toolbar Options](button_bar_theme_data-properties-boolean.md)       |
| [paste](#paste)         | `boolean` | Optional | cannot be null | [Toolbar Options](button_bar_theme_data-properties-boolean.md)     |
| [selectAll](#selectAll) | `boolean` | Optional | cannot be null | [Toolbar Options](button_bar_theme_data-properties-boolean.md) |

## copy

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`copy`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Toolbar Options](button_bar_theme_data-properties-boolean.md)

### copy Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### copy Default Value

The default value is:

```json
true
```

### copy Examples

```json
true
```

```json
false
```

## cut

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`cut`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Toolbar Options](button_bar_theme_data-properties-boolean.md)

### cut Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### cut Default Value

The default value is:

```json
true
```

### cut Examples

```json
true
```

```json
false
```

## paste

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`paste`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Toolbar Options](button_bar_theme_data-properties-boolean.md)

### paste Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### paste Default Value

The default value is:

```json
true
```

### paste Examples

```json
true
```

```json
false
```

## selectAll

Define the representation of boolean acceptable.


> Used to identify parser. Every parser can permit only one type
>

`selectAll`

-   is optional
-   Type: `boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))
-   cannot be null
-   defined in: [Toolbar Options](button_bar_theme_data-properties-boolean.md)

### selectAll Type

`boolean` ([Boolean](button_bar_theme_data-properties-boolean.md))

### selectAll Default Value

The default value is:

```json
true
```

### selectAll Examples

```json
true
```

```json
false
```
