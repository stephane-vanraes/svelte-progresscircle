# Svelte Progress Circle

A circular progress bar as a Svelte component.
[Demo page](https://stephane-vanraes.github.io/svelte-progresscircle/)

## Basic usage

```html
<ProgressCircle max="10" {value} />
```

## Props

### max

The maximum value.

### value

The current value.

## Slotted Content

The component shows the current value in the center of the circle by default in a rather plain unstyled way. This is however the fallback behaviour for a slot offering the opportunity to style this to your needs:

```html
<ProgressCircle max="10" {value}>
    <span>{value}</span>
</ProgressCirlce>
```

## Styling

This component use CSS Variables for the styling with certain defaults, overriding these can easily be done in the parent.

### --progress-fill

The background color, defaults to _transparent_.

### --progress-linecap

The linecap defining how the edge of the progressbar will look like, defaults to _round_.

### --progress-color

The color of the actually bar, defaults to _lightgreen_

### --progress-trackcolor

The color of the track, defaults to _grey_

### --progress-width

The width of the bar, defaults to _10px_.

### --progress-trackwidth

The width of the track, defaults to _9px_.
